import React from 'react'
import "./Contact.css"
import { MdOutlineWavingHand } from "react-icons/md";
import { PiMonitorFill } from "react-icons/pi";
import { IoCallOutline } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { SiFreelancer } from "react-icons/si";
import { SiFreelancermap } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Contact() {
    return (
        <div className='container'>
            <div className="contact project">
                <div className="about-me home-box project-me">
                    <img src="./imgs/bg.avif" alt="" />
                    <h2>Ravshanbek Nabijonov <span><MdOutlineWavingHand /></span></h2>
                    <h4><span>Talaba,  </span> Web dasturchi <PiMonitorFill /><span> Startup asoschisi, </span>React js <span> Developer</span></h4>
                    <div className="home-btns">
                    <Link to={'/contact'}><button className="aloqa"><span><IoCallOutline /></span>Bog'lanish</button></Link>
                        <a href="https://t.me/sShblnAdmin" target='_blank'><button className="home-tg"><span><FaTelegram /></span>Telegram</button></a>
                    </div>
                    <div className="social-medias">
                        <a href="https://t.me/sShblnAdmin" target="_blank" rel="noopener noreferrer"><span><FaTelegram /></span></a>
                        <a href="https://github.com/Ravshanbek0" target='_blank'><span><FaGithub /></span></a>
                    </div>
                </div>
                <div className="contact-right">
                    <div className="project-right-box conatxt">
                        <h1>Men bilan Ishlang 👋</h1>
                        <p>Hamkorlik, taklif, maslahat va har qanday savol va mavzu bo'yicha <span>Men bilan bog'laning!</span></p>
                        <div className="contacts-boxes">
                            <div className="contacts-box">
                                <a href="https://t.me/sShblnAdmin"><FaTelegram /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact