import { useEffect, useState } from 'react'
import { postClient } from '../clients/api.js'
// import { useUser } from '../context/UserContext.jsx'

function Feed() {

// bring in setter function from the context
// const { user } = useUser()

const [posts, setPosts] = useState([])

useEffect(() => {
    async function getData() {
        try {
// get our posts from database
        const response = await postClient.get('/')
        const posts = response.data
        setPosts(posts)
        }
        catch (err) {
            console.error(err)
            alert(err.message)
        }


// save that in component's/local state variable
    }
    getData()
}, [])

    return (
        <div>
            <h1>Feed Page</h1>
            <ul>
                {posts.map(post => 
                    <li key={post._id}>
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Feed