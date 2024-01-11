import React, { useState } from 'react';
//style
import "./products.css";
//images
import broilerimage from "./images/broiler.jpg"
import kuroilaimage from "./images/kuroila.jpg"
import layerimage from "./images/layer1.jpg"
import sassoimage from "./images/sasso1.jpg"
//icons
import tools from "./icons/tools.png"
import chickenfeeds from "./icons/chickenfeeds.png"
import vaccine from "./icons/vaccine.png"
import chicks from "./icons/chicks.png"
import learn from "./icons/Learn.png"
import animal from "./icons/animal.png"



export default function Chickspage() {
  const [broilerCount, setBroilerCount] = useState(4); // Adjust the count based on your requirements
  const itemname= ["Broiler","Kuroiler", "Layer","Sasso"]
  const renderBroilerItems = () => {
    const broilerItems = [];
    for (let i = 0; i < broilerCount; i++) {
      broilerItems.push(
        <div className="item1" id={"item"+i} key={i}>
          <div className="itreadmdiv"><a href="" className="itreadm">Read more</a></div>
          <div className="itordermdiv"><a href="#" className="itorderm">Order</a></div>
          <p className="prodit">{itemname[i]}</p>
        </div>
      );
       let backset = ()=>{
    		const item0n = document.getElementById("item0")
        const item1n = document.getElementById("item1")
        const item2n = document.getElementById("item2")
        const item3n = document.getElementById("item3")
    		if(item1n){
    			console.log("yes element available")
    			item0n.style.backgroundImage="url"+"("+broilerimage+")"
          item1n.style.backgroundImage="url"+"("+kuroilaimage+")"
          item2n.style.backgroundImage="url"+"("+layerimage+")"
          item3n.style.backgroundImage="url"+"("+sassoimage+")"
    		}else{window.location.reload(true)}

    		
    		
    	}
    	
    	
    	setTimeout(backset, 100)
    }
    return broilerItems;
  };

  return (
    <>
      <div className="main_cont">
        <div className="prodmenu">
         <a className="iconname" href="#"><img className="chicksicon" src={chicks}/>
        <div className="bxaligh" ><p className="chname">Chicks </p></div></a></div>
        <div className="prodmenu"><a className="iconname" href="#"><img className="chicksicon" src={tools}/>
        <div className="bxaligh" ><p className="chname">Tools </p></div></a></div>
        <div className="prodmenu"><a className="iconname" href="#"><img className="chicksicon" src={vaccine}/>
        <div className="bxaligh" ><p className="chname">Vaccine </p></div></a></div>
        <div className="prodmenu"><a className="iconname" href="#"><img className="chicksicon" src={chickenfeeds}/>
        <div className="bxaligh" ><p className="chname">Feeds </p></div></a></div>
        <div className="prodmenu"><a className="iconname" href="#"><img className="chicksicon" src={learn}/>
        <div className="bxaligh" ><p className="chname">Learn </p></div></a></div>
        <div className="prodmenu"><a className="iconname" href="#"><img className="chicksicon" src={animal}/>
        <div className="bxaligh" ><p className="chname">Animals </p></div></a></div>
      </div>
      <div className="divContainer">
        <div className="prodalign">
          <div className="prodsection">
            {renderBroilerItems()}
          </div>
        </div>
      </div>
    </>
  );
}


