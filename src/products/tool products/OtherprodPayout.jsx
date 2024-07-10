import React, { useState,useEffect  } from 'react';
import { useParams } from 'react-router-dom';

import othsyl from "./OtherprodPayout.module.css"
import loadingBallings from "../../products/icons/loading-balls.gif"




export default function OtherprodPayout(){
    const { data } = useParams();

    const [dbname, setDbname] = useState();
    const [dbprice, setDbprice] = useState();
    const [dbimage, setDbimage] = useState();
    const [useamout , setUseamout] = useState(1);

    
    var datafrmt =data.replace("@", "/")


    useEffect(() => {
        fetch('https://oval-backend-production.up.railway.app/api/chicken/'+datafrmt+'/')
        .then((response) => response.json())
        .then((data) => {
          
            const names = data.name;
            const prices = parseInt(data.price);
            const images = "http://127.0.0.1:8000"+data.Image;
            console.log("The image z.......:",data.Image)
    
            setDbname(names)
            setDbprice(prices)
            setDbimage(images)
        
        });
      }, []);

    const delyfn=()=>{

    // product fetching

        const  hwmany = document.getElementById("hwmany")
        const  itemNumb = document.getElementById("itemNumb")
        const  legendQuant = document.getElementById("legendQuant")
        const  mainCont = document.getElementById("mainCont");  
        const  botomimg = document.getElementById("botomimg");  


        
        

        hwmany.addEventListener("click",()=>{
            itemNumb.style.display="unset"
            hwmany.style.display="none"
            legendQuant.style.display="unset"
        })
    }
    
    setTimeout( delyfn, 500)

    const[apiendpoinsError, setApiendpoinsError] = useState()

    const handleSubmit = (event) => {
        const masge_cont= document.getElementById("masge_cont")
        masge_cont.style.display="flex"
        event.preventDefault(); // Prevents the default form submission behavior

        const formData = new FormData(event.target);

        // Convert formData to JSON object
        const jsonObject = {};
        formData.forEach((value, key) => {
            jsonObject[key] = value;
        });
        const jsonData = JSON.stringify(jsonObject);

        // Make POST request to the API endpoint
        fetch('https://oval-backend-production.up.railway.app/api/records/create', {
            method: 'POST',
            headers: {
                'Authorization': 'Token '+localStorage.getItem("auth"),
                'Content-Type': 'application/json'
            },
            body: jsonData
        })

        .then(response => {
            if(response.status==201){
                setApiendpoinsError("Order successful, we will contact you shortly")
                const  itemname = document.getElementById("buy");  
                // itemname.innerText="Ordered";
                document.getElementById("loadingballs").style.display="none"
            }else{
                setApiendpoinsError("an error was detacted please order again")
                if (response.status==401){
                    var unauth_err1 = document.getElementById("unauth_err1");
                    var unauth_err2 = document.getElementById("unauth_err2");
                    
          
                    unauth_err1.style.display="flex"
                    unauth_err2.style.display="flex"
                    document.getElementById("loadingballs").style.display="none"
                    setApiendpoinsError("We use the account credentials to contact you.")
                }

            }
            if (!response.ok) {
                throw new Error('Network response was not ok');
    
                
            }
            return response.json();
        })

        
        .then(data => {
            // Handle successful response
            console.log('Success:', data);
            // You can perform any further actions here, such as redirecting the user or showing a success message
        })
        .catch(error => {
            // Handle error
            console.error('Error:', error);
            // You can also display an error message to the user
        });
        console.log(apiendpoinsError)

    };

        

    return( 
        <>
        
        <div className={othsyl.mainCont} id="mainCont">
            <div className={othsyl.rightsideCont}>
                <div className={othsyl.vrSep}></div>
            <img className={othsyl.productimage} src={dbimage}/>
            </div>
            <p className={othsyl.prodname} id="itemname">{dbname}</p>
            <form onSubmit={handleSubmit} >

                <button type="submit" id='buy' className={othsyl.buy}>Confirm</button>
                <div className={othsyl.infoSec}>
                <p className={othsyl.moinfo}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laboriosam voluptatem commodi.</p>
                
                <fieldset className={othsyl.qantiCoField} >
                    <p className={othsyl.legendQuant} id="legendQuant" >quantity</p>
                    <label htmlFor="itemNumb" id="hwmany" className={othsyl.hwmany}>How many</label>
                <input id="itemNumb" defaultValue={useamout} min={1}
                onChange={(e)=> setUseamout(e.target.value)}
                name="quantity"
                required
                className={othsyl.itemNumb} type="number"/>
                </fieldset>
                
                
                <p className={othsyl.initalCost}>{dbprice}</p>
                <div className={othsyl.totCont}>
                    <p>Subtotal</p>
                    <p className={othsyl.tot} >{"Ugx "+useamout*dbprice}</p>
                    
                </div>
                </div>
                <div className={othsyl.sub_in}>
                
                <input  type="text" defaultValue={"order"} name="title" /><br />
                <input  type="text" defaultValue={dbname} name="item_name"  /><br />
                <input  type="number" defaultValue={dbprice} name="inital_price"/><br />
                <input  type="number" defaultValue={0} name="total_price" /><br />
                </div>
            </form>
            <div className={othsyl.masge_cont} id="masge_cont" >
          <img className={othsyl.pending_item} id="loadingballs" src={loadingBallings}/>
            <div className={othsyl.order_SubCont} ><p >{apiendpoinsError}</p></div>
            <div className={othsyl.unauth_err} id='unauth_err1' ><a href='/account/register'>SignUp</a></div>
            <div className={othsyl.unauth_err} id='unauth_err2' ><a href='/account/login'>Login</a></div>
          </div>
  
        </div>
            


        
        </>
    )
}