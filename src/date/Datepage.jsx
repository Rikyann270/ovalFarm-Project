import React, { useState } from 'react';
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
  console.log("recieved data",data)

  function formatString(inputString) {
    // Split the string using '&' as the separator
    let resultArray = inputString.split('&');
    
    // Convert string numbers to integers
    resultArray = resultArray.map(item => isNaN(item) ? item : parseInt(item));
    
    return resultArray;
}

// Example usage:
let inputString = data;
let formattedproduct = formatString(inputString);
console.log(formattedproduct);

  

  const renderDays = () => {
    const dayItem = [];
    for (let ig = 0; ig < dayCounter; ig++) { const igchk= ig+1
      dayItem.push(
        <div className="dayCont" onClick={datevntSet} id={"dayCont"+igchk} key={igchk}>
          <p className="day" id={"day"+igchk}>{igchk}</p>
        </div>
      );
      function datevntSet(){
        console.log("dayCont"+igchk);
        
        const dteSty= document.getElementById("dayCont"+igchk)
        const dteStyRm = document.querySelectorAll(".dayCont");

        dteStyRm.forEach(element => {
          element.style.background = "";
          element.style.fontSize = "15px";
          element.style.border="0px inset rgba(20, 20, 20, 0%)";
        });
      
        setTimeout(()=>{
          // document.getElementById("markedDate").innerText=igchk;
          setFinaldate(igchk)
          dteSty.style.fontSize="23px"
          dteSty.style.border="2px outset rgba(20, 20, 20, 60%)"
          dteSty.style.background="#246af3"}, 100)

      }
      }

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
  var chickTotalDis;
  if (chiknumb<=1000){
    var chickTotalDis = chickTotal(formattedproduct[1])
  }else if(1000<chiknumb && 5000>=chiknumb){
    var chickTotalDis = chickTotal(2400)

  }else if(5000<chiknumb){
    var chickTotalDis = chickTotal(2300)
  }else{
    console.log("nothing to prevew")
  }

  setTimeout(()=>{var tltAmout=document.getElementById("oneChickCost")
  tltAmout.innerText=chickTotalDis+" ugx"}, 1000)


  return (
    <>
      <div className="maincontainer">
      <div className="threesection">
        <div className="daySection">
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
        </div>
        <div className="chicknumber">
        <p className="numbChicks">Number of chicks</p>
        <p className="chicksType">{formattedproduct[0]}</p>

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
        <p className="oneChickCost">{formattedproduct[1]}</p>
        <p className="perchick">/ per chick</p>
        </div>
        <div className="TotalCost">
        <p id="oneChickCost"></p>
        <p className="perchick">| Total</p>
        </div>
        </div>

        <div className="location">
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
      </div>
    </>
  );
}
