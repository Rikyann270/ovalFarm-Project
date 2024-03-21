import React, { useState} from 'react';
import "./styles.css"
import backgroundvid from "./images/vid1.mp4"
import oval_logo from "./images/oval logo.svg"
import profile from "./images/profile.svg"
import ask from "./images/ask.svg"
import {Menu} from "./menu"



export default 
function App() {
  const [accsec, setAccsec] = useState("login")
  

    const dtimer=()=>{
      var log_in=document.getElementById("log_in")
      var acc_btn1=document.getElementById("acc_btn1")
      var acc_btn2=document.getElementById("acc_btn2")
      var loginsignupCont=document.getElementById("loginsignupCont")
      var loginsynCon=document.getElementById("loginsynCon")

      log_in.addEventListener('mouseenter',()=>{
        loginsignupCont.style.display="flex"
        setTimeout(()=>{
          loginsignupCont.style.display="none"
        }, 5000)
      });


      acc_btn1.addEventListener("click",()=>{
        setAccsec("login")
        setTimeout(()=>{
          loginsynCon.style.display="flex"
          console.log("time")
        }, 1000)
        
      })

      acc_btn2.addEventListener("click",()=>{
        setAccsec("register")
        setTimeout(()=>{
          loginsynCon.style.display="flex"
          console.log("time")
        }, 1000)
      })

      loginsynCon.addEventListener("click",()=>{
        loginsynCon.style.display="none"
      })


    }
    setTimeout(dtimer, 1000)


  return(
  <>
    <Menu/>
    <section id="sec">
        <div id="nav_container">
        <div className='loginsynCon' id='loginsynCon' >
      <iframe className='popPay' src={'/account/'+accsec}>

      </iframe>

         </div>
            <nav role="navigation"  id="nav_menu" className="nav_menu">
          <a href="/poultry" id="nav_link1" className="w_nav_link">Chicks</a>
          <a href="/poultry/Feeds" id="nav_link2" className="w_nav_link">Feeds</a>
          <a href="/poultry/equipments" id="nav_link3" className="w_nav_link">Equipments</a>
          <a href="#" id="nav_link4" className="w_nav_link">About</a>
          <a href="#" id="nav_link5" className="w_nav_link">Support</a>
            </nav>
      </div>
      {/*<a href="#" className="contact">Contact</a>*/}
      <a href="#" className="ask"><img src={ask}/></a>
      <a href="#" className="log_in" id="log_in"><img src={profile}/></a>
      <img className="oval_logo" src={oval_logo}/>
      <div className='loginsignupCont' id='loginsignupCont'>
        <button className='acc_btn' id='acc_btn1' >login</button>
        <button className='acc_btn' id='acc_btn2' >signup</button>

      </div>
    </section>
    <div className="oval_area">
      <p className="oval_text">OVAL</p>
      <p className="farm_for">Farm for the Best With us</p>
    </div>
    <div className="down_section" >
      <p className="farm_all">For all types of Day-old chicks, farm equipments, feed additives, concetrates, 
       poultry feeds & incubators</p>
      <a href="/poultry" className="order_now">Order Chicks</a>
      <a href="/poultry" className="book_now">Book Now</a>
    </div>
    <div id="vid_block"></div>

   <video className="vid_background" autoPlay muted loop src={backgroundvid}/>
   



  </>
 


    )

}