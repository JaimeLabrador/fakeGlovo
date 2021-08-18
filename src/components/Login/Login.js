import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import firebase from "../../config/firebase";

export const userContext = React.createContext(null);

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => setUser(data);

  firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then((currentUser) => {
      const { email, uid } = currentUser.user;
      console.log(currentUser);
    })
    .catch((err) => {
      console.log("error in creatUsersWith...", err.message);
    });

  return (
    <userContext.Provider value={{ user }}>
      <div>
      {user.email  ? <Redirect from='/login' to=''/> 
      :
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email")} />
        <input {...register("password")} />
        <button type="submit">Login</button>
      </form>
      }
      </div>
    </userContext.Provider>
  );
};

export default Login;
