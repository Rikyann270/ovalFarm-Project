import React,{useState} from 'react';
import loginacc from './loginacc.module.css'

export default function LoginAccount() {
    const[apiendpoinsError, setApiendpoinsError] = useState([])



    const[logmassage, setLogmassage]=useState()
    
    const handleSubmit = (event) => {
        var errfield=document.getElementById("errfield")
        

        event.preventDefault(); // Prevents the default form submission behavior

        const formData = new FormData(event.target);

        // Convert formData to JSON object
        const jsonObject = {};
        formData.forEach((value, key) => {
            jsonObject[key] = value;
        });
        const jsonData = JSON.stringify(jsonObject);

        // Make POST request to the API endpoint
        fetch('http://localhost:8000/api/account/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonData
        })
        .then(response => {
            if (!response.ok) {
                errfield.innerText="invalid login credentials"
                errfield.style.fontWeight="normal"
                errfield.style.color="crimson"
                throw new Error('invalid login credentials');
                
            }else{
                console.log('login Success')
                errfield.innerText="login success"
                errfield.style.fontWeight="bold"
                errfield.style.color="green"
            }
            return response.json();
        })
        .then(data => {
            // Handle successful response
            // console.log('Success:', data);
            // console.log( data);
            if(localStorage.getItem("auth")){
                console.log("present");
                localStorage.removeItem("auth");
            }

            localStorage.setItem("auth", data.token);
            console.log(localStorage.getItem("auth"))
            console.log(data)

            
            setApiendpoinsError(data)
            // You can perform any further actions here, such as redirecting the user or showing a success message
        })
        .catch(error => {
            // Handle error
            console.error('Error:', error);
            // You can also display an error message to the user
        });
    };


    const renduserErrors=()=>{
        // console.log(apiendpoinsError)
        var apiendErrors=[]
        
        if(apiendpoinsError.email){
            apiendErrors.push(apiendpoinsError.email[0])
        }
        if(apiendpoinsError.phone_number){
            apiendErrors.push(apiendpoinsError.phone_number[0])
        }
        if(apiendpoinsError.username){
            apiendErrors.push(apiendpoinsError.username[0])
            
        }
        if(apiendpoinsError.response=="sucessfuly registered"){
            apiendErrors.push('signup was successful')
        }else{
            apiendErrors.push(apiendpoinsError.response)
        }
        console.log(apiendErrors)
        const errnuber = [];
        // for (let i = 0; i < apiendErrors.length; i++) {
        //     errnuber.push(
        //     <div key={i}>
        //     <p className={occreg.errorValue} >{apiendErrors[i]}</p>

        //     </div>
        // );
        //     }
            return errnuber;
            
    
    }

    return (
        <>
        <div className={loginacc.mainContR}>
            <form onSubmit={handleSubmit}>
                <p className={loginacc.signup}>Login</p>
                
                <p className={loginacc.accinfo} >Accout information</p>
                <p className={loginacc.errfield} id='errfield' >Error feild</p>
                <fieldset className={loginacc.fldset}>
                    <legend>Username:</legend>
                    <input  className={loginacc.ipt} type="text" id="username" name="username" required /><br />
                </fieldset>
                <fieldset className={loginacc.fldset}>
                    <legend>Password:</legend>
                    <input className={loginacc.ipt}  type="password" id="password" name="password" required /><br />
                </fieldset>
                <input className={loginacc.sub_btn} type="submit" value="Login" />
            </form>
            <a href='#' className={loginacc.signupnew}>Sign up</a>
            </div>
        </>
    );
}
