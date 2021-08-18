import React, {useState, useEffect} from 'react'
import { useForm } from "react-hook-form";
import firebase from '../../config/firebase'

const Register = () => {

    const [user, setUser] = useState({email:'', password:''})
    const { register, handleSubmit } = useForm();
    const onSubmit = data => setUser(data); 

    useEffect ( () => {
      firebase.auth().onAuthStateChanged( () => {
        console.log(user)
      })
    },[])

    firebase
    .auth()
    .createUserWithEmailAndPassword(user.email, user.password)
    .then(currentUser =>{
        const {email, uid} = currentUser.user;
        console.log({currentUser})
    })
    .catch(err => {
        console.log('error in creatUsersWith...', err.message)
    })

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email")}/>
        <input {...register("password")}/>
        <button type='submit'>Login</button>
      </form> 
    </div>
  );
};

export default Register;
