import './style.css'
import { Link } from 'react-router'

export function Navbar() {
    return(<>
        <nav>
            <ul>
                <li><Link to="/" id="logo" >Scrum Poker</Link></li>
                <li><Link to="/votation" >votation page</Link></li>
            </ul>
        </nav>
    </>)
}