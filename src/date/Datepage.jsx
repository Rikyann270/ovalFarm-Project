import React, { useState,useEffect  } from 'react';
import './Datepage.css';

import mtnmoney from './images/Mtnmoney.jpg';
import airtelmoney from './images/airtel_money.jpg';
import visa from './images/visa.jpg';
import mastercard from './images/mastercard.jpg';
import { useParams } from 'react-router-dom';

export default function Datepage() {
  const [dayCounter, setDayCounter] = useState(30);
  const [chiknumb, setChiknumb] = useState(0)
  const [finaldate, setFinaldate] = useState()
  const { data } = useParams();

  const [dbname, setDbname] = useState();
  const [dbprice, setDbprice] = useState();
  // const [dbimages, setDbimages] = useState([]);
  const [dbdate, setDbdate] = useState([]);
  let sentdp = data.toLocaleLowerCase();
  console.log(sentdp)
  useEffect(() => {
    fetch('https://oval-backend-production.up.railway.app/api/chicken/chick/'+sentdp+'_price/')
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      
        const names = data.name;
        const prices = parseInt(data.price);
        const images = data.Image;

        console.log(images);

        setDbname(names)
        setDbprice(prices)
        console.log(prices, "kix")

        
        // console.log(stringArray, "dates available")
        function formatString(splt) {
          // Split the string using ', ' as the separator
          let resultArray = splt.split(', ');
          // Convert string numbers to integers
          resultArray = resultArray.map(item => isNaN(item) ? item : parseInt(item));
          
          return resultArray;
      }
      const formatedDate= formatString(data.dates)
      setDbdate(formatedDate)
    
    });
  }, []);





  

//   function formatString(inputString) {
//     // Split the string using '&' as the separator
//     let resultArray = inputString.split('&');
    
//     // Convert string numbers to integers
//     resultArray = resultArray.map(item => isNaN(item) ? item : parseInt(item));
    
//     return resultArray;
// }

// Example usage:
// let inputString = data;
// let formattedproduct = formatString(inputString);


  

  const renderDays = () => {
    const dayItem = [];


    function calenCk(){
      const chicknumber = document.querySelector(".chicknumber")
      
      for (let igtemp = 0; igtemp < dbdate.length; igtemp++){
        // console.log(animals[igtemp])
        const validEl = dbdate[igtemp];
        var Allcv=document.getElementById("dayCont"+validEl)
        const daySty= document.getElementById("day"+validEl)
        
        Allcv.style.border="2px outset rgba(20, 20, 20, 60%)"
        daySty.style.opacity="100%" 
        Allcv.addEventListener('click', ()=>datevntSet())
    
        //Day setter and styler//Day setter and styler//Day setter and styler
        function datevntSet(){
          const dteSty= document.getElementById("dayCont"+validEl)
          
          const dteStyRm = document.querySelectorAll(".dayCont");
    
          dteStyRm.forEach(element => {
            element.style.background = "";
            element.style.fontSize = "15px";
            
          });
        
          setTimeout(()=>{
            setFinaldate(validEl)
            dteSty.style.fontSize="23px"
            dteSty.style.color="red"
            dteSty.style.background="#246af3";
          }, 100)
          
          
            
            
        }
        chicknumber.style.opacity="100%";
      }
    }
    

    for (let ig = 0; ig < dayCounter; ig++) { const igchk= ig+1
      dayItem.push(
        <div className="dayCont" id={"dayCont"+igchk} key={igchk}>
          <p className="day" id={"day"+igchk}>{igchk}</p>
        </div>
        
      );




      }
      setTimeout(calenCk, 1000)
    return dayItem ;
  };

  const [weekCounter, setWeekCounter] = useState(7);
  const dayofweek = ["sun", "Mon", "Tue", "wed", "Thur", "Fri", "Sat"]
  const renderWeek = () => {
    const weekItem = [];
    for (let ig = 0; ig < weekCounter; ig++) {
      weekItem.push(
        <div className="weeki1" key={ig + 2002}>
          <p className="dayofwk">{dayofweek[ig]}</p>
        </div>
      );
    }
    return weekItem;
  };

  let mobCont=()=>{
    const mtnmob = document.getElementById("mtnmob");
    mtnmob.style.background="url"+"("+mtnmoney+")"
  }
  setTimeout(mobCont, 1000)

  function chickTotal(intalCost){
    return intalCost*chiknumb

  }
  var chickTotalDis =  chickTotal(dbprice)
  // if (chiknumb<=1000){
  //   var chickTotalDis = chickTotal(dbprice)
  // }else if(1000<chiknumb && 5000>=chiknumb){
  //   var chickTotalDis = chickTotal(2400)

  // }else if(5000<chiknumb){
  //   var chickTotalDis = chickTotal(2300)
  // }else{
  //   console.log("nothing to prevew")
  // }

  setTimeout(()=>{var tltAmout=document.getElementById("oneChickCost")
  tltAmout.innerText=chickTotalDis+" ugx"}, 1000)



  let by1El=()=>{
    const nxt1 = document.getElementById("next1")
    const nxt2 = document.getElementById("next2")
    const blokRm1 = document.getElementById("blokRm1")
    const blokRm2 = document.getElementById("blokRm2")
    const blokRm3 = document.getElementById("blokRm3")
    
    const markedDateCont = document.querySelector(".markedDateCont")
    

    nxt1.addEventListener('click',()=>{
      blokRm1.style.display="none"
      blokRm3.style.display="unset"
      console.log("i'm being rendered but i don't want tos")


    })
    nxt2.addEventListener('click',()=>{
      blokRm2.style.display="none"
      blokRm1.style.display="flex"
      // other
      markedDateCont.style.marginTop="470px"
      markedDateCont.style.marginLeft="-130px"


    })

  }
  setTimeout(by1El, 500)


  return (
    <>
      <div className="maincontainer">

      <div className="threesection">
        <div className="daySection" id="blokRm1">
          <div className="month_book" >
          <p className="bookcal">Book a date</p>
          <p className="monthcal">January</p>
          </div>
          <div className="weekCont">
          {renderWeek()}
          </div>
          <div className="daysCont">
          {renderDays()}
          </div>
          <div className="markedDateCont">
            <p id="markedDate">{finaldate}</p>
            <p className="">Jan</p>
          </div>
          <p className='next1' id='next1'>Finish</p>
        </div>
        <div className="chicknumber" id="blokRm2">
        <p className="numbChicks">Number of chicks</p>
        <p className="chicksType">{dbname}</p>

        <fieldset id="legfield">
          <input id="chicksAmount" type="number"
          value={chiknumb}
          min={30}
          onChange={(e)=> setChiknumb(e.target.value)}
          />
        </fieldset>
        <div className="priceCutsCont" >
        <div className="priceCuts">
        <p className="fromAm" >1-1000</p>
        <p className="priceDrop">2500</p>
        </div>
        <div className="priceCuts">
        <p className="fromAm">1000-5000</p>
        <p className="priceDrop">2400</p>
        </div>
        <div className="priceCuts">
        <p className="fromAm" >5000-10000</p>
        <p className="priceDrop">2300</p>
        </div>
        </div>
        <div className="chickCost">
        <p className="oneChickCost">{dbprice}</p>
        <p className="perchick">/ per chick</p>
        </div>
        <div className="TotalCost">
        <p id="oneChickCost"></p>
        <p className="perchick">| Total</p>
        
        </div>
        <p className='next2' id='next2'>next</p>
        </div>

        <div className="location" id="blokRm3">
        <p className="numbChicks">Payment</p>
        <div id="fst" className="DetailPayCont">
          <div className="FinalCreCont">
          <p className="FinalDate">{finaldate}</p>
          <p className="FinalMonth"> Jan</p>
          </div>
          <div className="FinalCreCont">
          <p className="FinalDate">{chiknumb}</p>
          <p className="FinalMonth">Chicks</p>
          
          </div>
          <div id="FnAmountCont" className="FinalCreCont">
          <p className="FinalDate">{chickTotalDis}</p>
          <p className="FinalMonth">Total</p>
          </div>


        </div>

        <div className="mobliemCont">
          <p className="moblieMoney">Moblie money</p>
          <img id="mtnmob" src={mtnmoney}/>
          <img id="airtelmob" src={airtelmoney}/>
          <p className="mtnwrd">Mtn</p>
          <p className="airtelwrd">Airtel</p>

          <img id="visaPay" src={visa}/>
          <img id="mastercardPay" src={mastercard}/>
          <p className="visawrd">visa</p>
          <p className="mastercardwrd">masterCard</p>

        </div>
        <div className="DetailPayCont">
        <button className="conferm">Conferm</button>

          
        </div>




        </div>

        </div>
        <div className='loaderCont'>
          <div className='loaderM' ></div>
          <div className='loaderM' ></div>
          <div className='loaderM' ></div>

        </div>
      </div>
    </>
  );
}
