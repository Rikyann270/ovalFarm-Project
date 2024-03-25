import React,{useState} from 'react';
import occreg from './accReg.module.css'

export default function RegisterAccount() {
    const[apiendpoinsError, setApiendpoinsError] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents the default form submission behavior
        var errorfieldCont=document.getElementById("errorfieldCont")
        errorfieldCont.style.display="flex"

        const formData = new FormData(event.target);

        // Convert formData to JSON object
        const jsonObject = {};
        formData.forEach((value, key) => {
            jsonObject[key] = value;
        });
        const jsonData = JSON.stringify(jsonObject);

        // Make POST request to the API endpoint
        fetch('http://localhost:8000/api/account/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Handle successful response
            // console.log('Success:', data);
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
        console.log(apiendErrors.length)
        const errnuber = [];
        for (let i = 0; i < apiendErrors.length; i++) {
            errnuber.push(
            <div key={i}>
            <p className={occreg.errorValue} >{apiendErrors[i]}</p>

            </div>
        );
            }
            return errnuber;
            
    
    }

    return (
        <>
            <div className={occreg.mainContR}>
                <div className={occreg.errorfieldCont} id='errorfieldCont'>
                   
                    {renduserErrors()}
                </div>
                <form onSubmit={handleSubmit}>
                    <p className={occreg.signup}>SignUp</p>
                    <p className={occreg.enterinfohere}>Enter your information to create an account</p>
                    <p className={occreg.accinfo}>Account information</p>
                    <fieldset className={occreg.fldset}>
                        <legend>Email:</legend>
                        <input className={occreg.ipt}
                            placeholder='Richards203@gmail.com'
                            type="email" id="email" name="email" required /><br />
                    </fieldset>
                    <fieldset className={occreg.fldset}>
                        <legend>Username:</legend>
                        <input className={occreg.ipt} type="text" id="username" name="username" required /><br />
                    </fieldset>
                    <fieldset className={occreg.fldset}>
                        <legend>Phone Number:</legend>
                        <input className={occreg.ipt} type="number" id="phone" name="phone_number" required /><br />
                    </fieldset>
                    <fieldset className={occreg.fldset}>
                        <legend>Password:</legend>
                        <input className={occreg.ipt} type="password" id="password" name="password" required /><br />
                    </fieldset>
                    <input className={occreg.sub_btn} type="submit" value="Submit" />
                </form>
            </div>
        </>
    );
}
