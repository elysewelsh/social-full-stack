import { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { token } from '../clients/api.js'

const UserContext = createContext(null)

// custom provider to wrap the app
function UserProvider({ children }) {

    const [user, setUser] = useState(null)

    const navigate = useNavigate()

    useEffect(() => {

        async function getUser() {
// check if there's a token (if none, skip these steps)
            if (!token()) return
// if token exists, use token to verify the user (valid token check/expired)
            
// if verified, save user data to state

// if verification fails, log user out
        }
        // getUser()
    },[])

    const logout = () => {
        //clear the user/state
        setUser(null)

        //clear the localStorage
        localStorage.removeItem("token")

        //navigate user to login page
        navigate('/login')
    }

    const value = {
        user,
        setUser,
        logout
    }

    return (
    <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
    )
}

// custom hook to easily access context value
export function useUser() {
    return useContext(UserContext)
}

export default UserProvider