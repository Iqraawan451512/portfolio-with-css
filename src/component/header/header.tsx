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
        <Link href="https://web.facebook.com" target="_blank"> <li><FaFacebook className="face"/></li></Link>
      <Link href="https://www.linkedin.com" target="_blank"> <li><FaLinkedinIn className="face"/></li></Link>
      <Link href="https://www.linkedin.com" target="_blank"> <li> <FaInstagramSquare className="face"/></li></Link>
       <Link href="https://github.com" target="_blank"> <li><FaGithub className="face"/></li></Link>
</ul>


        
    </div>
    <div className="div-2">
        
        <ul className="class">

         <Link href="/"className="nav-icone" >   <li><FaHome /> Home</li></Link>
         <Link href="./about" className="nav-icone" >  <li><MdAccountCircle /> About</li></Link>
          <Link href="./project" className="nav-icone" > <li> <RiProfileFill /> Portfolio</li></Link>
           <Link href="./contact" className="nav-icone"> <li><IoMdContacts /> contact</li></Link>

        </ul>
    </div>
</div>
</main>
    )
}
export default Header