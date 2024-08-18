
import React from "react";
import "./loginpopup.css";
import { assets } from "../../Food Del Frontend Assets/assets/assets"
import { useState } from "react";
const Login = ({ setState }) => {

    console.log(setState)

    const [currState, setcurrstate] = useState("login")
    return (
        <div className="login-popup">
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setState(false)} src={assets.cross_icon} alt="" /> 

                </div>
                <div className="login-popup-inputs">
                    {currState === "login" ? <></> : <input type="text" placeholder="your name" required />}
                    <input type="email" placeholder="your name" required />
                    <input type="password" placeholder="password" required />

                </div>
                <button>{currState === "signup" ? "create account" : "login"}</button>
                <div className="login-popup-condition">
                    <input type="chechkbox" required />
                    <p>By continuing ,i agree to the terms of use & privacy policy</p>
                </div>
                {currState === "login"
                    ? <p>create a new account? <span onClick={() => setcurrstate("signup")}>Click here </span></p>
                    : <p>already have an account?<span onClick={() => setcurrstate("login")}>login here</span></p>
                }
            </form>
        </div>
    )
}
export default Login