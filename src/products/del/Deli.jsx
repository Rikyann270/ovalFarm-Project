import React,{useState} from "react";

export default function Deli(){
    const[apiendpoinsError, setApiendpoinsError] = useState([])

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
        fetch('https://oval-backend-production.up.railway.app/api/records/create', {
            method: 'POST',
            headers: {
                'Authorization': 'Token 2aa19c0ba25b0a22a94a31d55543711a7c86fc30',
                'Content-Type': 'application/json'
            },
            body: jsonData
        })
        .then(response => {
            if(response.status==201){
                console.log("yess")
                setApiendpoinsError("Order placed")
            }else{
                setApiendpoinsError("an error was detacted please order again")

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
    };




    return (
        <>
        <p>{apiendpoinsError}</p>
        <form onSubmit={handleSubmit}>
        <input  type="submit" value="Submit" />
        
            <legend>title:</legend>
            <input  type="text" id="email" value={"order"} name="title" /><br />
        
        
            <legend>item_name:</legend>
            {/* <input  type="text" id="username" name="item_name" required /><br /> */}

            <legend>inital_price:</legend>
            {/* <input  type="number" id="phone" name="inital_price" required /><br /> */}
        
        
            <legend>quantity</legend>
            {/* <input  type="number" name="quantity" required /><br /> */}
            {/* <legend>Total price</legend> */}
            {/* <input  type="number"  value={0} name="total_price" /><br /> */}
        
        
        </form>

        </>
    );
}
