import React from "react";
import TaxpayerForm from "./TaxpayerForm";
import TaxpayerList from "./TaxpayerList";
import Search from "./Search";




const TaxpayerPage = (taxpayers, setTerm, term, addTaxpayer) => {

    return (
        <div>
            <TaxpayerForm addTaxpayer={addTaxpayer}/>
            <Search setTerm={setTerm} term={term}/>
            <TaxpayerList taxpayers={taxpayers}/>
        </div>
    )
}

export default TaxpayerPage