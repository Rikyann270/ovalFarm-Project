import React, { useState,useEffect  } from 'react';

//style
import ckstyle from "./products.module.css";
//images
import {Productsmenus} from "../../productsmenu/productsmenus.jsx";
import {Footer} from "../../../footer/footer.jsx";
//icons
import sline from "../../icons/sline.svg"
import vaccine from "../../icons/vaccine.svg"
import delivery from "../../icons/delivery.svg"
import bookings from "../../icons/booking.svg"
import chiskslide3 from "../../images/chiskslide3.jpg"
import chiskslide1 from "../../images/chiskslide1.jpg"


export default function Chickspage() {
  // data fetching
  const [dbname, setDbname] = useState([]);
  const [dbprice, setDbprice] = useState([]);
  const [dbimages, setDbimages] = useState([]);
  const [dbcount, setDbcount] = useState([]);

  const[orderPop, setOrderPop] = useState("broiler")

  useEffect(() => {
    fetch('https://oval-backend-production.up.railway.app/api/chicken/chick/list')
      .then((response) => response.json())
      .then((data) => {
        const namesArray = [];
        const pricesArray = [];
        const imagesArray = [];
        
          
        for (let ik = 0; ik < data.count; ik++) {
          const names = data.results[ik].name;
          const prices = data.results[ik].price;
          const images = data.results[ik].Image;
  
          // console.log(prices);
  
          namesArray.push(names);
          pricesArray.push(prices);
          imagesArray.push(images);
          setDbcount(data.count)
        }
  
        // Set the state with the array of names
        setDbname(namesArray);
        setDbprice(pricesArray);
        setDbimages(imagesArray);
      });
  }, []);
  console.log(dbname)
  // const [broilerCount, setBroilerCount] = useState(5); // Adjust the count based on your requirements
  const heroimage=()=>{
    const hero_img = document.getElementById("hero_img")
  
    setTimeout(  ()=>{
      // hero_img.style.backgroundColor="transparent"
      hero_img.style.backgroundImage="url"+"("+chiskslide1+")"
    },100)
  
  
  }
  setTimeout(heroimage,200)
  const renderBroilerItems = () => {
  
    let later=()=>{
   }
    setTimeout(later, 200)
   
    const broilerItems = [];
    for (let i = 0; i < dbcount; i++) {
      broilerItems.push(
        <div className={ckstyle.item1Cont} key={i}>
        <div className={ckstyle.item1} id={"item"+i} ></div> 
        {/* the urls that send data */}
        <div className={ckstyle.itreadmdiv}><a href="" className={ckstyle.itreadm}>Read more</a></div>
          <div className={ckstyle.itordermdiv}><button id={'btn_odr'+dbname[i]}  className={ckstyle.itorderm}>Order</button></div>
          <p className={ckstyle.prodit}>{dbname[i]}</p>
          <p className={ckstyle.itemPrice}>{dbprice[i]}</p>
        </div>
      );


      
       let backset = ()=>{
        const item0n = document.getElementById("item"+i);
        const item1n = document.getElementById("item1");
        const pPayContLay = document.getElementById("pPayContLay");
        const bottom_imgi = document.getElementById("bottom_img")
        


        const btn_odr = document.getElementById('btn_odr'+dbname[i])

        btn_odr.addEventListener("click", ()=>{
          var place_pop_ordr=dbname[i].toLocaleLowerCase()
          setOrderPop(place_pop_ordr)
          pPayContLay.style.display="flex"
        })

    		if(item1n){
          item0n.style.backgroundImage="url"+"("+dbimages[i]+")"
          console.log(dbimages[2],"this is the image")
          // bottom_imgi.style.backgroundImage="url"+"("+dbimages[i]+")"
          bottom_imgi.style.backgroundImage="url"+"("+chiskslide3+")"
          
    		}else{window.location.reload(true)}

    		
    		
    	}
    	
    	
    	setTimeout(backset, 100)
    }
    return broilerItems;
  };


  return (
    <>
    <div className={ckstyle.AllContnerDiv}>
    <div className={ckstyle.main_cont}>
    <img className={ckstyle.sepline}  src={sline}/>
    <img className={ckstyle.sep2} id="sep2" src={sline}/>   
    <p className={ckstyle.popularItem} >Popular<b>Breeds</b></p>
    <div className={ckstyle.productBenfit} >Explore our breeds: faster growth, stronger immunity, ideal for beef. Elevate your farm with top-quality poultry genetics. Maximize efficiency and profitability effortlessly</div>
    <div className={ckstyle.hero_img} id="hero_img" ></div>
    <Productsmenus/>
    </div>
    <div className={ckstyle.pPayContLay} id='pPayContLay' >
      <iframe className={ckstyle.popPay} src={'date_confermation/'+orderPop}>

      </iframe>
    </div>
    <div className={ckstyle.divContainer}>
      <div className={ckstyle.prodalign}>
        
        <div className={ckstyle.prodsection}>
          {renderBroilerItems()}
        </div>
      </div>
    </div>
    <div className={ckstyle.remaksCont}>
    <p className={ckstyle.whyus}>Experience Our Unique Services</p>
    <img className={ckstyle.sepline3}  src={sline}/>
    <img className={ckstyle.sep4} id="sep2" src={sline}/>

      <div className={ckstyle.iconsCont} >

      <div className={ckstyle.opt1Cont} >
        <div className={ckstyle.rytborder} ></div>
        <div className={ckstyle.lftborder} ></div>
        <div className={ckstyle.contentsCont}>
        <img src={vaccine} className={ckstyle.vaccine_ico}/>
        <p className={ckstyle.choose_title}>Immunity</p>
        <p className={ckstyle.choose_info}>
        We offer pre-immunized chicks for certain breeds, giving them a head start in fighting off common diseases. Ask us about availability!</p>
        </div>


        </div>

      <div className={ckstyle.opt1Cont} >
        <div className={ckstyle.rytborder} ></div>
        <div className={ckstyle.lftborder} ></div>
        <div className={ckstyle.contentsCont}>
        <img src={delivery} className={ckstyle.vaccine_ico}/>
        <p className={ckstyle.choose_title}>Delivery</p>
        <p className={ckstyle.choose_info}>
        We strive to ensure your chicks arrive safely and healthy. Chicks typically arrive within 2-3 business days of your order being placed</p>
        </div>


        </div>

      <div className={ckstyle.opt1Cont} >
        <div className={ckstyle.rytborder} ></div>
        <div className={ckstyle.lftborder} ></div>
        <div className={ckstyle.contentsCont}>
        <img src={bookings} className={ckstyle.vaccine_ico}/>
        <p className={ckstyle.choose_title}>Bookings</p>
        <p className={ckstyle.choose_info}>Our streamlined booking process allows you to reserve the chicks you need quickly and easily</p>
        </div>


        </div>

      </div>
      <div className={ckstyle.bottomwordsCont}>
      <p className={ckstyle.bottom_heading} >Your Trusted Partner in Poultry Success</p>
      <p className={ckstyle.bottom_infor} >
  We empower Ugandan farmers with top-quality chicks, expert guidance,
  and essential resources. Elevate your farm's efficiency and profitability
    with our proven genetics. Contact us today to discuss your needs.</p>
    <div className={ckstyle.bottom_img} id="bottom_img" ></div>
      </div>
      </div>
    <div>
    </div>
    </div>
    <Footer/>
  </>
);
}