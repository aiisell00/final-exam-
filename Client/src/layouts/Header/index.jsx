import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { MdArrowDropDown } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { IoMdAddCircle } from "react-icons/io";
import "./index.scss"

 
const Header = () => {
  return (
    <>
    <div id="header">
        <div className="container">
            <div className="header">
                <img src="https://preview.colorlib.com/theme/shop/img/logo.png" alt="logo" />
                <nav>
                    <ul> 
                        <li>
                            <NavLink to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink>Category</NavLink>
                        </li>
                        <li>
                            <NavLink>Men</NavLink>
                        </li>
                        <li>
                            <NavLink>Women</NavLink>
                        </li>
                        <li>
                            <NavLink>latest</NavLink>
                        </li>
                        <li>
                            <NavLink>Pages<MdArrowDropDown /></NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="icons">
                <Link to={"/add-products"}><IoMdAddCircle/></Link>
                <Link to={"/favorites"}><FaHeart /></Link>
                <Link to={"/basket"}><FaBasketShopping /></Link>
                
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header