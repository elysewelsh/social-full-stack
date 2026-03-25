import { useEffect, useState } from 'react'
import { postClient } from '../clients/api.js'

function Feed() {

const [posts, setPosts] = useState([])

useEffect(() => {
    async function getData() {
        try {
// get our posts from database
        const response = await postClient.get('/')
        const posts = response.data
// save that in component's/local state variable
        setPosts(posts)
        }
        catch (err) {
            console.error(err)
            alert(err.message)
        }
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