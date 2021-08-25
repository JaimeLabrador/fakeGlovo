import React, {useState, useEffect} from 'react'
import { useForm } from "react-hook-form";
import firebase from '../../config/firebase';
import loginImage from "../../assets/loginImage.jpg";
import { useHistory } from "react-router-dom";

const Register = () => {

    const [user, setUser] = useState({email:'', password:''});
    const [currentUser, setCurrentUser] = useState();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => setUser(data);
    let history = useHistory();

  useEffect(() => {
    firebase
    .auth()
    .createUserWithEmailAndPassword(user.email, user.password)
    .then(userInfo =>{
      setCurrentUser (userInfo.user.email, userInfo.user.uid);
      history.push("/")
    })
    .catch(err => {
        console.log('error in creatUsersWith...', err.message)
    })
  }, [user])

  return (
    <div>
        <img src={loginImage} alt='logo' className='login__logo'/>
      <form className='login__form' onSubmit={handleSubmit(onSubmit)}>
        <input className='email__input' {...register("email")} />
        <input className='password__input' {...register("password")} />
        <button className='login__button' type="submit">Enviar</button>
      </form> 
    </div>
  );
};

export default Register;
