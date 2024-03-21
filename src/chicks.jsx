import React, { useState} from 'react';
import broiler_pic from "./images/chicks/broiler2.jpg"
import kuroiler_pic from "./images/chicks/kuroiler.jpg"
import layers_pic from "./images/chicks/layers.jpg" 

export function chicks(){

  // const [linkvalue, setlinkvalue] = useState()
    var kuroiler_dyn = document.querySelector(".nav_image_broiler");
    var broiler_dyn = document.querySelector(".nav_image");
    var layer_dyn = document.querySelector(".nav_image_layers");
    var Item_name1 = document.getElementById("Item_name1")
    var Item_name2 = document.getElementById("Item_name2")
    var Item_name3 = document.getElementById("Item_name3")
    // var infotext = document.getElementById("infotext")
    var link_more = document.getElementById("more")

    var inf1 = document.getElementById("inf1")
    var inf2 = document.getElementById("inf2")
    var inf3 = document.getElementById("inf3")
    var inf4 = document.getElementById("inf4")

    var all_dyn = [kuroiler_dyn, broiler_dyn, layer_dyn]




    function xdx(){
      broiler_dyn.style.backgroundImage ="url"+"("+kuroiler_pic+")"
      all_dyn[0].style.backgroundImage ="url"+"("+broiler_pic+")"
      layer_dyn.style.backgroundImage ="url"+"("+layers_pic+")"

      Item_name1.innerText="Broiler"
      Item_name2.innerText="Kuroiler"
      Item_name3.innerText="Layer"
      // infotext.innerText="chicks info text"
      link_more.innerText="More Breeds"


      inf1.innerText="Chicks we provide"
      inf2.innerText="1 day old"
      inf3.innerText="Pre vaccinated"
      inf4.innerText="Hybrid, local and exotic breeds"
      // setLinkvalue("/poultry")
    }
    all_dyn.forEach(all_dyn_elem=>{
      all_dyn_elem&&xdx()||console.log("Dom not yet loaded")
    })
    var chicksov = document.getElementById("nav_link1");
    chicksov.addEventListener("mouseenter",()=> {xdx();})

    

  }
  setTimeout(chicks, 200)