import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <ul>
            <li><Link to="/">Header</Link></li>
            <li><Link to="/Taxpayer-New">Create Taxpayer</Link></li>
            <li><Link to="/Taxpayers">List of Taxpayers</Link></li>
        </ul>
    )
}

export default Navbar
            

