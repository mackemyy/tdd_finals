import './Login.css';

const Login = () => {
    return (
        <>
        <div>
              <div className="loginForm">
                <div className="header">
                    <div className="login_title">Welcome back!</div>
                    <div className="login_subtitle">Login to your account.</div>
                </div>
                <div className="input_fields">
                    <form action="">
                        <label for="email">Email:</label> 
                        <input type="text" id="email" name="email" data-testid='email-input'/>
                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password" data-testid='password-input'/>
                        <i className="far fa-eye" id="togglePassword"></i>
                    </form>
                </div>
                <div>
                    <button className="loginBtn" data-testid="login-input-btn">LOGIN</button>
                </div>
            </div>
        </div>
        </>
    )
};
export default Login;