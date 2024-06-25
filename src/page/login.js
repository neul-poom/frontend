import "./css/login.css"

function Login(props) {
    return (
        <>
            <div class="login-wrapper">
            <h2>Login</h2>
            <form method="post" action="서버의url" id="login-form">
                <input type="text" name="userEmail" placeholder="Email"/>
                <input type="password" name="userPassword" placeholder="Password"/>
                <input type="submit" value="Login"/>
            </form>
            </div>
        </>

    )
}

export default Login;