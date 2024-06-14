import { useState } from "react";
import "../App.css";

import Header from "../components/Header";

export default function Login () {
  
  return (
    <div className="App">
      <Header />
      <div className="Home">
        <h1 className="sign-In-title">Sign In:</h1>
        <div className="Input-bar">
        Email
        <input className="email-sign-in-input"></input>
        </div>
        <div className="input-bar">
        password
        <input className="password-sign-in-input"></input>
        </div>
        <div className="button-div">
        <button className="sign-in-button" >Sign In</button>
        </div>
      </div>
      
    </div>
  );
}


