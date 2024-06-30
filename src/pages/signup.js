import "./css/signup.css"
import axios from 'axios';


function Signup(props) {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const userEmail = form.userEmail.value;
        const userPassword = form.userPassword.value;
        const userName = form.userName.value;
        const userRole = form.userRole.value;

        try {
            const response = await axios.post('/api/v1/signup', {
                email: userEmail,
                password: userPassword,
                username: userName,
                role: userRole
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <div class="sign-wrapper">
            <h2>Signup</h2>
            <form method="post" onSubmit={handleSubmit} id="sign-form">
                <input type="text" name="userEmail" placeholder="Email"/>
                <input type="password" name="userPassword" placeholder="Password"/>
                <input type="text" name="userName" placeholder="Username"/>
                <div id="radio">
                        <input type="radio" name="userRole" value="1" checked/>Student
                        <input type="radio" name="userRole" value="2"/>Teacher
                </div>
                <input type="submit" value="Signup"/>
            </form>
            </div>
        </div>
    )
}

export default Signup;