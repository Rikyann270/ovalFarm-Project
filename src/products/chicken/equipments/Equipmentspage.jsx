import React, { useState,useEffect  } from 'react';



import eqstyle from"./equipments.module.css";
import {Productsmenus} from "../../productsmenu/productsmenus.jsx";
import {Footer} from "../../../footer/footer.jsx";
//images

//icons

import sline from "../../icons/sline.svg"
// import equipementsheaderImg from "../../images/equipementsheaderImg.png"
import equipementsheaderImg1 from "../../images/equipementsheaderImg.png"
import equipementsheaderImg2 from "../../images/equipementsheaderImg2.png"
import equipementsheaderImg3 from "../../images/equipementsheaderImg3.png"
import equipementsheaderImg4 from "../../images/equipementsheaderImg4.png"
import equipementsheaderImg5 from "../../images/equipementsheaderImg5.png"
import loadingBallings from "../../icons/loading-balls.gif"







export default function Equipmentspage() {
  // data fetching


 
   
  const [dbname, setDbname] = useState([]);
  const [dbprice, setDbprice] = useState([]);
  const [dbimages, setDbimages] = useState([]);
  const [dbcount, setDbcount] = useState([]);
  const [slugify , setSlugify] = useState([]);
  const [pslug , setPslug] = useState("kenploy-drinker_tools")

  useEffect(() => {
    fetch('https://oval-backend-production.up.railway.app/api/chicken/equipments/list')
    // fetch('https://oval-backend-production.up.railway.app/api/chicken/equipments/list')
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



const [stopwatch1, setStopwatch1] = useState(0)

useEffect(()=>{
       const sliderContr= setInterval(()=>{
          setStopwatch1((stopwatch1)=> stopwatch1 + 1)

        }, 5000);
  return ()=>{
    clearInterval(sliderContr)
  }
}, []);
if(stopwatch1>=5){
  setStopwatch1(0)
}



// console.log(dbname)
// const [broilerCount, setBroilerCount] = useState(5); // Adjust the count based on your requirements
const heroimage=()=>{
  const headerimg = document.getElementById("headerimg")
  const provImages = [equipementsheaderImg1,equipementsheaderImg2,
  equipementsheaderImg3,equipementsheaderImg4,equipementsheaderImg5,]

  setTimeout(  ()=>{
     
      headerimg.style.backgroundColor="transparent"
      headerimg.style.backgroundImage="url"+"("+provImages[stopwatch1]+")"
      headerimg.style.opacity="100%"
      headerimg.style.margin="-5px -600px 0px 0px"
  },100)
}
setTimeout(heroimage,200)

function imgloder(){
 const loder=[document.getElementById('loder1'),document.getElementById('loder2')
  ,document.getElementById('loder3'),document.getElementById('loder4'),document.getElementById('loder5')]



if(loder[stopwatch1]==loder[stopwatch1]&&loder.length>stopwatch1){
  loder.map((item)=>{
    return item.style.opacity="20%",item.style.width="7px",item.style.height="7px",item.style.transition="0.3s"
  })
  loder[stopwatch1].style.opacity="100%"
  loder[stopwatch1].style.width="12px";
  loder[stopwatch1].style.height="12px";
  loder[stopwatch1].addEventListener("click",()=>setStopwatch1(stopwatch1))

}


}
if(document.getElementById("loder1")){
  imgloder()

}



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
        setTimeout(
          ()=>{pPayContLay.style.display="flex"}
        ,500)
        
        
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
    <p className={eqstyle.popularItem} ><b>Discover All Standard </b>farming{"\n"} Essentials here</p>
    <div className={eqstyle.productBenfit} >Enhance your poultry farm with our top-notch tools and premium equipment. Elevate your operations seamlessly. Explore now for unparalleled efficiency.</div>
   {/* <img src={divider}/> */}
   <div className={eqstyle.dividerCont}></div>
   <div className={eqstyle.heroClearStyle1}></div>
   <div className={eqstyle.heroClearStyle2}></div>
    <div className={eqstyle.headerSliderCont} >
      <div className={eqstyle.imgloader} id="loder1" ></div>
      <div className={eqstyle.imgloader} id="loder2" ></div>
      <div className={eqstyle.imgloader} id="loder3" ></div>
      <div className={eqstyle.imgloader} id="loder4" ></div>
      <div className={eqstyle.imgloader} id="loder5" ></div>
    </div>
   

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

<div className={eqstyle.FooterCont}>
    <Footer/>
  </div>
  </>
);
}




