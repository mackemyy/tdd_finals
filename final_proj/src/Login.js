import { useState } from "react";
import './Login.css';
import Checkout from "./Checkout";

const Login = () => {
    const [showMenu, setShowMenu] = useState(false);
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
		  		setShowMenu(true);
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
		setShowMenu(false);
		setResult('');
	};

    return !showMenu ? (
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
                        {/* <i className="far fa-eye" id="togglePassword"></i> */}
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