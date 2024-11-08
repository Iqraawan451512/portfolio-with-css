import "./about.css"
import Link from "next/link"
import Header from "@/component/header/header"
function Home(){ 
  return( 
    <main className="main-one">
      <Header/>
      <div className="one">
<div className="div-two">
  <img src=" https://images.pexels.com/photos/1242348/pexels-photo-1242348.jpeg?cs=srgb&dl=pexels-juanpphotoandvideo-1242348.jpg&fm=jpg" alt="" className="picture" />
 <h1 className="intro-abo">  About   </h1>
  <p className="para">

  "         As a multifaceted web developer, I seamlessly merge commerce
            expertise with technical prowess, leveraging HTML, CSS, JavaScript,
            React, and Node.js to craft intuitive, data-driven web applications.
            With a Master's in Commerce, I bring a unique understanding of
            business needs, driving solutions that optimize user experience and
            fuel growth. Proficient in front-end development, back-end
            architecture, I excel at building scalable, responsive interfaces.
            My expertise in React enables me to harness state management, hooks,
            and component-driven design, while Node.js allows me to orchestrate
            efficient server-side logic. I'm poised to deliver impactful web
            solutions that harmonize commerce and technology."
</p>
</div>

<div className="div-two">
  <div className="div-to" >
  <img src="https://cdn.pixabay.com/photo/2023/12/19/22/46/business-8458541_640.jpg" alt="its a picture" className="pic-two" />
<ul className="ul">
<p className="name-one">IQRA AWAN</p><br />
<p className="name-two">
Having earned a Master's degree in commerce , i am now expanding
              my skills in web development and Artifficial Intelligence

</p>

  <Link href=""> <li> <span className="info">~ Birthday : </span>24 aprail</li></Link>
  <Link href=""> <li> <span className="info">~ Degree : </span>Master in Commerce</li></Link>
  <Link href=""> <li> <span className="info">~ Phone : </span>03341314439</li></Link>
  <Link href=""> <li> <span className="info">~Email :  </span>Iqraawan451512@gmail.com</li></Link>
  <Link href=""> <li> <span className="info">~ Location : </span>Karachi ,Pakistan</li></Link>

</ul>
<p className="last-para">

As a multifaceted web developer, I seamlessly merge commerce
            expertise with technical prowess, leveraging HTML, CSS, JavaScript,
            React, and Node.js to craft intuitive, data-driven web applications.
            With a Master's in Commerce, I bring a unique understanding of
            business needs, driving solutions that optimize user experience and
            fuel growth. Proficient in front-end development, back-end
            architecture, I excel at building scalable, responsive interfaces.
            My expertise in React enables me to harness state management, hooks,
            and component-driven design, while Node.js allows me to orchestrate
            efficient server-side logic. I'm poised to deliver impactful web
            solutions that harmonize commerce and technology."
</p>



</div>
</div>
  
  
















      </div>
    </main>
  )
}
export default Home