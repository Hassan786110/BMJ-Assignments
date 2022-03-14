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
                <span className='nav_link'>Profile</span>
            </NavLink>
            <NavLink to="/Home" className="home-icon">
                <IoHome className='icons' />
                <span className='nav_link'>Home</span>
            </NavLink>
            <NavLink to="/Todo" className="todo-icon">
                <RiTodoFill className='icons' />
                <span className='nav_link'>Todos</span>
            </NavLink>
        </div>
    )
}

export default Navbar
