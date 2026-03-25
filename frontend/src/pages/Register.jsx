import { useState } from 'react'
import { userClient } from '../clients/api.js'

function Register() {

    const [form, setForm] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(form)

        
        try {
// send form data to our backend
            const { data } = await userClient.post('/register', form)
            console.log(data)
// take the token and store it locally in localStorage
            localStorage.setItem("token", data.token)
        }
        catch (err) {
            console.error(err)
            alert(err.message)
        }
        

        

        // save some user data in our state

        // take the user to a different page
    }

    return (
        <div>
            <h1>Register Page</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">username:</label>
                <input 
                    value={form.username}
                    onChange={handleChange}
                    id="username"
                    name="username"
                    type="text"
                    required
                />
                
                <label htmlFor="email">email:</label>
                <input
                    value={form.email}
                    onChange={handleChange}
                    id="email"
                    name="email"
                    type="text"
                    required 
                />
                
                <label htmlFor="password">password:</label>
                <input
                    value={form.password}
                    onChange={handleChange}
                    id="password"
                    name="password"
                    type="password"
                    required
                />

                <button>Register</button>
            </form>
        </div>
    )
}

export default Register