import { useEffect, useState } from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./Components/Navigation/Navbar"
import TaxpayerForm from "./Pages/TaxpayerForm"
import TaxpayerList from "./Pages/TaxpayerList"
import Headers from "./Pages/Headers"



function App() {
  const [taxpayers, setTaxpayers] = useState([]) 
  const [term, setTerm]= useState("")


  function addTaxpayer(taxpayer){
    setTaxpayers([...taxpayers,taxpayer])
  }


  useEffect(() => {
    fetch("http://localhost:3000/Taxpayers")
      .then(response => response.json())
      .then(data => setTaxpayers(data))
      .catch(error => console.error('Error fetching taxpayers:', error));
  }, [])

  const viewedTaxpayers = taxpayers.filter((taxpayer) => taxpayer.LastName.toLowerCase().includes(term.toLowerCase()))
      
  

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Headers ContentType="application/json"/>}/>
        <Route path="/Taxpayer-New" element={<TaxpayerForm addTaxpayer={addTaxpayer} taxpayers={viewedTaxpayers} setTerm={setTerm} term={term}/>}/>
        <Route path="/Taxpayers" element={<TaxpayerList taxpayers={taxpayers} />}/>
      </Routes>
    </Router>
  )
}

export default App

