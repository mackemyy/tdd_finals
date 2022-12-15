import { useState } from "react";
import './Login.css';

const Login = () => {
    return (
        <>
        <div className="login-page">
              <div className="loginForm">
                <div className="header">
                    <div className="login_title">Welcome back!</div>
                    <div className="login_subtitle">Login to your account.</div>
                </div>
                <div className="input_fields">
                    <form action="">
                        <label htmlFor="email" data-testid="email">Email: <br/></label> 
                        <input type="text" id="email" name="email" data-testid="email"/>
                        <label htmlFor="password" data-testid="password">Password:</label>
                        <input type="password" id="password" name="password" data-testid="password"/>
                        {/* <i className="far fa-eye" id="togglePassword"></i> */}
                    </form>
                </div>
                <div>
                    <button className="loginBtn" data-testid="login-btn">LOGIN</button>
                </div>
            </div>
        </div>
        </>
    )
};
export default Login;