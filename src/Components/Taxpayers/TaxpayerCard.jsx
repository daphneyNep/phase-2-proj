import React from "react"

const TaxpayerCard = ({ taxpayer: {LastName, FirstName, Content}}) => {
  

  

    return (
      <li>
        <p>{LastName}</p>
        <p>{FirstName}</p>
        <p>{Content}</p>
      </li>
    )
}

export default TaxpayerCard
       