import { useState } from "react";



const Login = () => {
	const [showDashboard, setShowDashboard] = useState(false);

	const [user, setUser] = useState({
		email: '',
		password: ''
	});

	const [result, setResult] = useState('');


	const onChange = (evt) => {
		const value = evt.target.value;
		const name = evt.target.name;
		//
		setUser({
			...user, // spread operator
			[name]: value  //object deconstructing
		});
	};

	const sendLogin = async (user) => {
		console.log(user);

		const url = 'https://reqres.in/api/login';
		const params = {
			"email": user.email,
			"password": user.password
		}

		// javascript fetch
		fetch(url, {
		  method: 'POST',
		  headers: {
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify(params), //standard
		})
		.then((response) => response.json())
		.then((data) => {
		  	if(data && data.token) {
		  		setResult(data.token);
		  		setShowDashboard(true);
		  	}else{
		  		setResult('Error login. Please verify.')
		  	}
		})
		.catch((error) => {
		  console.error('Error:', error);
		});
	};

	const handleUserLogin = () => {
		sendLogin(user);
	};

	// const handleLogout = () => {
	// 	setShowDashboard(false);
	// 	setResult('');
	// };

	

	return !showDashboard ? ( 
		<>
	
			<input 
				placeholder="Enter Email"
				type="text"
				onChange={onChange}
				data-testid="email"
				name="email"
			/><br />
			<input 
				placeholder="Enter password"
				type="password"
				onChange={onChange}
				data-testid="password"
				name="password"
			/>
			<br/>
			<button
				onClick={handleUserLogin} 
				data-testid="send-user-login"
			>
				Login
			</button>
			<br/>
			<h2 data-testid="result-gross-pay">Server Reply: {result}</h2>
			
		</>
	) : (

		//  passing of data props
		//	component: Dashboard
		//	properties: 
		//		1. result (string) - the token
		//		2. handleLogout (function/method) - This will allow Dashboard component 
		//			to trigger handleLogout in onLogout method.
		//

	// 	<Dashboard token={result} logout={handleLogout} /> 
	// )
    <>
    <div>I am a userkjjj</div>
	
	
	
    </>
    );
};

export default Login;