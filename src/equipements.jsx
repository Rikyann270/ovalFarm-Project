import kit_pic from "./images/equipements/immunebox.jpg"
import feeder_pic from "./images/equipements/metalfeeder.jpg"
import syringe from "./images/equipements/syringe.jpg"

export function equipements(){
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

      Item_name1.innerText="iron feeder"
      Item_name2.innerText="imunisation kit"
      Item_name3.innerText="vacine syringe"
      infotext.innerText="equipements infomation text"
    }
    all_dyn.forEach(all_dyn_elem=>{
      all_dyn_elem&&xdx()||console.log("Dom not yet loaded")
    })
    var equiepov = document.getElementById("nav_link3");
    equiepov.addEventListener("mouseenter",()=> {xdx();})
    

  }
  setTimeout(equipements, 200)