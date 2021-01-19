import React  from 'react'
import { Link }from 'react-router-dom'

function Navbar() {

    const Navbarstyle = {
        color: 'white'
    }
    return (
        <nav>
            <h3>Team C1</h3>
            <ul className="nav-links">
                <Link style={Navbarstyle} to="/charachters">
                    <li>Charachters</li>
                </Link>
                <Link style={Navbarstyle} to="/episodes">
                    <li>Episodes</li>
                </Link>
                <Link style={Navbarstyle } to="/locations">
                    <li>Locations</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar
