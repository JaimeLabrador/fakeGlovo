import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import firebase from "../../config/firebase";
import GoogleButton from "react-google-button";

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
      console.log({currentUser});
      history.push("/");
    }).catch((err) => {
      console.log("error in login...", err.message);

    })
  }
 
  return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("email")} />
          <input {...register("password")} />
          <button type="submit">Login</button>
        </form>
        <GoogleButton label='Entrar con Google' onClick={handleGoogleLogin}/>
      </div>
  );
};

export default Login;
