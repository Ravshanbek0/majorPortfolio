import React from 'react'
import "./Loyiha.css"
import { MdOutlineWavingHand } from "react-icons/md";
import { PiMonitorFill } from "react-icons/pi";
import { IoCallOutline } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Loyiha() {
    return (
        <div className='container'>
            <div className="project">
                <div className="about-me project-me home-box">
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
                <div className="project-right-box">
                    <h1>Loyihalar</h1>
                    <p>Mustaqil ishlangan dasturiy loyihalarim.</p>
                    <div className="projects-loyiha">
                        <a href='https://ogani-sigma.vercel.app/' target='_blank'>
                            <div className="project-box">
                                <img src="./imgs/ogani.png" alt="" />
                                <h1>Ogani</h1>
                                <p>Online do'kon</p>
                            </div>
                        </a>
                        <a href='https://admin-beta-liard.vercel.app/' target='_blank'>
                            <div className="project-box">
                                <img src="./imgs/admin-panel.png" alt="" />
                                <h1>Admin panel</h1>
                                <p>Admin panel sayt uchun</p>
                            </div>
                        </a>
                        <a href='https://blog-admin-seven.vercel.app/' target='_blank'>
                            <div className="project-box">
                                <img src="./imgs/blog.jpg" alt="" />
                                <h1>Blog</h1>
                                <p>Guruh haqida blog</p>
                            </div>
                        </a>
                        <a href='https://agency-sigma-six.vercel.app/' target='_blank'>
                            <div className="project-box">
                                <img src="./imgs/agency.jpg" alt="" />
                                <h1>Agency</h1>
                                <p>Agency kompaniya</p>
                            </div>
                        </a>
                        <a href='https://portfolio-liart-omega-35.vercel.app/' target='_blank'>
                            <div className="project-box">
                                <img src="./imgs/services.jpg" alt="" />
                                <h1>Services</h1>
                                <p>Xizmat ko'rsatish xizmati</p>
                            </div>
                        </a>
                        <a href='https://precious-fenglisu-599452.netlify.app/' target='_blank'>
                            <div className="project-box">
                                <img src="./imgs/flags.jpg" alt="" />
                                <h1>Countries</h1>
                                <p>250+ davlatlar haqida</p>
                            </div>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loyiha