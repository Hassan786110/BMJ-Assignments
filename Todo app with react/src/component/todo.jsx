import React, { useState } from 'react'
import "./todo.css";

const Todo = () => {
    const [todo , settodo] = useState([]);
    const [inputadd , setinput] = useState("");
    const [indexValue , setIndex] = useState(null);
    const [editinput , seteditinput] = useState("");
    const addtodo = _ => {
        if(inputadd != ""){
            todo.push(inputadd);
            settodo([...todo]);
            setinput("");
        }
        else{
            alert("First Enter the Text");
        }
    }        
    const delall = _ => {
        settodo([]);
    }
    const edittxt = (index) => {
        setIndex(index)
    }
    const deltxt = (index) => {
        todo.splice(index , 1);
        settodo([...todo]);
    }
    const updatetxt = (index) => {
        if(editinput != ""){
            todo.splice(index , 1 , editinput);
            settodo([...todo]);
            seteditinput("");
            setIndex(null);
        }
        else{
            alert("First Enter the Text");
        }
    }
    return (
        <div className='Mainbox'>
            <h1>TODO APP</h1>
            <input 
            type="text" 
            autoComplete='off' 
            placeholder='Enter Your Text'
            onChange={(e) => {setinput(e.target.value)}} 
            autoFocus 
            value={inputadd}
            />
            <div className='btndiv'>
                <button onClick={addtodo}>Add</button>
                <button onClick={delall}>Delete all</button>
            </div>
            <div id="contain">
                {todo.map((element , index) => {
                    return (
                        index == indexValue ? (
                            <li key={index}>
                                <input type="text" 
                                placeholder='Enter Your Text'
                                value={editinput}
                                onChange={(e) => seteditinput(e.target.value)}
                                autoFocus />
                                <button onClick={() => updatetxt(index)}>Update</button>
                            </li>
                        ) : (
                        <li key={index}>{element}
                            <div>
                                <button onClick={() => edittxt(index)}>Edit</button>
                                <button onClick={() => deltxt(index)} className="delbtn" >Delete</button>
                            </div>
                        </li>
                        )
                    )
                })}
            </div>
        </div>
    )
}

export default Todo
