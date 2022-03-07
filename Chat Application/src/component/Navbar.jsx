import React from 'react'
import "./component.css";
import { BsPersonCircle } from "react-icons/bs";
import { IoHome } from "react-icons/io5";
import { RiTodoFill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <NavLink to="/Profile" className="user-icon">
                <BsPersonCircle className='icons' />
                <span>Profile</span>
            </NavLink>
            <NavLink to="/Home" className="home-icon">
                <IoHome className='icons' />
                <span>Home</span>
            </NavLink>
            <NavLink to="/Todo" className="todo-icon">
                <RiTodoFill className='icons' />
                <span>Todos</span>
            </NavLink>
        </div>
    )
}

export default Navbar
