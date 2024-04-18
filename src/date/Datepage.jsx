import React, { useState,useEffect  } from 'react';
import './Datepage.css';

import { useParams } from 'react-router-dom';
import loadingBallings from "../products/icons/loading-balls.gif"

export default function Datepage() {
  const [dayCounter, setDayCounter] = useState(30);
  const [chiknumb, setChiknumb] = useState(0)
  const [finaldate, setFinaldate] = useState(0)
  const [steps, setSteps] = useState(1)
  const { data } = useParams();
  const[date_extentions, setDate_extentions] = useState()

  const [dbname, setDbname] = useState();
  const [dbprice, setDbprice] = useState(7);
  // const [dbimages, setDbimages] = useState([]);
  const [dbdate, setDbdate] = useState([]);
  let sentdp = data.toLocaleLowerCase();

  useEffect(() => {
    fetch('http://oval-backend-production.up.railway.app/api/chicken/chick/'+sentdp+'_price/')
    .then((response) => response.json())
    .then((data) => {

      
        const names = data.name;
        const prices = parseInt(data.price);

        setDbname(names)
        setDbprice(prices)

        
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



  

  const renderDays = () => {
    const dayItem = [];


    function calenCk(){
      const chicknumber = document.querySelector(".chicknumber")
      
      for (let igtemp = 0; igtemp < dbdate.length; igtemp++){
        const validEl = dbdate[igtemp];
        var Allcv=document.getElementById("dayCont"+validEl)
        const daySty= document.getElementById("day"+validEl)
        const markedDateCont = document.querySelector(".markedDateCont")
        const selected_ann = document.getElementById("selected_ann")
        

        if(Allcv){
          Allcv.style.border="2px solid rgba(20, 20, 20, 60%)"
          daySty.style.opacity="100%" 
          Allcv.addEventListener('click', ()=>datevntSet())
        }


    
        //Day setter and styler//Day setter and styler//Day setter and styler
        function datevntSet(){
          const dteSty= document.getElementById("dayCont"+validEl)
          markedDateCont.style.marginLeft="70px"
          // markedDateCont.style.background="#26344b"
          // selected_ann.style.display="unset"
          setTimeout(()=>{
            selected_ann.style.display="unset"
          },50)


  

          setTimeout(()=>{
            markedDateCont.style.marginLeft="170px"
            // markedDateCont.style.background="transparent"
          selected_ann.style.display="none"
          
          },1000)
          
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

            setTimeout(()=>{
              if(validEl>=4){
                
                setDate_extentions("th")
    
    
              }else if(validEl==1){
                setDate_extentions("st")
              }else if(validEl==2){
                setDate_extentions("nd")
              }else if(validEl==3){
                setDate_extentions("rd")
              }
  
            },10)


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
  const dayofweek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
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



  function chickTotal(intalCost){
    return intalCost*chiknumb

  }
  var chickTotalDis =  chickTotal(dbprice)


  setTimeout(()=>{var tltAmout=document.getElementById("oneChickCost")
  tltAmout.innerText=chickTotalDis+" ugx"}, 1000)



  let by1El=()=>{


    const bottomContiueCont = document.getElementById("bottomContiueCont")
    const blokRm1 = document.getElementById("blokRm2")
    const blokRm2 = document.getElementById("blokRm1")
    const blokRm3 = document.getElementById("blokRm3")
    const quantity_numb = document.getElementById("quantity_numb")
    const chicksAmount = document.getElementById("chicksAmount")
    const Continue_btn = document.getElementById("Continue_btn")
    const previous = document.getElementById("previous")



  
  setTimeout(()=>bottomContiueCont.style.display="unset",1300)

    quantity_numb.addEventListener('click',()=>{
      quantity_numb.style.fontSize="14px"
      quantity_numb.style.marginTop="-1px"
      quantity_numb.style.opacity="60%"
      chicksAmount.style.display="unset"


    })



     if(steps==1){
      blokRm2.style.display="none"
      blokRm3.style.display="none"
      blokRm1.style.display="unset"

    }else if(steps==2){
        blokRm1.style.display="none"
        blokRm3.style.display="none"
        blokRm2.style.display="flex"
        

    }else if(steps==3){
        blokRm1.style.display="none"
        blokRm2.style.display="none"
        blokRm3.style.display="unset"

    }

  previous.addEventListener('click',()=>{ 

    if(steps>=2){
    const pre_back = steps-1
    setSteps(pre_back)
    }
  })

  
  const Continue_fnc= ()=>{
    if(finaldate){
      Continue_btn.disabled=false
      Continue_btn.style.opacity="100%"
      Continue_btn.style.cursor="pointer"
      
    }else{


      setTimeout(()=>{
        Continue_btn.disabled=true
        Continue_btn.style.opacity="50%"
        Continue_btn.style.cursor="not-allowed"

      },100)

    }
    if(steps==1){
      


    setSteps(2)

    }else if(steps==2){


      setSteps(3)
    }
  }
  if(chiknumb==0){
    Continue_btn.disabled=true
    Continue_btn.style.opacity="50%"
    Continue_btn.style.cursor="not-allowed"
    
  }else{
    Continue_btn.disabled=false
    Continue_btn.style.opacity="100%"
    Continue_btn.style.cursor="pointer"
  }

if(steps==3){
  var sub_in = document.getElementById("sub_in")
  var masge_cont = document.querySelector(".masge_cont")

  Continue_btn.style.display="none"
  sub_in.style.display="unset"

  sub_in.addEventListener('click',()=>{
    masge_cont.style.display="flex"
  })


  
}else{
  var sub_in = document.getElementById("sub_in")
  var masge_cont = document.querySelector(".masge_cont")

  masge_cont.style.display="none"
  

  Continue_btn.style.display="unset"
  sub_in.style.display="none"

}
  Continue_btn.addEventListener('click',Continue_fnc)





  }


  const[apiendpoinsError, setApiendpoinsError] = useState()
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    const formData = new FormData(event.target);

    // Convert formData to JSON object
    const jsonObject = {};
    formData.forEach((value, key) => {
        jsonObject[key] = value;
    });
    const jsonData = JSON.stringify(jsonObject);

    // Make POST request to the API endpoint
    fetch('http://oval-backend-production.up.railway.app/api/records/create', {
        method: 'POST',
        headers: {
            'Authorization': 'Token '+localStorage.getItem("auth"),
            'Content-Type': 'application/json'
        },
        body: jsonData
        
    })

    .then(response => {
        if(response.status==201){
          var unauth_err1 = document.getElementById("unauth_err1");
          var unauth_err2 = document.getElementById("unauth_err2");

          unauth_err1.style.display="none"
          unauth_err2.style.display="none"
          
  
        }else if(response.status==401){
          var unauth_err1 = document.getElementById("unauth_err1");
          var unauth_err2 = document.getElementById("unauth_err2");
          

          unauth_err1.style.display="flex"
          unauth_err2.style.display="flex"
          document.getElementById("loadingballs").style.display="none"
          setApiendpoinsError("We use the account credentials to contact you.")

        }
        else{
          var unauth_err1 = document.getElementById("unauth_err1");
          var unauth_err2 = document.getElementById("unauth_err2");
          document.getElementById("loadingballs").style.display="none"

          unauth_err1.style.display="none"
          unauth_err2.style.display="none"
          setApiendpoinsError("We use the account credentials to contact you")

        }
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })

    
    .then(data => {
        // Handle successful response
        // console.log('Success:', data);
        setApiendpoinsError("Hello " + data.user + ", Thanks for ordering, we'll contact you shortly")
        document.getElementById("loadingballs").style.display="none"

        // You can perform any further actions here, such as redirecting the user or showing a success message
    })
    .catch(error => {
        // Handle error
        // console.error('Error:', error);
        // You can also display an error message to the user
    });
    // console.log(apiendpoinsError)

};
  
  setTimeout(by1El, 100)


  return (
    <>
      <div className="maincontainer">
        
      <div className="sectionSift" ></div>
      <div className="threesection">
      <div className='bottomContiueCont' id='bottomContiueCont'>
        <hr></hr>
        <button id='previous'> </button>
        <p className='steps' > Step {steps} of 3</p>
        <button className='Continue_btn' id="Continue_btn" >Continue</button>
        <form className='frm_snd' onSubmit={handleSubmit} >
        <button type="submite" id="sub_in"  >Confirm</button>

                <input className='inv_form' type="text"  defaultValue={"Poultry order"} name="title" /><br />
                <input className='inv_form' type="text" defaultValue={dbname} name="item_name"  /><br />
                <input className='inv_form' type="number" defaultValue={dbprice} name="inital_price"/><br />
                <input className='inv_form' type="number" defaultValue={200} name="total_price" /><br />
                <input className='inv_form' type="text" onChange={(e)=> setUseamout(e.target.value)} value={chiknumb}  name="quantity" /><br />
                <input className='inv_form' type="text" onChange={(e)=> setUseamout(e.target.value)} value={finaldate}  name="date" /><br />
                
            </form>
      </div>

        <div className="daySection" id="blokRm1">
          <div className="month_book" >
          <p className="bookcal">Book a Date</p>
          <p className="monthcal">January</p>
          </div>
          <div className="weekCont">
          {renderWeek()}
          </div>
          <div className="daysCont">
          {renderDays()}
          </div>
          <div className="markedDateCont">
            <p id="markedDate">{finaldate}{date_extentions}</p>
            <p className="" id="selected_ann" >Marked</p>
          </div> 
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
          <label htmlFor='chicksAmount'><p id='quantity_numb'>Quantity</p></label>
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
        <p className="perchick">Total </p>
        <p id="oneChickCost"></p>
        
        </div>
        </div>

        <div className="location" id="blokRm3">
        <p className="order_details">Order Details</p>
        <div className='order_infoCont'>
          <div className='order_Cont' >
            <div className='order_SubCont' ><p>Chick breed</p></div>
            <div className='user_choiceCont' ><p>{dbname}</p></div>
          </div>
          <div className='order_Cont' >
            <div className='order_SubCont' ><p>Quantity</p></div>
            <div className='user_choiceCont' ><p>{chiknumb}</p></div>
          </div>
          <div className='order_Cont' >
            <div className='order_SubCont' id="order_SubCont1" ><p>Date</p></div>
            <div className='user_choiceCont' ><p>{finaldate}{date_extentions}</p></div>
          </div>

          <div className='order_Cont' >
            <div className='order_SubCont' id="order_SubCont" ><p>Sub totle UGX</p></div>
            <div className='user_choiceCont' ><p>{chickTotalDis}</p></div>
          </div>
          <div className='masge_cont' >
          <img className="pending_item" id="loadingballs" src={loadingBallings}/>
            <div className='order_SubCont' ><p >{apiendpoinsError}</p></div>
            <div className='unauth_err' id='unauth_err1' ><a href='/account/register'>SignUp</a></div>
            <div className='unauth_err' id='unauth_err2' ><a href='/account/login'>Login</a></div>
          </div>

   




        </div>




        </div>

        </div>

      </div>
    </>
  );
}
