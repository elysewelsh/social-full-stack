import { Link } from 'react-router-dom'
import { useUser } from '../context/UserContext.jsx'

function Navbar() {
// bring in user info from context
const { user } = useUser()
    return (
        <nav>
            { user && 
            <h1>Welcome, {user.username}!</h1>
            }
            <ul>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/feed">Feed</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar