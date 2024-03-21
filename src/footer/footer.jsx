import React from "react"
import eqstyle from"./footer.module.css";  
import oval_logo from "./footer icons/oval logo.svg"
import call_logo from "./footer icons/call.svg"
import location_logo from "./footer icons/location.svg"
import whatsapp_logo from "./footer icons/whatsapp.svg"
import gamil_logo from "./footer icons/gmail.svg"



export function Footer() {
    return(
    <div className={eqstyle.FooterCont}>
    <div className={eqstyle.footercontentCont}>

    <div className={eqstyle.abtusCont1}>
        <p className={eqstyle.fthead} >About us</p>
        <img src={oval_logo} className={eqstyle.ovlogo}/>
        <p className={eqstyle.ftAvtinfo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Accusantium fugit fugiat consequatur ab quam ipsum doloremque 
        veritatis quas nam enim!</p>
        
    </div>


    <div className={eqstyle.abtusCont2}>
        <p className={eqstyle.fthead} >Contact</p>
        <div className={eqstyle.contactConAi}>
        <div className={eqstyle.contactCon} >
        <img src={call_logo}className={eqstyle.call_logo}/><p className={eqstyle.contact_txt} >+256539802 | 256530002</p>
        </div>
        <div className={eqstyle.contactCon} >
        <img src={whatsapp_logo}className={eqstyle.call_logo}/><p className={eqstyle.contact_txt} >+256539802 | 256530002</p>
        </div>
        <div className={eqstyle.contactCon} >
        <img src={gamil_logo}className={eqstyle.call_logo}/><p className={eqstyle.contact_txt} >+256539802 | 256530002</p>
        </div>
        <div className={eqstyle.contactCon} >
        <img src={location_logo}className={eqstyle.call_logo}/><p className={eqstyle.contact_txt} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, odio?</p>
        </div>
        </div>

    </div>
    <div className={eqstyle.abtusCont3}>
        <p className={eqstyle.fthead} >Partner</p>
        <div className={eqstyle.partner_txt_Cont} >
        <a href='#' className={eqstyle.partner_txt_Cont}>Inquire</a>
        <a href='#' className={eqstyle.partner_txt_Cont}>Sell with us</a>
        <a href='#' className={eqstyle.partner_txt_Cont}>Retail</a>
        <a href='#' className={eqstyle.partner_txt_Cont}>Other</a>
        </div>
        

    </div>


    </div>

    </div>
    
)}