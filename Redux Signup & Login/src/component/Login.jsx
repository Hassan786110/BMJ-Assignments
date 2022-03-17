import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { userLogin } from '../store/action/action';
import "./component.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const signupState = useSelector((store) => store.signupReducer);
    const loginState = useSelector((store) => store.loginReducer);
    let flag = true;
    const login = () => {
        if (email !== "" && password !== "") {
            signupState.map((ele) => {
                if (ele.userEmail === email && ele.userPassword === password) {
                    dispatch(userLogin({ email, password }));
                    setEmail("");
                    setPassword("");
                    alert("Login Successfully");
                    flag = false;
                    navigate("/Dashboard");
                }
            });
        }
        else {
            setEmail("");
            setPassword("");
            alert("Please FillFull all the Fields");
        }
        if (flag) {
            setEmail("");
            setPassword("");
            alert("Invalid Credentials");
        }
    }
    return (
        <div className="mainBox">
            <div className="container">
                <h1>Log In</h1>
                <input type="text"
                    placeholder='Enter Your Email Address'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <input type="password"
                    placeholder='Enter Your Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <button onClick={login}>Log In</button>
                <NavLink to="/Signup" className="link">Sign Up</NavLink>
            </div>
        </div>
    )
}

export default Login;
