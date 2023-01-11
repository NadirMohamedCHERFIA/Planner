import './header.css'
import Logo from'./../../assets/images/f.png'
import { useEffect,useRef } from 'react'

const Header=()=>{
    const logoRef = useRef(null);
    useEffect(()=>{
        if(logoRef){
            
        }
    })
    return <>
        <div className="container" >
            <div className="logo" ref={logoRef}>
                Forget <span>
                    <img src={Logo} alt="" />
                </span>
            </div>
        </div>
    </>
}
export default Header