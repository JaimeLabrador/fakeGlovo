import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import firebase from '../config/firebase'
import Routes from "../config/Routes";
import Header from "../components/common/Header";
import PreviousOrders from "../components/common/PreviousOrders";
import SearchInput from "../components/common/SearchInput";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";

function App() {
  const [user, setUser] = useState();
  useEffect (() => {
    firebase.auth().onAuthStateChanged(currentUser => {
      if (currentUser) {
        setUser({uid:currentUser.uid, email:currentUser.email})
      } else {
        setUser(null)
      }
    })
  },[])

  return (
    <Router>
      <Switch>
        <Route exact path={Routes.home}>
          {user === null ? <Redirect to="/login"/>
          :
          <>
            <Header/>
            <SearchInput/>
            <Home/>
            <PreviousOrders/>
          </>
          }
        </Route>
        <Route exact path={Routes.login}>
          <Login />
        </Route>
        <Route exact path={Routes.register}>
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
