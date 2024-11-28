import React from 'react'
import "./Home.css"
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
/////Swipper
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Mousewheel, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div className="container">
            <div className='home'>
                <div className="about-me home-box">
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
                <div className="about-exp">
                    <div className="exp-box">
                        <h1>Tajriba</h1>
                        <div className="swiper-slider">
                            <Swiper
                                direction={'vertical'}
                                slidesPerView={3}
                                spaceBetween={70}
                                mousewheel={true}
                                pagination={{
                                    clickable: true,
                                }}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                modules={[Mousewheel, Pagination, Autoplay]}
                                className="mySwiper"
                            >
                                <SwiperSlide style={{ margin: "10px 0 10px 0" }}>
                                    <div className="slide-compo">
                                        <h1>2023-2024</h1>
                                        <div>
                                            <span><SiFreelancermap /></span>
                                            <h2>Freelancer <br /> <span>React js developer,Startup <br />asoschisi</span></h2>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide >
                                    <div className="slide-compo">
                                        <h1>2022-2023</h1>
                                        <div>
                                            <span><SiFreelancer /></span>
                                            <h2>Amaliyotchi <br /> <span>O'rganuvchi,amaliyotchi</span></h2>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className="exp-box">
                        <h1>Tech Stack</h1>
                        <div className="tech-stack">
                            <div className="tech-boxes">
                                <span className='Html5-home'><FaHtml5 /></span>
                                <p>Html5</p>
                            </div>
                            <div className="tech-boxes">
                                <span className='Css-home'><FaCss3Alt /></span>
                                <p>Css</p>
                            </div>
                            <div className="tech-boxes">
                                <span className='Javascript-home'><IoLogoJavascript /></span>
                                <p>Javascript</p>
                            </div>
                            <div className="tech-boxes">
                                <span className='React-home'><FaReact /></span>
                                <p>React js</p>
                            </div>
                            <div className="tech-boxes">
                                <span className='Firebase-home'><IoLogoFirebase /></span>
                                <p>Firebase</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="projects home-box">
                    <div className="projects-text">
                        <h1>Loyihalar</h1>
                        <Link to={"/loyiha"}><a>Barchasi <span><FaLongArrowAltRight /></span></a></Link>
                    </div>
                    <div className="loyihalar">
                        <a href="https://ogani-sigma.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <div className="loyiha-box">
                                <img src="./imgs/ogani.png" alt="" />
                                <div className="qalquvchi-name">
                                    Ogani
                                </div>
                            </div>
                        </a>
                        <a href="https://admin-beta-liard.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <div className="loyiha-box">
                                <img src="./imgs/admin-panel.png" alt="" />
                                <div className="qalquvchi-name">
                                    Admin panel
                                </div>
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Home