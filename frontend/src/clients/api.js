import axios from 'axios'

let token = localStorage.getItem('token')

export const userClient = axios.create({
    baseURL: 'http://localhost:3000/api/users'
})

export const postClient = axios.create({
    baseURL: 'http://localhost:3000/api/posts',
    headers: {
        Authorization: `Bearer ${token}`
    }
})