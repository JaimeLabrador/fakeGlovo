import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Routes from "../config/Routes";
import Header from "../components/common/Header";
import PreviousOrders from "../components/common/PreviousOrders";
import SearchInput from "../components/common/SearchInput";
import Home from "../components/Home";
import "./App.css";
import Login from "../components/Login";
import Register from "../components/Register";
import { userContext } from "../components/Login/Login";
import React, { useContext } from "react";

function App() {
  const userData = useContext(userContext);
  console.log(userData);
  return (
    <Router>
      <Switch>
        <Route exact path={Routes.home}>
          {userData === null ? <Redirect to="/login"/>
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
