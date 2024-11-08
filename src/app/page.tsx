import "./style.css"
import Header from "@/component/header/header"
import TypingEffect from "@/component/header/typing"
function Home(){ 
  return( 
    <main className="main-one">
      <Header/>
      <div className="one">
      
<div className="div-two">
  
  <img src=" https://img.freepik.com/premium-photo/beautiful-asian-businesswoman-financial-manager-working-modern-office-laptop_37714-765.jpg?w=826" alt="" className="picture" />
 <h1 className="intro">     
  </h1>
  {/*
    <h2 className="intro-2"> I Am Business Student and
      Programmer</h2>*/}
       <span className="type"><TypingEffect text= " IQRA AWAN !A  Business Student and A Programmer" speed={400}/></span>

</div>



      </div>
    </main>
  )
}
export default Home