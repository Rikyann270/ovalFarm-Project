import React, { useState} from 'react';
import kit_pic from "./images/equipements/immunebox.jpg"
import feeder_pic from "./images/equipements/metalfeeder.jpg"
import syringe from "./images/equipements/syringe.jpg"



export function equipements(){
  // const [linkvalue, setLinkvalue] = useState();
    var feeder_dyn = document.querySelector(".nav_image_broiler");
    var kit_dyn = document.querySelector(".nav_image");
    var layer_dyn = document.querySelector(".nav_image_layers");

    var Item_name1 = document.getElementById("Item_name1")
    var Item_name2 = document.getElementById("Item_name2")
    var Item_name3 = document.getElementById("Item_name3")
    var link_more = document.getElementById("more")

    var inf1 = document.getElementById("inf1")
    var inf2 = document.getElementById("inf2")
    var inf3 = document.getElementById("inf3")
    var inf4 = document.getElementById("inf4")



    

    var all_dyn = [feeder_dyn, kit_dyn, layer_dyn]

    // console.log(all_dyn);
    console.log(feeder_pic, "feeder_dyn value")
    // console.log(syringe, "syringe")



    function xdx(){
      feeder_dyn.style.backgroundImage ="url"+"("+feeder_pic+")";
      kit_dyn.style.backgroundImage ="url"+"("+kit_pic+")";
      layer_dyn.style.backgroundImage ="url"+"("+syringe+")";
      console.log(syringe)
      link_more.innerText="Explore More"
      

      Item_name1.innerText="Steel feeder"
      Item_name2.innerText="imunisation kit"
      Item_name3.innerText="vacine syringe"

      inf1.innerText="Farm requirements"
      inf2.innerText="In all sizes"
      inf3.innerText="Quality"
      inf4.innerText="Palstic, metal, wooden"

    }
    all_dyn.forEach(all_dyn_elem=>{
      all_dyn_elem&&xdx()||console.log("Dom not yet loaded")
    })
    var equiepov = document.getElementById("nav_link3");
    equiepov.addEventListener("mouseenter",()=> {xdx();})
    

  }
  setTimeout(equipements, 200)