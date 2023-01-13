import './header.css'
import Logo from'./../../assets/images/f.png'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import { useEffect,useRef } from 'react'
import {CiLight} from 'react-icons/ci'
import { useState } from 'react'
import {CiDark} from 'react-icons/ci'
const root = document.querySelector("body");
const Header=()=>{
    const logoRef = useRef(null);
    const [mode,setMode]= useState(false);
    const handleClick = ()=>{
        setMode(!mode)
    }
    useEffect(()=>{
        mode ? root.classList.add('light') : root.classList.remove('light')
    })
    return <>
        <div className="container" >
            <div className='header'>
                <div className="logo" ref={logoRef}>
                    Forget <span>
                        <img src={Logo} alt="" />
                    </span>
                </div>
                    <div className="social">
                        <a href="https://github.com/NadirMohamedCHERFIA" target='_blank' rel='noreferrer'><AiFillGithub/></a>
                        <a href="https://www.linkedin.com/feed/" target='_blank' rel='noreferrer'><AiOutlineLinkedin/></a>
                        <a onClick={handleClick}>{mode ? <CiLight/> : <CiDark />}</a>
                    </div>
            </div>
        </div>
    </>
}
export default Header