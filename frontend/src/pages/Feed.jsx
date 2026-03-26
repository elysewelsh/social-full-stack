import { useEffect, useState } from 'react'
import { postClient } from '../clients/api.js'
import Post from '../components/Post.jsx'

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
            {posts.map(post => <Post post={post} key={post._id}/>)}
            

        </div>
    )
}

export default Feed