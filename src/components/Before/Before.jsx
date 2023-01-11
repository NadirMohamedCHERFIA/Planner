import './before.css'
import { React,useEffect,useRef } from 'react';
import Logo from './../../assets/images/f.png'

const Before =()=>{
    const main = useRef(null);
        useEffect(()=>{
        window.setTimeout(()=>{
        main.current.classList.add('disable');
    },2000);
        window.setTimeout(()=>{
            main.current.classList.add('displayNone');
        },500);
})
    return <>
        <div className="main" ref={main}>
            <div className="main-logo">
                <img src={Logo} alt="" />
            </div>
        </div>
    </>
}
export default Before