import React from "react"
import { useState} from "react"
import { useNavigate } from "react-router-dom"

const TaxpayerForm = ({addTaxpayer}) => {


    const [taxpayerForm, setTaxpayerForm ]= useState({
    LastName:"",
    FirstName:"",
    Content:""
  })
    const navigate = useNavigate()
  
 
 
  
  function handleChange(event){
    const newTaxpayer ={
      ...taxpayerForm,
      [event.target.name]: event.target.value
    }
    setTaxpayerForm(newTaxpayer)
  }
    
 

  
  
  function handleSubmit(e) {
    e.preventDefault();
    


    fetch("http://localhost:3000/Taxpayers", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "content-Type": "application/json"
       },
      body: JSON.stringify(taxpayerForm)
    })
      .then(response => response.json())
      .then(addedTaxpayer => {
        addTaxpayer(addedTaxpayer)
        navigate("/Taxpayers")
    })
   

      .catch(error => console.error('Error adding taxpayer:', error));

    

    
    
    
            
    }

    return (
        <div className="new-plant-form">
            <h2>Create Taxpayer</h2>
            <form  onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="LastName">LastName: </label>
                    <input type="text" name="LastName" id="LastName" value={taxpayerForm.LastName} onChange={handleChange} required/>
                </div>
                <div>
                    <label htmlFor="FirstName">FirstName: </label>
                    <input type="text" name="FirstName" id="FirstName" value={taxpayerForm.FirstName} onChange={handleChange} required/>
                </div><br/>
                <div>
                    <label htmlFor="Content">Content: </label>
                    <textarea name="Content" id="Content" cols="30" rows="20" value={taxpayerForm.Content} onChange={handleChange} required/>               
                 </div><br/>
                <button type="submit">Add Taxpayer</button>
            </form>
        </div>
    )
}

export default TaxpayerForm
                    
