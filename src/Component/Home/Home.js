import React from 'react'
import homeStyle from './Home.module.css'
import {FaTwitter, FaFacebook, FaInstagram, FaLinkedinIn} from 'react-icons/fa'

const Home = () => {
    return (
        <>
            <div className={homeStyle.container}>
                <div className={homeStyle.content}>
                    <h1 className={homeStyle.heading}>Home of <span className={homeStyle.spn}>100,000+</span> books and podcasts</h1>
                    <p className={homeStyle.para}>Get the latest book and listen to the latest podcasts all in on place</p>
                    <button className={homeStyle.btn}>Get Started</button>
                </div>
                <div className={homeStyle.card_section}>
                    <div className={homeStyle.left}>
                        <img src="https://images.unsplash.com/photo-1532073145718-62df48eaa35e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=868&q=80" alt="Card_Image" className={homeStyle.img}/>
                    </div>
                    <div className={homeStyle.right}>
                        <div className={homeStyle.card}>
                            <h3 className={homeStyle.card_heading}>Lorem ipsum.</h3>
                            <h1 className={homeStyle.card_heading_secondary}>Lorem ipsum dolor sit amet</h1>
                            <p className={homeStyle.card_para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam repellendus adipisci omnis voluptatibus doloribus enim dolorem consectetur perspiciatis sapiente sequi?</p>
                        </div>
                        <ul className={homeStyle.icons}>
                            <li>
                                <FaTwitter />
                            </li>
                            <li>
                                <FaFacebook />
                            </li>
                            <li>
                                <FaInstagram />
                            </li>
                            <li>
                                <FaLinkedinIn />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
