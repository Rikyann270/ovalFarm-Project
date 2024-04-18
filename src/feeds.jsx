import React, { useState} from 'react';
import kit_pic from "./images/feeds/chick-pre-starter.jpg"
import feeder_pic from "./images/feeds/duffields_super_layers.jpg"
import syringe from "./images/feeds/egg-regular.jpg"

export function feeds(){
    
    // const [linkvalue, setlinkvalue] = useState()
    var feeder_dyn = document.querySelector(".nav_image_broiler");
    var kit_dyn = document.querySelector(".nav_image");
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
    

    var all_dyn = [feeder_dyn, kit_dyn, layer_dyn]




    function xdx3(){
      feeder_dyn.style.backgroundImage ="url"+"("+feeder_pic+")";
      kit_dyn.style.backgroundImage ="url"+"("+kit_pic+")";
      layer_dyn.style.backgroundImage ="url"+"("+syringe+")";
      // setLinkvalue("/poultry/Feeds")

      Item_name1.innerText="layer feeds"
      Item_name2.innerText="Nutriuos"
      Item_name3.innerText="healthy eggs"
      // infotext.innerText="feeds infomation about feeds text"
      link_more.innerText="Explore Feeds"

      inf1.innerText="Chicken feeds"
      inf2.innerText="Nutitious"
      inf3.innerText="vitamins"
      inf4.innerText="starter, mature, for meet, layers"

      var supportCont =document.getElementById("supportCont")
      var aboutCont =document.getElementById("aboutCont")
      aboutCont.style.display="none"
      supportCont.style.display="none"
      
      
    }
    all_dyn.forEach(all_dyn_elem=>{
      all_dyn_elem&&xdx3()||""
    })
    var feedov = document.getElementById("nav_link2");
    feedov.addEventListener("mouseenter",()=> {xdx3();})
    

  }
  setTimeout(feeds, 200)