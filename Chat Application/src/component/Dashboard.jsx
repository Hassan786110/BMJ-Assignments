import React, { useEffect, useState } from 'react';
import "./component.css";
import { db, auth } from "../config/firebase";
import { collection, getDocs, where, query, doc, onSnapshot, updateDoc, deleteDoc } from "firebase/firestore";
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Profile = () => {
    const [data, setdata] = useState(null);
    const navigate = useNavigate();
    const uid = localStorage.getItem("uid");
    useEffect(async () => {
        const dbref = collection(db, "users");
        const w = where("user_id", "==", uid);
        const q = query(dbref, w);
        const snapshot = await getDocs(q);
        snapshot.forEach((doc) => {
            setdata(doc.data());
        })
    }, [])
    const logout = () => {
        signOut(auth)
            .then((user_credentials) => {
                alert("logout successful");
                localStorage.removeItem("uid");
                localStorage.removeItem("id");
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
                alert("logout failed");
            })
    }
    return (
        <div className='main-div'>
            <Navbar />
            <div className="container">
                <h1>Details</h1>
                <li>Name: {data && data.name}</li>
                <li>Phone Number: {data && data.number}</li>
                <li>Email Address: {data && data.email}</li>
                <button className='logout_btn' onClick={logout}>Log Out</button>
            </div>
        </div>
    )
}

const Home = () => {
    const [txt, setTxt] = useState("");
    const [data, setData] = useState([]);
    const [edit_index, setEdit_Index] = useState(null);
    const [edit_input, setEdit_input] = useState("");
    const id = localStorage.getItem("id");
    let data_arr = [];
    const add = async () => {
        if (txt != "") {
            data_arr = data != undefined ? data : [];
            data_arr.push(txt);
            const dbref = doc(db, "users", id);
            await updateDoc(dbref, { todos: data_arr });
            setTxt("");
        } else {
            alert("Please FullFill the Fields");
        }
    }
    useEffect(() => {
        const dbref = doc(db, "users", id);
        onSnapshot(dbref, ((doc) => {
            if (doc.data().todos != undefined) {
                setData(doc.data().todos);
            }
        }))
    }, [])
    const edit = (index) => {
        setEdit_Index(index);
    }
    const update = async () => {
        if(edit_input != ""){
            const dbref = doc(db, "users", id);
            data.splice(edit_index, 1, edit_input);
            await updateDoc(dbref, { todos: data });
            setEdit_Index(null);
            setEdit_input("")
        }
        else{
            alert("Please FullFill the Field");
        }
    }
    const del = async (index) => {
        const dbref = doc(db, "users", id);
        data.splice(index, 1);
        await updateDoc(dbref, { todos: data });
    }
    return (
        <div className="main-div">
            <Navbar />
            <div className="container">
                <h1>My Todos</h1>
                <div className="sub-container">
                    {data.map((element, index) => {
                        return (edit_index == index ? (
                            <li key={index}>
                                <input type="text"
                                placeholder='Enter Your Text'
                                autoComplete='off'
                                autoFocus
                                value={edit_input}
                                onChange={(e)=>setEdit_input(e.target.value)} /> 
                                <button onClick={update}>Update</button>   
                            </li>
                        ) : (
                            <li key={index}>{element}
                                <div>
                                    <button onClick={()=>edit(index)}>Edit</button>
                                    <button className='del_btn' onClick={()=>del(index)}>Delete</button>
                                </div>
                            </li>
                            )
                        )
                    })}
                </div>
                <input type="text"
                    placeholder='Enter Your Message'
                    autoComplete='off'
                    autoFocus
                    value={txt}
                    onChange={(e) => setTxt(e.target.value)} />
                <button className='send_btn' onClick={add}>Add</button>
            </div >
        </div >
    )
}

const Todo = () => {
    const [data, setData] = useState([]);
    useEffect(async ()=>{
        const dbref = collection(db, "users");
        const snapshot = await getDocs(dbref);
        let getdata = [];
        snapshot.forEach((doc)=>{
            if(doc.data().todos != undefined){
                let arr = JSON.stringify(doc.data().todos);
                let arr_length = arr.length;
                let result = arr.slice(1, arr_length - 1);
                let final = result.replace(/"/g,"");
                getdata.push({name: doc.data().name, todos: final});
            }
        })
        setData(getdata);
    }, [])
    return (
        <div className='main-div'>
            <Navbar />
            <div className="container">
                <h1>Todos</h1>
                <div className="sub-container2">
                    {data.map((element, index)=>{
                        return(
                            <li key={index}>
                                Name: {element.name}
                                <br />
                                Todos: {element.todos}
                            </li>
                        )
                    })}
                </div>    
            </div>
        </div>
    )
}

export { Profile, Home, Todo }
