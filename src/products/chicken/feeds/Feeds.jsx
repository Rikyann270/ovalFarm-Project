

import React, { useState,useEffect  } from 'react';


import eqstyle from"./feeds.module.css";
import {Productsmenus} from "../../productsmenu/productsmenus.jsx";
import {Footer} from "../../../footer/footer.jsx";
// import equipementsheaderImg from "../../images/brownchicken.jpg"
import equipementsheaderImg from "../../images/whitechicken.jpg"
import loadingBallings from "../../icons/loading-balls.gif"
//images

//icons

import sline from "../../icons/sline.svg"





export default function Equipmentspage() {
  // data fetching
  const [dbname, setDbname] = useState([]);
  const [dbprice, setDbprice] = useState([]);
  const [dbimages, setDbimages] = useState([]);
  const [dbcount, setDbcount] = useState([]);
  const [slugify , setSlugify] = useState([]);
  const [pslug , setPslug] = useState("auto-drinker_tools")

  useEffect(() => {
    fetch('https://oval-backend-production.up.railway.app/api/chicken/feeds/list')
    .then((response) => response.json())
    .then((data) => {
      const namesArray = [];
      const pricesArray = [];
      const imagesArray = [];
      const slugArray = [];
      
        
      for (let ik = 0; ik < data.count; ik++) {
        const names = data.results[ik].name;
        const prices = data.results[ik].price;
        const images = data.results[ik].Image;
        const slug = data.results[ik].slug;
        document.getElementById("loadingballs").style.display="none"




        namesArray.push(names);
        pricesArray.push(prices);
        imagesArray.push(images);
        slugArray.push(slug);
        setDbcount(data.count)
      }

      // Set the state with the array of names
      setDbname(namesArray);
      setDbprice(pricesArray);
      setDbimages(imagesArray);
      setSlugify(slugArray);
    }
    )
    .catch((error) => {
      // console.error("An Error from main server");
    })
}, []);
// console.log(dbname)
// const [broilerCount, setBroilerCount] = useState(5); // Adjust the count based on your requirements
const heroimage=()=>{
  const headerimg = document.getElementById("headerimg")

  setTimeout(  ()=>{
      headerimg.style.backgroundColor="transparent"
      headerimg.style.backgroundImage="url"+"("+equipementsheaderImg+")"
      headerimg.style.opacity="100%"
      headerimg.style.margin="60px -600px 0px 0px"
  },100)


}
setTimeout(heroimage,200)

const renderBroilerItems = () => {


 
  const broilerItems = [];
  for (let i = 0; i < dbcount; i++) {
    broilerItems.push(
      <div className={eqstyle.item1Cont} key={i}>
      <div className={eqstyle.item1} id={"item"+i} ></div> 
      {/* the urls that send data */}
      <div className={eqstyle.itreadmdiv}><a  className={eqstyle.itreadm}>Read more</a></div>
        <div className={eqstyle.itordermdiv}><button href="" id={'btn_odr'+dbname[i]} className={eqstyle.itorderm}>Order</button></div>
        <p className={eqstyle.prodit}>{dbname[i]}</p>
        <p className={eqstyle.itemPrice}>{dbprice[i]}</p>
      </div>
    );



     let backset = ()=>{
      const item0n = document.getElementById("item"+i)
      const item1n = document.getElementById("item1")
      const btn_odr = document.getElementById('btn_odr'+dbname[i])


      btn_odr.addEventListener("click", ()=>{
        setPslug(slugify[i])

        // setSlugify(place_pop_ordr)
        pPayContLay.style.display="flex"
      })
      pPayContLay.addEventListener("click", ()=>{


        // setSlugify(place_pop_ordr)
        pPayContLay.style.display="none"
      })
      if(item1n){
        item0n.style.backgroundImage="url"+"("+dbimages[i]+")"
        
      }else{window.location.reload(true)}



      
      
    }
    
    
    setTimeout(backset, 100)

  }
  return broilerItems;
};


return (
  <>

    <div className={eqstyle.AllContnerDiv}>

    <div className={eqstyle.main_cont}>
    <img className={eqstyle.sepline}  src={sline}/>
    <img className={eqstyle.sep2} id="sep2" src={sline}/>   
    <p className={eqstyle.popularItem} ><b>Discover standard </b>farming Essentials</p>
    <div className={eqstyle.productBenfit} >Enhance your poultry farm with our top-notch tools and premium equipment. Elevate your operations seamlessly. Explore now for unparalleled efficiency.</div>
    <div className={eqstyle.headerimg} id='headerimg'></div>
    <Productsmenus/>
    </div>
    <div className={eqstyle.pPayContLay} id='pPayContLay' >
      <iframe className={eqstyle.popPay} src={'/poultry/equipments/buy/'+"equipments@"+pslug}>

      </iframe>

    </div>
    <div className={eqstyle.divContainer}>
      <div className={eqstyle.prodalign}>
        
        <div className={eqstyle.prodsection}>
          {/* <p>Loading  Items</p> */}
          <img className={eqstyle.loadingballs} id="loadingballs" src={loadingBallings}/>
          {renderBroilerItems()}
        </div>
      </div>
    </div>
    </div>


    <Footer/>
  </>
);
}


