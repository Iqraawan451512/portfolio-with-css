import Link from "next/link"
import "./header-1.css"
function Header_two(){
return(
    <main>
<div className="main-div">
<header>
<div className="header-div">
    <h1 className="logo"><a href="/" target="_blank">
    <img src="https://vendotic.com/public/uploads/large/1321708542202vixmbavr0ganouvz7u9mamt8j0m9sy29muez6fx1cngfngekcyxf5ydaytm9a0pmwvqowptseqcblxezjd58ufcvzahtck4fybri.jpg" alt="its a logo named pictured" />

   </a> </h1>
  <ul className=".ul">
<Link href="/"><li>Home</li></Link>
<Link href="./about"><li>About</li></Link>
<Link href="./project"><li>Portfolio</li></Link>
<Link href="./contact"><li>Contact</li></Link>

  </ul>
</div>
        </header>






</div>
</main>
)
}
export default Header_two