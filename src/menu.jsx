import bklft from "./images/bk lft.svg"
import bkryt from "./images/bk lft.svg"



let setterModule;



export function Menu(){
    const loadChicksModule = async () => {
    const module = await import("./chicks");
      setterModule = module.chicks;
      
      console.log(setterModule, "this is setterModule")


    // Use 'chicksModule' here or store it for later use
  };
    const loadEquipementsModule = async () => {
    const module = await import("./equipements");
    setterModule = module.equipements;
    
    // Use 'chicksModule' here or store it for later use
  };
    const loadFeedsModule = async () => {
    const module = await import("./feeds");
    setterModule = module.feeds;

    
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

    var allnavele= [chicksov, feedov, equiepov, aboutov, supportov]
    vid_block.addEventListener("mouseenter", ()=>{
      vid_block.style.display="none"
      main_menu.style.display="none"
    })
    allnavele.forEach(allnavele_sele=>{

    allnavele_sele.addEventListener("mouseenter", ()=>{
      vid_block.style.display="block"
      main_menu.style.display="block"
    }) 

    }
    )
  

  chicksov.addEventListener("mouseenter",()=> {loadChicksModule();})
  equiepov.addEventListener("mouseenter",()=> {loadEquipementsModule();})
  feedov.addEventListener("mouseenter",()=> {loadFeedsModule();})
  





  }
  setTimeout(eventele, 1000)



  

	
	return(
			    <div id="main_menu"  className="main_menu">
  <div id="menu_item_container">
    <img id="backicon" src={bklft}/>
    <img id="righticon" src={bkryt}/>
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
  <a id="more" href="chicks">More breeds</a>



  </div>
  <div id="infodiv">
    <p id="infotext">Lorem ipsum dolor sit amet, consectetur 
    adipisicing elit. Pariatur qui nisi consequuntur
    , fugiat mollitia vitae ullam quibusdam voluptates
     nam possimus officia porro! Modi dolore incidunt,
     alias pariatur commodi explicabo sapiente?
     Lorem ipsum dolor sit amet, consectetur 
    adipisicing elit. Pariatur qui nisi consequuntur

     </p>
  </div>
 
  </div>
			)


}