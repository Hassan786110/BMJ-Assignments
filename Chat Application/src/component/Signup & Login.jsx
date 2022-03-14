import React, { useEffect, useState } from 'react'
import { db, auth } from "../config/firebase";
import { collection, addDoc, where, query, getDocs } from "firebase/firestore";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import "./component.css";

const Signup = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const signup = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (user_credentials) => {
                const dbref = collection(db, "users");
                await addDoc(dbref, { name: name, number: phone, email: email, user_id: user_credentials.user.uid });
                alert("Sign Up Successful");
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
                alert("Sign Up Failed");
            })
        setName("");
        setPhone("");
        setEmail("");
        setPassword("");
    }
    return (
        <div className="main-box">
            <div className="container2">
                <h1>Sign Up</h1>
                <input type="text"
                    placeholder='Name'
                    autoComplete='off'
                    value={name}
                    autoFocus
                    onChange={(e) => setName(e.target.value)} />
                <input type="text"
                    placeholder='Phone Number'
                    value={phone}
                    autoComplete='off'
                    onChange={(e) => setPhone(e.target.value)} />
                <input type="email"
                    placeholder='Email Address'
                    value={email}
                    autoComplete='off'
                    onChange={(e) => setEmail(e.target.value)} />
                <input type="password"
                    placeholder='Password'
                    value={password}
                    autoComplete='off'
                    onChange={(e) => setPassword(e.target.value)} />
                <button onClick={signup}>Sign Up</button>
            </div>
        </div>
    )
}

const Login = () => {
    const [login_email, setLogin_email] = useState("");
    const [login_password, setLogin_password] = useState("");
    const navigate = useNavigate();
    const login = () => {
        signInWithEmailAndPassword(auth, login_email, login_password)
            .then(async (user_credentials)=>{
                alert("Login In Successful");
                const dbref = collection(db, "users");
                localStorage.setItem("uid", user_credentials.user.uid);
                const w = where("user_id", "==", user_credentials.user.uid);
                const q = query(dbref, w);
                const snapshot = await getDocs(q);
                snapshot.forEach((doc)=>{
                    localStorage.setItem("id", doc.id);
                })
                navigate("/Home");
            })
            .catch((error)=>{
                console.log(error);
                alert("Login Failed");
            })
        setLogin_email("");
        setLogin_password("");
    }
    useEffect(()=>{
        const uid = localStorage.getItem("uid");
        if(uid){
            navigate("/Home");
        }
    }, [])
    return (
        <div className="main-box">
            <div className="container2">
                <h1>Login In</h1>
                <input type="email"
                    placeholder='Email Address'
                    value={login_email}
                    autoComplete='off'
                    autoFocus
                    onChange={(e) => setLogin_email(e.target.value)} />
                <input type="password"
                    placeholder='Password'
                    value={login_password}
                    autoComplete='off'
                    onChange={(e) => setLogin_password(e.target.value)} />
                <button onClick={login}>Login</button>
                <NavLink to="/Signup" className="link">Sign Up</NavLink>
            </div>
        </div>
    )
}

export { Signup, Login }