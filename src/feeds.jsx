import kit_pic from "./images/feeds/chick-pre-starter.jpg"
import feeder_pic from "./images/feeds/duffields_super_layers.jpg"
import syringe from "./images/feeds/egg-regular.jpg"

export function feeds(){
    console.log("this is a function in another function")

    var feeder_dyn = document.querySelector(".nav_image_broiler");
    var kit_dyn = document.querySelector(".nav_image");
    var layer_dyn = document.querySelector(".nav_image_layers");

    var Item_name1 = document.getElementById("Item_name1")
    var Item_name2 = document.getElementById("Item_name2")
    var Item_name3 = document.getElementById("Item_name3")
    var infotext = document.getElementById("infotext")

    var all_dyn = [feeder_dyn, kit_dyn, layer_dyn]

    // console.log(all_dyn);
    console.log(feeder_pic, "feeder_dyn value")
    console.log(syringe, "syringe")



    function xdx(){
      feeder_dyn.style.backgroundImage ="url"+"("+feeder_pic+")";
      kit_dyn.style.backgroundImage ="url"+"("+kit_pic+")";
      layer_dyn.style.backgroundImage ="url"+"("+syringe+")";

      Item_name1.innerText="layer feeds"
      Item_name2.innerText="Nutriuos"
      Item_name3.innerText="healthy eggs"
      infotext.innerText="feeds infomation about feeds text"
    }
    all_dyn.forEach(all_dyn_elem=>{
      all_dyn_elem&&xdx()||console.log("Dom not yet loaded")
    })
    var feedov = document.getElementById("nav_link2");
    feedov.addEventListener("mouseenter",()=> {xdx();})
    

  }
  setTimeout(feeds, 200)