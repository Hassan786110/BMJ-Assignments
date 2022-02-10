import React, { useState } from 'react'
import "./todo.css";

const Todo = () => {
    const [todo , settodo] = useState([]);
    const [inputadd , setinput] = useState("");
    const addtodo = _ => {
        todo.push(inputadd);
        settodo([...todo]);
        document.getElementById("field").value = "";
    }        
    const delall = _ => {
        settodo([]);
    }
    const editadd = _ => {
        document.getElementById("btn1").className = "";
        document.getElementById("btn2").className = "disable";
        todo.map((element , index) => {
            if(element == "Editing"){
                todo.splice(index , 1);
                settodo([...todo]);
                todo.push(inputadd);
                settodo([...todo]);
                document.getElementById("field").value = "";
            }
        })
    }
    const edit = (e) => {
        todo.filter((element , index) => {
            if(e.target.id == index && element == document.getElementById("contain").childNodes[index].childNodes[0].nodeValue){
                document.getElementById("field").focus();
                document.getElementById("btn1").className = "disable";
                document.getElementById("btn2").className = "";
                todo.splice(index , 1);
                settodo([...todo]);
                todo.splice(index , 0 , "Editing");
                settodo([...todo]);
            }
        })
    }
    const deltxt = (e) => {
        todo.filter((element , index) => {
            if(e.target.id == index){
                todo.splice(index , 1);
                settodo([...todo]);
            }
        })
    }
    return (
        <div className='Mainbox'>
            <h1>TODO APP</h1>
            <input type="text" id='field' autoComplete='off' placeholder='Enter Your Text' onChange={(e) => {setinput(e.target.value)}} autoFocus />
            <div className='btndiv'>
                <button id='btn1' className='' onClick={addtodo}>Add</button>
                <button className='disable' id='btn2' onClick={editadd}>Add</button>
                <button onClick={delall}>Delete all</button>
            </div>
            <div id="contain">
                {todo.map((element , index) => {
                    return ( 
                        <li key={index}>{element}
                            <div>
                                <button id={index} onClick={edit}>Edit</button>
                                <button id={index} onClick={deltxt} className="delbtn" >Delete</button>
                            </div>
                        </li>
                    )
                })}
            </div>
        </div>
    )
}

export default Todo
