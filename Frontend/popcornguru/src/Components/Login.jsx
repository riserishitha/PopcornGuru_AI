function Login() {
    return (
        <div className="login-container">
            <h2 className="login-title">Login</h2>
            <form className="login-form">
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Enter your username" />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" />
                </div>

                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your email" />
                </div>
                <button className="login-button" type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
