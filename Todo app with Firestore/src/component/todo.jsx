import React, { useEffect, useState } from 'react'
import "./todo.css";
import { db } from "../config/firebase"
import { addDoc, collection, deleteDoc, getDocs, doc, updateDoc, setDoc } from 'firebase/firestore';

const Todo = () => {
    const [todo, settodo] = useState([]);
    const [inputadd, setinput] = useState("");
    const [indexValue, setIndex] = useState(null);
    const [editinput, seteditinput] = useState("");
    const [refresh, setrefresh] = useState(false);
    const addtodo = async _ => {
        if (inputadd != "") {
            const dbref = collection(db, "todos");
            try {
                await addDoc(dbref, { text: inputadd });
            }
            catch (error) {
                console.log("Failed");
            }
            setrefresh(!refresh);
            setinput("");
        }
        else {
            alert("First Enter the Text");
        }
    }
    useEffect(async () => {
        const dbref = collection(db, "todos");
        try {
            const getData = await getDocs(dbref);
            let Data = [];
            getData.forEach((doc) => {
                Data.push({ key: doc.id, data: doc.data().text });
            })
            settodo(Data);
        }
        catch (error) {
            console.log("Failed");
        }
    }, [refresh])
    const delall = _ => {
        let dbref;
        todo.map(async (ele) => {
            dbref = doc(db, "todos", ele.key);
            try {
                await deleteDoc(dbref);
            }
            catch (error) {
                console.log("failed");
            }
        })
        setrefresh(!refresh);
    }
    const edittxt = (index) => {
        setIndex(index)
    }
    const deltxt = (index) => {
        todo.map(async (ele, ind) => {
            if (ind === index) {
                const dbref = doc(db, "todos", ele.key);
                try {
                    await deleteDoc(dbref);
                    setrefresh(!refresh);
                }
                catch (error) {
                    console.log("Failed");
                }
            }
        })
    }
    const updatetxt = (index) => {
        if (editinput !== "") {
            todo.map(async (ele, ind) => {
                if (ind === index) {
                    const dbref = doc(db, "todos", ele.key);
                    try {
                        await updateDoc(dbref, { text: editinput });
                        seteditinput("");
                        setIndex(null);
                        setrefresh(!refresh);
                    }
                    catch (error) {
                        console.log("failed");
                    }
                }
            })
        }
        else {
            alert("First Enter the Text");
        }
    }
    return (
        <div className="main-div">
            <div className='container'>
                <h1>TODO APP</h1>
                <input
                    type="text"
                    autoComplete='off'
                    placeholder='Enter Your Text'
                    onChange={(e) => { setinput(e.target.value) }}
                    autoFocus
                    value={inputadd}
                />
                <div className='btndiv'>
                    <button onClick={addtodo}>Add</button>
                    <button onClick={delall}>Delete all</button>
                </div>
                <div className="container2">
                    {todo.map((element, index) => {
                        return (
                            index === indexValue ? (
                                <li key={index}>
                                    <input type="text"
                                        placeholder='Enter Your Text'
                                        value={editinput}
                                        onChange={(e) => seteditinput(e.target.value)}
                                        autoFocus />
                                    <button className='update' onClick={() => updatetxt(index)}>Update</button>
                                </li>
                            ) : (
                                <li key={index}>{element.data}
                                    <div>
                                        <button onClick={() => edittxt(index)} >Edit</button>
                                        <button onClick={() => deltxt(index)} className="delbtn" >Delete</button>
                                    </div>
                                </li>
                            )
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Todo
