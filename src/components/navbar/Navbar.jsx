import React, { useState } from 'react'
import "./Navbar.css"
import { GiCrumblingBall } from "react-icons/gi";
import { GrHomeRounded } from "react-icons/gr";
import { GrProjects } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";
import { IoMdTrendingUp } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";

function Navbar() {
    const [menuBtn, setMenuBtn] = useState(false)
    return (
        <div className="nav-bar">
            <div onClick={(() => { setMenuBtn(false) })} className={menuBtn ? "menu-none-box active" : "menu-none-box"}>
                <div className="menuNB-box">
                    <h1><div><GiCrumblingBall /></div>Ravshan</h1>
                    <ul>
                        <NavLink to={'/'}><li className=''><span><GrHomeRounded /></span>Asosiy</li></NavLink>
                        <NavLink to={'/loyiha'}><li><span><GrProjects /></span>Loyihalar</li></NavLink>
                        <NavLink to={'/contact'}><li><span><IoCallOutline /></span>A'loqa</li></NavLink>
                    </ul>
                </div>
            </div>
            <div className='container'>
                <div className="nav">
                    <Link to={'/'}><h1><div><GiCrumblingBall /></div>Nabijonov <span>Ravshanbek</span></h1></Link>
                    <ul>
                        <NavLink to={'/'}><li className=''><span><GrHomeRounded /></span>Asosiy</li></NavLink>
                        <NavLink to={'/loyiha'}><li><span><GrProjects /></span>Loyihalar</li></NavLink>
                        <NavLink to={'/contact'}><li><span><IoCallOutline /></span>A'loqa</li></NavLink>
                    </ul>
                    <span onClick={(() => { setMenuBtn(!menuBtn) })} className="menu-none">
                        <IoIosMenu />
                    </span>
                    <Link to={'/contact'}><button>Birga ishlang<span><IoMdTrendingUp /></span></button></Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar