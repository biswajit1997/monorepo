import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./componets/Login/Header";
import Login from "./componets/Login/Login";
import Logout from "./componets/Login/Logout";
import Home from "./componets/Home/Home";
import Nav from "./componets/Register/Nav";
import Register from "./componets/Register/Register";
import Stripe from "./componets/Home/Stripe";
import PostDetails from "./componets/Home/PostDetails";
import Navbar from "./componets/Home/Navbar";
import Head from "./componets/Main/Head";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Head />
        </Route>
        <Route exact path="/login">
          <Header />
          <Login />
        </Route>
        <Route exact path="/logout">
          <Logout />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/register">
          <Nav />
          <Register />
        </Route>
        <Route path="/stripe">
          <Stripe />
        </Route>
        <Route exact path="/postdetails/:id">
          <Navbar />
          <PostDetails />
        </Route>
        <Route exact path="/home/:idd">
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
