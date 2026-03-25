import { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UserContext = createContext(null)

// custom provider to wrap the app
export function UserProvider({ children }) {

    const [user, setUser] = useState(null)

    const navigate = useNavigate()

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