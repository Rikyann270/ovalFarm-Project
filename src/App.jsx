import "./styles.css"
import backgroundvid from "./images/vid1.mp4"
import oval_logo from "./images/oval logo.svg"
import profile from "./images/profile.svg"
import ask from "./images/ask.svg"
import {Menu} from "./menu"



export default 
function App() {
  return(
  <>
    <Menu/>
    <section id="sec">
        <div id="nav_container">
            <nav role="navigation"  id="nav_menu" className="nav_menu">
          <a href="#" id="nav_link1" className="w_nav_link">Chicks</a>
          <a href="#" id="nav_link2" className="w_nav_link">Feeds</a>
          <a href="#" id="nav_link3" className="w_nav_link">Equipments</a>
          <a href="#" id="nav_link4" className="w_nav_link">About</a>
          <a href="#" id="nav_link5" className="w_nav_link">Support</a>
            </nav>
      </div>
      {/*<a href="#" className="contact">Contact</a>*/}
      <a href="#" className="ask"><img src={ask}/></a>
      <a href="#" className="log_in"><img src={profile}/></a>
      <img className="oval_logo" src={oval_logo}/>
    </section>
    <div className="oval_area">
      <p className="oval_text">OVAL</p>
      <p className="farm_for">Farm for the Best With us</p>
    </div>
    <div className="down_section" >
      <p className="farm_all">For all types of Day-old chicks, farm equipments, feed additives, concetrates, 
       poultry feeds & incubators</p>
      <a href="#" className="order_now">Order Now</a>
      <a href="#" className="book_now">Book Now</a>
    </div>
    <div id="vid_block"></div>

   <video className="vid_background" autoPlay muted loop src={backgroundvid}/>



  </>
 


    )

}