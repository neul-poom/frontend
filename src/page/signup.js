import { useEffect, useState } from "react";
import { Row, Button, InputGroup, Form } from "react-bootstrap";
import axios from 'axios';
import Main from "./main";
import "./css/signup.css"


function Signup(props) {
    return (
        <>
            <div class="sign-wrapper">
            <h2>Signup</h2>
            <form method="post" action="서버의url" id="sign-form">
                <input type="text" name="userEmail" placeholder="Email"/>
                <input type="password" name="userPassword" placeholder="Password"/>
                <input type="text" name="userName" placeholder="Username"/>
                <input type="submit" value="Signup"/>
            </form>
            </div>
        </>
    )
}

export default Signup;