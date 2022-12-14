import { useState } from "react";
import './Login.css';
import Checkout from "./Checkout";

const Login = () => {
    const [showCheckout, setShowCheckout] = useState(false);
    const [user, setUser] = useState ({
        email: '',
        password: '',
    });

    const [result, setResult] = useState('');

    const onChange = (evt) => {
        const value = evt.target.value;
        const name = evt.target.name;
        setUser({
            ...user,
            [name]: value
        });
    }

    const sendLogin = async (user) => {
        console.log(user);
        const url = 'https://reqres.in/api/login';
		const params = {
			"email": user.email,
			"password": user.password
		}

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params), 
        })
        .then((response) => response.json())
		.then((data) => {
		  	if(data && data.token) {
		  		setResult(data.token);
		  		setShowCheckout(true);
		  	}else{
		  		setResult('Error login. Please try again.')
		  	}
		})
        .catch((error) => {
            console.error('Error:', error);

          });

    };

    const handleUserLogin = () => {
		sendLogin(user);
	};

    const handleLogout = () => {
		setShowCheckout(false);
		setResult('');
	};

    return !showCheckout ? (
        <>
        {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&family=Port+Lligat+Slab"></link> */}
        <div className="login-page">
            <div className="loginForm">
                <div className="header">
                    <div className="login_title">Welcome back!</div>
                    <div className="login_subtitle">Login to your account.</div>
                </div>
                <div className="input_fields">
                    <form action="">
                        <label htmlFor="email" data-testid="email">Email: <br/></label> 
                        <input 
                            type="text" 
                            id="email" 
                            name="email" 
                            onChange={onChange}
                            data-testid="email-input"/>
                        <label htmlFor="password" data-testid="password">Password:</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            onChange={onChange}
                            data-testid="password-input"
                        />
                    </form>
                </div>
                <div>
                    <h2 data-testid="result" className="result">Server Reply: {result}</h2>
                    <button className="loginBtn" onClick={handleUserLogin} data-testid="login-btn">LOGIN</button>
                </div>
            </div>
        </div>
        </>
    ) : (
            <Checkout token={result} logout={handleLogout}/>
    )
};
export default Login;