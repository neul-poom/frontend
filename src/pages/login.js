import "./css/login.css";
import axios from 'axios';


function Login(props) {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const userEmail = form.userEmail.value;
        const userPassword = form.userPassword.value;

        try {
            const response = await axios.post('/api/v1/login', {
                email: userEmail,
                password: userPassword
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <div className="login-wrapper">
            <h2>Login</h2>
            <form method="post" onSubmit={handleSubmit} id="login-form">
                <input type="text" name="userEmail" placeholder="Email"/>
                <input type="password" name="userPassword" placeholder="Password"/>
                <input type="submit" value="Login"/>
            </form>
            </div>
        </div>
    )
}


export default Login;