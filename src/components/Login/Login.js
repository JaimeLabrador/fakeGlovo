import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import firebase from "../../config/firebase";
import GoogleButton from "react-google-button";
import loginImage from "../../assets/loginImage.jpg";
import "./login.css"

export const userContext = React.createContext(null);

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [currentUser, setCurrentUser] = useState();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => setUser(data);
  let history = useHistory();

  useEffect (() => {
    firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then((userInfo) => {
      setCurrentUser (userInfo.user.email, userInfo.user.uid);
      history.push("/")
    })
    .catch((err) => {
      console.log("error in login...", err.message);
    });
  },)

  const handleGoogleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then (() => {
      history.push("/");
    }).catch((err) => {
      console.log("error in login...", err.message);

    })
  }
 
  return (
      <div className='login'>
        <img src={loginImage} alt='logo' className='login__logo'/>
        <form className='login__form' onSubmit={handleSubmit(onSubmit)}>
          <input className='email__input' {...register("email")} />
          <input className='password__input' {...register("password")} />
          <button className='login__button' type="submit">Login</button>
          <GoogleButton className='login__google' label='Entrar con Google' onClick={handleGoogleLogin}/>
          <h3 className='register__text'>Aún no estás registrado?</h3>
          <Link className='register__link' to="/register"> Registrarme </Link>
        </form>
      </div>
  );
};

export default Login;
