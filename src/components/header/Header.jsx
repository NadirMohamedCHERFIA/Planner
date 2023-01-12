import './header.css'
import Logo from'./../../assets/images/f.png'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import { useEffect,useRef } from 'react'
import {CiLight} from 'react-icons/ci'
import { useState } from 'react'
import {CiDark} from 'react-icons/ci'
const root = document.querySelector("body");
console.log(root)
const Header=()=>{
    const logoRef = useRef(null);
    useEffect(()=>{
        if(logoRef){
            
        }
    })
    const [mode,setMode] = useState(localStorage.getItem('mode') ? localStorage.getItem('mode') : false);
    const handleClick = ()=>{
        setMode((mode)=>{
            localStorage.setItem('mode',!mode);
            return !mode
        })
        mode ? root.classList.add("light") : root.classList.remove("light")    
        console.log(mode)
    }
    useEffect(()=>{
            mode ? root.classList.add("light") : root.classList.remove("light")
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
                        <a >{mode ? <CiLight onClick={handleClick}/> : <CiDark onClick={handleClick}/>}</a>
                    </div>
            </div>
        </div>
    </>
}
export default Header