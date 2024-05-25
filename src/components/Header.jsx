import { useContext, useState } from "react";
import Moon from "../assets/icons/moon.svg";
import Sun from "../assets/icons/sun.svg";
import Logo from "../assets/logo.svg";
import Ring from "../assets/ring.svg";
import Shopping from "../assets/shopping-cart.svg";
import { MovieContext, ThemeContext } from "../context";
import Cart from "./Cart";

export default function Header(){
    const [showCart, setshowCart] = useState(false);
    const {cartValue} = useContext(MovieContext);
    const handleClick = ()=>{
        setshowCart(!showCart);
    }
    const {darkMode, setDarkMode} = useContext(ThemeContext);
   return (
    <>
    {showCart?<Cart handleClick={()=>setshowCart(!showCart)}/>:<nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
            <img src={Logo} width="139" height="26" alt="" />
        </a>

        <ul className="flex items-center space-x-5">
            <li>
                <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                    <img src={Ring} width="24" height="24" alt="" />
                </a>
            </li>
            <li>
                <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#" onClick={()=>setDarkMode(!darkMode)}>
                    <img src={darkMode?Sun:Moon} width="24" height="24" alt="" />
                </a>
            </li>
            <li>
                <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                    <img onClick={handleClick} src={Shopping} width="24" height="24" alt="" />
                    {cartValue.length >0 && (<span className="rounded-full absolute top-[-12px] bg-[#12cf6f] text-white text-center left-[20px] p-[2px] h-[30px] w-[30px]">
                    {cartValue.length}
                    </span>)}
                </a>
            </li>
        </ul>
    </nav>
}
</>)
}