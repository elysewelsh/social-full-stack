import { Link } from 'react-router-dom'
import { useUser } from '../context/UserContext.jsx'

function Navbar() {

const { user, logout } = useUser()
// bring in user info from context
    return (
        <nav>
            { user && 
            <h1>Welcome, {user.username}!</h1>
            }
            <ul>
                {user ?
                <>
                <li><Link to="/feed">Feed</Link></li>
                <li onClick={logout}><Link to="/login">Logout</Link></li>
                </>
                :
                <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                </>
            }
            </ul>
        </nav>
    )
}

export default Navbar