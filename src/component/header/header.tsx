import "./header.css"
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";
import { RiProfileFill } from "react-icons/ri";
import Link from "next/link";





function Header(){
    return(
<main className="main">
<div className="main-1">
    <div className="div-1">
        <img src="https://img.freepik.com/premium-photo/woman-wearing-glasses-black-jacket-with-her-arms-crossed_1081342-44597.jpg?w=740" alt="its a picture" className="pic" />
        <p className="name"> Iqra awan </p>
      
        
       <ul className="icone">
       <li> <a href="/" target="_blank"><FaFacebook className="face"/></a></li>
      <a href="" target="_blank"> <li><FaLinkedinIn className="face"/></li></a>
      <a href="" target="_blank"> <li> <FaInstagramSquare className="face"/></li></a>
       <a href="" target="_blank"> <li><FaGithub className="face"/></li></a>
</ul>


        
    </div>
    <div className="div-2">
        
        <ul className="class">

         <a href="/" >   <li><FaHome /> Home</li></a>
         <a href="./about" >  <li><MdAccountCircle /> About</li></a>
          <a href="./project"  > <li> <RiProfileFill /> Portfolio</li></a>
           <a href="./contact" > <li><IoMdContacts /> contact</li></a>

        </ul>
    </div>
</div>
</main>
    )
}
export default Header