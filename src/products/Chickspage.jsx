import React, { useState,useEffect  } from 'react';

//style
import "./products.css";
//images
import broilerimage from "./images/broiler.jpg"
import kuroilaimage from "./images/kuroila.jpg"
import layerimage from "./images/layer1.jpg"
import sassoimage from "./images/sasso1.jpg"
//icons
import tools from "./icons/tools.svg"
import chickenfeeds from "./icons/chickenfeeds.svg"
import vaccine from "./icons/vaccine.svg"
import chicks from "./icons/chicks.svg"
import learn from "./icons/learn.svg"
import animal from "./icons/animal.svg"
import sline from "./icons/sline.svg"
import ovalH from "./icons/ovalH.svg"
import mazebk from "./icons/mazebk.jpg"



export default function Chickspage() {

  const [wordi, setWordi] = useState();
  useEffect(()=>{
      fetch('http://127.0.0.1:8000/api/chicken/kuroiler_price/')
          .then((response) => response.json())
          .then((data) => console.log(data));
  }, []);
  const [broilerCount, setBroilerCount] = useState(4); // Adjust the count based on your requirements
  const itemname= ["Broiler","Kuroiler", "Layer","Sasso"]
  const itemprics =[2500, 2400, 2200, 2200]
  const renderBroilerItems = () => {
    const broilerItems = [];
    for (let i = 0; i < broilerCount; i++) {
      broilerItems.push(
        <div className='item1Cont' key={i}>
        <div className="item1" id={"item"+i} ></div> 
        {/* the urls that send data */}
        <div className="itreadmdiv"><a href="" className="itreadm">Read more</a></div>
          <div className="itordermdiv"><a href={'/date_confermation/'+itemname[i]+'&'+itemprics[i]+'&'+"30"} className="itorderm">Order</a></div>
          <p className="prodit">{itemname[i]}</p>
          <p className="itemPrice">{itemprics[i]}</p>
        </div>
      );
       let backset = ()=>{
    		const item0n = document.getElementById("item0")
        const item1n = document.getElementById("item1")
        const item2n = document.getElementById("item2")
        const item3n = document.getElementById("item3")
        const ovalBack = document.getElementById("ovalBack")
    		if(item1n){
    			console.log("yes element available")
    			item0n.style.backgroundImage="url"+"("+broilerimage+")"
          item1n.style.backgroundImage="url"+"("+kuroilaimage+")"
          item2n.style.backgroundImage="url"+"("+layerimage+")"
          item3n.style.backgroundImage="url"+"("+sassoimage+")"
          ovalBack.style.backgroundImage="linear-gradient(rgba(0,0,0,0%), rgba(200,200,250,20%), #f5f5f5), url"+"("+mazebk+")"
    		}else{window.location.reload(true)}

    		
    		
    	}
    	
    	
    	setTimeout(backset, 100)
    }
    return broilerItems;
  };


  return (
    <>
      <div className="AllContnerDiv">
      <div className="main_cont">
        <img className="ovalH" src={ovalH}/>

        <div id='ovalBack'></div>
      <img className='sepline'  src={sline}/>
      <img className='sepline' id="sep2" src={sline}/>   
      <p className="popularItem" >Popular<b>Breeds</b></p>
      <div className='productBenfit' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consequuntur quisquam rem asperiores voluptatibus in! Corporis expedita nesciunt illum
         quam vero eligendi accusantium libero neque quisquam aperiam iste, .</div>

        <div className="prodmenu">
         <a className="iconname" href="#">
          <div className="icon_round"><img className="chicksicon" src={chicks}/></div>
        <div className="bxaligh" ><p className="chname">Chicks </p>
        <p className='sortMenuInfo'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p></div></a></div>

        <div className="prodmenu"><a className="iconname" href="#">
        <div className="icon_round"><img className="chicksicon" src={tools}/></div>
        <div className="bxaligh" ><p className="chname">Tools </p>
        <p className='sortMenuInfo'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p></div></a></div>

        <div className="prodmenu"><a className="iconname" href="#">
        <div className="icon_round"><img className="chicksicon" src={vaccine}/></div>
        <div className="bxaligh" ><p className="chname">Vaccine </p>
        <p className='sortMenuInfo'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p></div></a></div>

        <div className="prodmenu"><a className="iconname" href="#">
        <div className="icon_round"><img className="chicksicon" src={chickenfeeds}/></div>
        <div className="bxaligh" ><p className="chname">Feeds </p>
        <p className='sortMenuInfo'>Lorem Datepage dolor, sit amet consectetur adipisicing elit. </p></div></a></div>

        <div className="prodmenu"><a className="iconname" href="#">
        <div className="icon_round"><img className="chicksicon" src={learn}/></div>
        <div className="bxaligh" >
          <p className="chname">Learn </p>
          <p className='sortMenuInfo'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
          </div></a></div>

        <div className="prodmenu"><a className="iconname" href="#">
        <div className="icon_round"><img className="chicksicon" src={animal}/></div>
        <div className="bxaligh" ><p className="chname">Animals </p>
        <p className='sortMenuInfo'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p></div></a></div>
      </div>
      <div className="divContainer">
        <div className="prodalign">
          
          <div className="prodsection">
            {renderBroilerItems()}
          </div>
        </div>
      </div>
      </div>
    </>
  );
}


