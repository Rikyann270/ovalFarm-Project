import broiler_pic from "./images/chicks/test2.jpg"
import kuroiler_pic from "./images/chicks/broiler2.jpg"
import layers_pic from "./images/chicks/layers.jpg" 

export function chicks(){
    console.log("this is a function in another function")

    var kuroiler_dyn = document.querySelector(".nav_image_broiler");
    var broiler_dyn = document.querySelector(".nav_image");
    var layer_dyn = document.querySelector(".nav_image_layers");
    var Item_name1 = document.getElementById("Item_name1")
    var Item_name2 = document.getElementById("Item_name2")
    var Item_name3 = document.getElementById("Item_name3")
    var infotext = document.getElementById("infotext")

    var all_dyn = [kuroiler_dyn, broiler_dyn, layer_dyn]

    console.log(all_dyn);



    function xdx(){
      all_dyn[0].style.backgroundImage ="url"+"("+kuroiler_pic+")"
      broiler_dyn.style.backgroundImage ="url"+"("+broiler_pic+")"
      layer_dyn.style.backgroundImage ="url"+"("+layers_pic+")"

      Item_name1.innerText="Broiler"
      Item_name2.innerText="Kuroiler"
      Item_name3.innerText="Layer"
      infotext.innerText="chicks info text"
    }
    all_dyn.forEach(all_dyn_elem=>{
      all_dyn_elem&&xdx()||console.log("Dom not yet loaded")
    })
    var chicksov = document.getElementById("nav_link1");
    chicksov.addEventListener("mouseenter",()=> {xdx();})

    

  }
  setTimeout(chicks, 200)