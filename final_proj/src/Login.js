import { useState } from "react";
import './Login.css';

const Login = () => {
    return (
        <>
        <div>
            <div class="topnav">
                <a href="#login" class="active" id="loginbtn">LOGIN</a>
                <a href="#products">PRODUCTS</a>
                <a href="#about">ABOUT</a>
                <a href="#home">HOME</a>
            </div>
              <div class="loginForm">
                <div class="header">
                    <div class="title">Welcome back!</div>
                    <div class="subtitle">Login to your account.</div>
                </div>
                <div class="input_fields">
                    <form action="">
                        <label for="email" data-testid="email">Email:</label> 
                        <input type="text" id="email" name="email" data-testid="email"/>
                        <label for="password" data-testid="password">Password:</label>
                        <input type="password" id="password" name="password" data-testid="password"/>
                        <i class="far fa-eye" id="togglePassword"></i>
                    </form>
                </div>
                <div>
                    <button class="loginBtn" data-testid="login-btn">LOGIN</button>
                </div>
            </div>
        </div>
        </>
    )
};
export default Login;