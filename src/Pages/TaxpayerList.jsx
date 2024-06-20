import React from "react";
import TaxpayerCard from "../Components/Taxpayers/TaxpayerCard"

const TaxpayerList=({taxpayers}) => {

    const taxpayerCards = taxpayers.map((taxpayer) => <TaxpayerCard key={taxpayer.id} taxpayer={taxpayer}/>)
    

    
    
    return (
        <div>
            <h2>List of Taxpayers</h2>
            <ul className="cards">{taxpayerCards}</ul>
            
        </div>
    )
}

export default TaxpayerList