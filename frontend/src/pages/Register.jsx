import { useState } from 'react'

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

    return (
        <div>
            <h1>Register Page</h1>
        <form>
            <label htmlFor="username">username:</label>
            <input value={form.username} id="username" name="username" type="text" required />
            
            <label htmlFor="email">email:</label>
            <input value={form.email} id="email" name="email" type="text" required />
            
            <label htmlFor="password">password:</label>
            <input value={form.password} id="password" name="password" type="text" required />

            <button>Register</button>
        </form>
        </div>
    )
}

export default Register