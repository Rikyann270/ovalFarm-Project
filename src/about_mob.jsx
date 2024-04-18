import React from "react";

import oval_logo from "./images/oval logo.svg"
import aboutstyl_mob from "./about_mob.module.css"

import call_logo from "./footer/footer icons/call.svg"
import location_logo from "./footer/footer icons/location.svg"
import whatsapp_logo from "./footer/footer icons/whatsapp.svg"
import gamil_logo from "./footer/footer icons/gmail.svg"
import support_icon from "./products/icons/support-icon.svg"


export function About_mob(){

    return(
        <>        
            <div id="aboutCont_mobo">
        <div className={aboutstyl_mob.footercontentCont}>

        <div className={aboutstyl_mob.abtusCont1}>
        <p className={aboutstyl_mob.fthead} >About us</p>
        <img src={oval_logo} className={aboutstyl_mob.ovlogo}/>
        <p className={aboutstyl_mob.ftAvtinfo}>At Oval, we specialize in selling
        chicks, farm products, and offer convenient delivery services.
        Bookings accepted via call or our website. Quality guaranteed.</p>

        </div>


        <div className={aboutstyl_mob.abtusCont2}>
        <p className={aboutstyl_mob.fthead} >Contact</p>
        <div className={aboutstyl_mob.contactConAi}>
        <div className={aboutstyl_mob.contactCon} >
        <img src={call_logo}className={aboutstyl_mob.call_logo}/><p className={aboutstyl_mob.contact_txt} >+256539802 | 256530002</p>
        </div>
        <div className={aboutstyl_mob.contactCon} >
        <img src={whatsapp_logo}className={aboutstyl_mob.call_logo}/><p className={aboutstyl_mob.contact_txt} >+256539802 | 256530002</p>
        </div>
        <div className={aboutstyl_mob.contactCon} >
        <img src={gamil_logo}className={aboutstyl_mob.call_logo}/><p className={aboutstyl_mob.contact_txt} >+256539802 | 256530002</p>
        </div>
        <div className={aboutstyl_mob.contactCon} >
        <img src={location_logo}className={aboutstyl_mob.call_logo}/><p className={aboutstyl_mob.contact_txt} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, odio?</p>
        </div>
        </div>

        </div>
        <div className={aboutstyl_mob.abtusCont3}>
        <p className={aboutstyl_mob.fthead} >Partner</p>
        <div className={aboutstyl_mob.partner_txt_Cont} >
        <a href='#' className={aboutstyl_mob.partner_txt_Cont}>Inquire</a>
        <a href='#' className={aboutstyl_mob.partner_txt_Cont}>Sell with us</a>
        <a href='#' className={aboutstyl_mob.partner_txt_Cont}>Retail</a>
        <a href='#' className={aboutstyl_mob.partner_txt_Cont}>Other</a>
        </div>


        </div>



        </div>

        </div>
        
        </>
        )
}

