import React from 'react';

import eqstyle from "./productsmenus.module.css"

import tools from "../icons/tools.svg"
import chickenfeeds from "../icons/chickenfeeds.svg"
import chicks from "../icons/chicks.svg"
import animal from "../icons/nest.svg"



 export function Productsmenus(){

 
    return(
        <>

        <div className={eqstyle.topmenuStyle}>
        <div className={eqstyle.topmenu}>
          <a href='/' className={eqstyle.menuitems} >Home</a>
          <a href='/poultry' className={eqstyle.menuitems} >Chicks</a>
          <a href='/poultry/equipments' className={eqstyle.menuitems} >Tools</a>
          <a href='/poultry/Feeds' className={eqstyle.menuitems} >Feeds</a>
          <a href='#' className={eqstyle.menuitems} >About</a>

        </div>
        </div>

             <div className={eqstyle.prodmenu}>
       <a className={eqstyle.iconname} href="/poultry">
        <div className={eqstyle.icon_round}><img className={eqstyle.chicksicon} src={chicks}/></div>
      <div className={eqstyle.bxaligh} ><p className={eqstyle.chname}>Chicks </p>
      <p className={eqstyle.sortMenuInfo}>Fast-Growing, Dual-Purpose, Heritage Breeds... </p></div></a></div>

      <div className={eqstyle.prodmenu}><a className={eqstyle.iconname} href="/poultry/equipments">
      <div className={eqstyle.icon_round}><img className={eqstyle.chicksicon} src={tools}/></div>
      <div className={eqstyle.bxaligh} ><p className={eqstyle.chname}>Tools </p>
      <p className={eqstyle.sortMenuInfo}>Digital Scales, Precision Feeders, Waterers... </p></div></a></div>


      <div className={eqstyle.prodmenu}><a className={eqstyle.iconname} href="/poultry/Feeds">
      <div className={eqstyle.icon_round}><img className={eqstyle.chicksicon} src={chickenfeeds}/></div>
      <div className={eqstyle.bxaligh} ><p className={eqstyle.chname}>Feeds </p>
      <p className={eqstyle.sortMenuInfo}>Growth Booster, Protein-Rich Formula... </p>
        </div></a></div>

      {/* <div className={eqstyle.prodmenu}><a className={eqstyle.iconname} href="#">
      <div className={eqstyle.icon_round}><img className={eqstyle.chicksicon} src={learn}/></div>
      <div className={eqstyle.bxaligh} >
        <p className={eqstyle.chname}>Learn </p>
        <p className={eqstyle.sortMenuInfo}>All paulty secrets unleashed </p>
        </div></a></div> */}

      <div className={eqstyle.prodmenu} id={eqstyle.prodmenu_home}><a className={eqstyle.iconname} href="/">
      <div className={eqstyle.icon_round}><img className={eqstyle.chicksicon} id={eqstyle.nest} src={animal}/></div>
      <div className={eqstyle.bxaligh} ><p className={eqstyle.chname}>Home </p>
      <p className={eqstyle.sortMenuInfo}>About ,SignUp, Login </p></div></a></div>

   </>
    )
    }