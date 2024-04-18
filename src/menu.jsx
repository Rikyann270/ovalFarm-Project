import React, { useState} from 'react';
import oval_logo from "./images/oval logo.svg"
import aboutstyl from "./about.module.css"

import call_logo from "./footer/footer icons/call.svg"
import location_logo from "./footer/footer icons/location.svg"
import whatsapp_logo from "./footer/footer icons/whatsapp.svg"
import gamil_logo from "./footer/footer icons/gmail.svg"
import support_icon from "./products/icons/support-icon.svg"

let setterModule;
let setterModule2;
let setterModule3;
let setterModule4;
let setterModule5;



export function Menu(){
    const [linkvalue, setLinkvalue] = useState("/poultry");
    
    const loadChicksModule = async () => {
    const module = await import("./chicks");
      setterModule = module.chicks;
      setLinkvalue("/poultry")
      


  };
    const loadEquipementsModule = async () => {
    const module = await import("./equipements");
      setterModule2 = module.equipements;
      setLinkvalue("/poultry/equipments")
    

  };
    const loadFeedsModule = async () => {
    const module = await import("./feeds");
      setterModule3 = module.feeds;
      setLinkvalue("/poultry/Feeds")

    
  };
    const loadAboutModule = async () => {
    const module = await import("./about");
      setterModule4 = module.about;
      

    
  };
    const loadSupportModule = async () => {
    const module = await import("./support");
      setterModule5 = module.support;
      

    
  };



  function eventele (){
    var chicksov = document.getElementById("nav_link1");
    var feedov = document.getElementById("nav_link2");
    var equiepov = document.getElementById("nav_link3");
    var aboutov = document.getElementById("nav_link4");
    var supportov = document.getElementById("nav_link5");
    var vid_block = document.getElementById("vid_block");
    var main_menu = document.getElementById("main_menu");
    var w_nav_link = document.querySelectorAll(".w_nav_link")
    var w_nav_link = document.querySelectorAll(".w_nav_link");

    var allnavele= [chicksov, feedov, equiepov, aboutov, supportov]
    vid_block.addEventListener("mouseenter", ()=>{
      vid_block.style.display="none"
      main_menu.style.display="none"
      w_nav_link.forEach(function(link) {
        // link.style.background="rgba( 250, 250, 250, 0.35% )"
        link.style.color="rgba( 220, 220, 250, 100% )"
    });
      
    })
    allnavele.forEach(allnavele_sele=>{

    allnavele_sele.addEventListener("mouseenter", ()=>{
      vid_block.style.display="block"
      main_menu.style.display="block"
      w_nav_link.forEach(function(link) {
        // link.style.background="rgba( 50, 50, 50, 0 )"
        link.style.color="rgba( 20, 20, 20, 100% )"
        // link.addEventListener("mouseenter",()=>{
        //   link.style.background="rgba( 0, 0, 0, 50% )"
        // })
    });
    }) 

    }
    )

    let importerMenue = ()=>{
      loadChicksModule();
      loadEquipementsModule();
      loadFeedsModule();
      loadAboutModule();
      loadSupportModule();
      
    }
    setTimeout(importerMenue, 1000)




  }
  setTimeout(eventele, 1000)



  

	
	return(
			    <div id="main_menu"  className="main_menu">
  <div id="menu_item_container">

  <div id="item_grid">
    <div className="chick">
      <div className="nav_image_broiler"></div>
      <div className="align_order_learn">
        <p className="Item_name" id="Item_name1">Broiler</p>
        
        <a href="#" className="order_learn">Order</a>
      </div>
    </div>
    <div className="chick">
      <div className="nav_image"></div>
      <div className="align_order_learn">
        <p className="Item_name" id="Item_name2" >Kuroiler</p>
        
        <a href="#" className="order_learn">Order</a>
      </div>
    </div>

    <div className="chick">
      <div className="nav_image_layers"></div>
      <div className="align_order_learn">
        <p className="Item_name" id="Item_name3" >Layer</p>
        
        <a href="#" className="order_learn">Order</a>
      </div>
    </div>
  </div>
  <a id="more" href={linkvalue} >More breeds</a>



  </div>
  <div id="infodiv">

     <div className='vrmenu'></div>
    <div className='leftCredits'>
     <p id='inf1' >Chicks we provide</p>
     <p id='inf2' >1 day old</p>
     <p id='inf3' >Pre vaccinated</p>
     <p id='inf4' >Hybrid, local and exotic breeds</p>
     <a href={linkvalue}><button id='infCta'>Get now</button></a>
     </div>


     <div id="aboutCont">
     <div className={aboutstyl.footercontentCont}>

<div className={aboutstyl.abtusCont1}>
    <p className={aboutstyl.fthead} >About us</p>
    <img src={oval_logo} className={aboutstyl.ovlogo}/>
    <p className={aboutstyl.ftAvtinfo}>At Oval, we specialize in selling
     chicks, farm products, and offer convenient delivery services.
      Bookings accepted via call or our website. Quality guaranteed.</p>
    
</div>


<div className={aboutstyl.abtusCont2}>
    <p className={aboutstyl.fthead} >Contact</p>
    <div className={aboutstyl.contactConAi}>
    <div className={aboutstyl.contactCon} >
    <img src={call_logo}className={aboutstyl.call_logo}/><p className={aboutstyl.contact_txt} >+256539802 | 256530002</p>
    </div>
    <div className={aboutstyl.contactCon} >
    <img src={whatsapp_logo}className={aboutstyl.call_logo}/><p className={aboutstyl.contact_txt} >+256539802 | 256530002</p>
    </div>
    <div className={aboutstyl.contactCon} >
    <img src={gamil_logo}className={aboutstyl.call_logo}/><p className={aboutstyl.contact_txt} >+256539802 | 256530002</p>
    </div>
    <div className={aboutstyl.contactCon} >
    <img src={location_logo}className={aboutstyl.call_logo}/><p className={aboutstyl.contact_txt} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, odio?</p>
    </div>
    </div>

</div>
<div className={aboutstyl.abtusCont3}>
    <p className={aboutstyl.fthead} >Partner</p>
    <div className={aboutstyl.partner_txt_Cont} >
    <a href='#' className={aboutstyl.partner_txt_Cont}>Inquire</a>
    <a href='#' className={aboutstyl.partner_txt_Cont}>Sell with us</a>
    <a href='#' className={aboutstyl.partner_txt_Cont}>Retail</a>
    <a href='#' className={aboutstyl.partner_txt_Cont}>Other</a>
    </div>
    

</div>



</div>

    </div>



    <div id="supportCont">
     <div className={aboutstyl.footercontentCont}>

<div className={aboutstyl.abtusCont1}>
  <img className={aboutstyl.support_icon_stly} src={support_icon}/>
    <p className={aboutstyl.fthead} >Having an issue ?</p>
    <p className={aboutstyl.ftAvtinfo}>At Oval, we specialize in selling
     chicks, farm products, and offer convenient delivery services.
      Bookings accepted via call or our website. Quality guaranteed.</p>
    
</div>


<div className={aboutstyl.abtusCont2_Sopport}>
    <p className={aboutstyl.fthead} >Report to</p>
    <div className={aboutstyl.contactConAi}>
    <div className={aboutstyl.contactCon} >
    <img src={call_logo} className={aboutstyl.call_logo}/><p className={aboutstyl.contact_txt} >+256539802 | 256530002</p>
    </div>
    <div className={aboutstyl.contactCon} >
    <img src={whatsapp_logo} className={aboutstyl.call_logo}/><p className={aboutstyl.contact_txt} >+256539802 | 256530002</p>
    </div>
    <div className={aboutstyl.contactCon} >
    <img src={gamil_logo} className={aboutstyl.call_logo}/><p className={aboutstyl.contact_txt} >+256539802 | 256530002</p>
    </div>
    <div className={aboutstyl.contactCon} >
    <img src={location_logo}className={aboutstyl.call_logo}/><p className={aboutstyl.contact_txt} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, odio?</p>
    </div>
    </div>

</div>




</div>

    </div>




  </div>




 
  </div>
			)


}