import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../store/action/action';
import "./component.css";

const Dashboard = () => {
    const dispatch = useDispatch();
    const signupState = useSelector((store) => store.signupReducer);
    const loginState = useSelector((store) => store.loginReducer);
    const navigate = useNavigate();
    useEffect(()=>{
        if (!loginState.userEmail) {
            navigate("/");
        }
    }, [])
    let name;
    let phone;
    let email;
    signupState.map((ele) => {
        if (ele.userEmail === loginState.userEmail && ele.userPassword === loginState.userPassword) {
            name = ele.userName;
            phone = ele.userPhone;
            email = ele.userEmail;
        }
    })
    const logout = () => {
        const email = "";
        const password = "";
        dispatch(userLogin({ email, password }));
        alert("Logout Successfully");
        navigate("/");
    }
    return (
        <div className="mainBox">
            <div className="container">
                <h1>Dashboard</h1>
                <p>
                    Name: {name}
                    <br />
                    Phone Number: {phone}
                    <br />
                    Email Address: {email}
                </p>
                <button onClick={logout}>Log Out</button>
            </div>
        </div>
    )
}

export default Dashboard
