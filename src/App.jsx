import React, { useState} from 'react';
import "./styles.css"
import backgroundvid from "./images/vid1.mp4"
import oval_logo from "./images/oval logo.svg"
import profile from "./images/profile.svg"
import ask from "./images/ask.svg"
import oval_txt from "./images/oval-ward-logo.svg"
import close_mob_icon1 from "./products/icons/closeTop.svg"
import close_mob_icon2 from "./products/icons/closeSide.svg"
import support_mob_icon from "./products/icons/support.svg"
import account_mob_icon from "./products/icons/account.svg"
import about_mob_icon from "./products/icons/about.svg"


import {Menu} from "./menu"

import {About_mob} from "./about_mob"
import {Support_mob} from "./support_mob"



export default 
function App() {
  const [accsec, setAccsec] = useState("login")
  const [abt_spt , setAbt_spt] = useState("unset")
  const [acc_status , setAcc_status] = useState("register")
  const [acc_show , setAcc_show] = useState("off")
  

    const dtimer=()=>{
      var log_in=document.getElementById("log_in")
      var acc_btn1=document.getElementById("acc_btn1")
      var acc_btn2=document.getElementById("acc_btn2")
      var loginsignupCont=document.getElementById("loginsignupCont")
      var loginsynCon=document.getElementById("loginsynCon")
      var support_sec_up=document.getElementById("support_sec_up")
      var about_sec_up=document.getElementById("about_sec_up")
      var close_side_infor= document.getElementById("close_side_infor")
      var acc_logCont= document.querySelector(".acc_logCont")
      var mob_menu_on_Cont= document.querySelector(".mob_menu_on_Cont")
      var close_mob_Cont= document.querySelector(".close_mob_Cont")
      var mob_menu= document.querySelector(".mob_menu")


      close_mob_Cont.addEventListener("click",()=>{
        mob_menu_on_Cont.style.display="none"
      })
      mob_menu.addEventListener("click",()=>{
        mob_menu_on_Cont.style.display="unset"
      })
      if(acc_show=="on"){
        acc_logCont.style.display="flex"

      }else(
        acc_logCont.style.display="none"
      )

      about_sec_up.addEventListener('click',()=>{
        var mob_about_Cont = document.getElementById("mob_about_Cont")
        mob_about_Cont.style.display="unset"
        setAbt_spt("unset")

      })
      support_sec_up.addEventListener('click',()=>{
        var mob_support_Cont = document.getElementById("mob_support_Cont")
        mob_support_Cont.style.display="unset"
        setAbt_spt("unset")

      })
      close_side_infor.addEventListener('click',()=>{
        setTimeout(()=>{
            mob_about_Cont.style.display="none";
            mob_support_Cont.style.display="none";
            document.querySelector(".acc_Inter_Cont").style.display="none"

          },500)
        setAbt_spt("none")



      })
      if(abt_spt=="unset"){
        close_side_infor.style.display="flex"

      }else{
        close_side_infor.style.display="none"
      }

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
    <div className='mothaCont'>
    <div className='mob_menu_on_Cont'>


      <div className='top_on_Cont'>
        <button className='close_mob_Cont'>
          {/* <div className='close_mob_x1'></div>
          <div className='close_mob_x2'></div> */}
          <img src={close_mob_icon1} className='close_mob_x2'/>
        </button>
        <button className='close_side_mob_Cont' id="close_side_infor">
          {/* <div className='close_mob_x1'></div>
          <div className='close_mob_x2'></div> */}
          <img src={close_mob_icon2} className='close_mob_x2'/>

        </button>
      </div>


      <div className='mob_About_Cont' id="mob_about_Cont">
        <About_mob/>
    
      </div>
      <div className='mob_Support_Cont' id="mob_support_Cont" >
        <Support_mob/>
    
      </div>
      <div className='acc_Inter_Cont' >
      <iframe className='acc_pop_state' src={'/account/'+acc_status}/>

      </div>

      <div className='contents_on_Cont'>
        <div className='contents_item1' >
          <p className='menu_items_mob'>Chicks</p>
          
        </div>
        
        <div className='contents_item1' >
          <p className='menu_items_mob'>Feeds</p>
        </div>

        <div className='contents_item1' >
          <p className='menu_items_mob'>Equipments</p>
        </div>

        <div className='contents_item1' id="about_sec_up" >
          <div className='mob_image_iconCont'>
          <img className='mob_image_icon_b' src={about_mob_icon}/>

        </div>
          <p className='menu_items_mob' >About</p>
        </div>

        <div className='contents_item1' id="support_sec_up" >
        <div className='mob_image_iconCont'>
          <img className='mob_image_icon_b' src={support_mob_icon}/>

        </div>
          <p className='menu_items_mob' >Support</p>

        </div>

        <div className='contents_item1' onClick={()=>{
          if(acc_show=="on"){
            setAcc_show("off")
          }else{
            setAcc_show("on")

          }}
        }>
                    <div className='mob_image_iconCont'>
          <img className='mob_image_icon_b' src={account_mob_icon}/>

        </div>
          <p className='menu_items_mob' >Account</p>
        <div className='acc_logCont'>
          <button className='acc_action_btn' onClick={()=>{
            document.querySelector(".acc_Inter_Cont").style.display="unset";
            setAbt_spt("unset")
            
            setAcc_status("login")
          }
          } id="login_mob" >Login</button>

          <button className='acc_action_btn'onClick={()=>{
            document.querySelector(".acc_Inter_Cont").style.display="unset"
            setAbt_spt("unset")
            
            setAcc_status("register")
          }
          } id="signup_mob" >Sign up</button>

        </div>
        
        </div>



      </div>

    </div>

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
      <div className='nav_mobileCont'>
        <button className='mob_menu'>Menu</button>

      </div>

      {/*<a href="#" className="contact">Contact</a>*/}
      {/* <a href="#" className="ask"><img src={ask}/></a> */}
      <a href="#" className="log_in" id="log_in"><img src={profile}/></a>
      <img className="oval_logo" src={oval_logo}/>
      <div className='loginsignupCont' id='loginsignupCont'>
        <button className='acc_btn' id='acc_btn1' >login</button>
        <button className='acc_btn' id='acc_btn2' >signup</button>

      </div>
    </section>
    <div className="oval_area">  
  
      <img className="oval_text" src={oval_txt}/>
      
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
   </div>
   



  </>
 


    )

}