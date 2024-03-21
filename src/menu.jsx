import React, { useState} from 'react';
let setterModule;



export function Menu(){
    const [linkvalue, setLinkvalue] = useState("/poultry");
    
    const loadChicksModule = async () => {
    const module = await import("./chicks");
      setterModule = module.chicks;
      setLinkvalue("/poultry")
      


    // Use 'chicksModule' here or store it for later use
  };
    const loadEquipementsModule = async () => {
    const module = await import("./equipements");
      setterModule = module.equipements;
      setLinkvalue("/poultry/equipments")
    
    // Use 'chicksModule' here or store it for later use
  };
    const loadFeedsModule = async () => {
    const module = await import("./feeds");
      setterModule = module.feeds;
      setLinkvalue("/poultry/Feeds")

    
    // Use 'chicksModule' here or store it for later use
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
  


  chicksov.addEventListener("mouseenter",()=> {loadChicksModule();})
  equiepov.addEventListener("mouseenter",()=> {loadEquipementsModule();})
  feedov.addEventListener("mouseenter",()=> {loadFeedsModule();})
  
  // loadChicksModule();
  // loadEquipementsModule();
  // loadFeedsModule();




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
        <a href="#" className="order_learn">Learn</a>
        <a href="#" className="order_learn">Order</a>
      </div>
    </div>
    <div className="chick">
      <div className="nav_image"></div>
      <div className="align_order_learn">
        <p className="Item_name" id="Item_name2" >Kuroiler</p>
        <a href="#" className="order_learn">Learn</a>
        <a href="#" className="order_learn">Order</a>
      </div>
    </div>

    <div className="chick">
      <div className="nav_image_layers"></div>
      <div className="align_order_learn">
        <p className="Item_name" id="Item_name3" >Layer</p>
        <a href="#" className="order_learn">Learn</a>
        <a href="#" className="order_learn">Order</a>
      </div>
    </div>
  </div>
  <a id="more" href={linkvalue} >More breeds</a>



  </div>
  <div id="infodiv">
    {/* <p id="infotext">Lorem ipsum dolor sit amet, consectetur 
    adipisicing elit. Pariatur qui nisi consequuntur
    , fugiat mollitia vitae ullam quibusdam voluptates
     nam possimus officia porro! Modi dolore incidunt,
     alias pariatur commodi explicabo sapiente?
     Lorem ipsum dolor sit amet, consectetur 
    adipisicing elit. Pariatur qui nisi consequuntur

     </p> */}
     <div className='vrmenu'></div>

     <p id='inf1' >Chicks we provide</p>
     <p id='inf2' >1 day old</p>
     <p id='inf3' >Pre vaccinated</p>
     <p id='inf4' >Hybrid, local and exotic breeds</p>
     <a href={linkvalue}><button id='infCta'>Get now</button></a>
  </div>
 
  </div>
			)


}