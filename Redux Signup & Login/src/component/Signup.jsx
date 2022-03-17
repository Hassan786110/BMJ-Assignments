import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userSignup } from '../store/action/action';
import "./component.css";

const Signup = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const signup = () => {
        if(name != "" && phone != "" && email != "" && password != ""){
            dispatch(userSignup({name, phone, email, password}));
            setName("");
            setPhone("");
            setEmail("");
            setPassword("");
            alert("Signup Successfully");
            navigate("/");
        }
        else{
            setName("");
            setPhone("");
            setEmail("");
            setPassword("");
            alert("Please FullFill all the Fields");
        }
    }
    return (
        <div className="mainBox">
            <div className="container">
                <h1>Sign Up</h1>
                <input type="text"
                    placeholder='Enter Your Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
                <input type="text"
                    placeholder='Enter Your Phone Number'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)} />
                <input type="text"
                    placeholder='Enter Your Email Address'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <input type="password"
                    placeholder='Enter Your Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <button className='signupBtn' onClick={signup}>Sign Up</button>
            </div>
        </div>
    )
}

export default Signup;
