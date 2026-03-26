import { useEffect, useState } from 'react'
import { postClient } from '../clients/api.js'
import Post from '../components/Post.jsx'

function Feed() {

const [posts, setPosts] = useState([])

const [title, setTitle] = useState('')

const [body, setBody] = useState('')

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

const handleSubmit = async (e) => {
    e.preventDefault()
    try {
// make a post request to create the post based off the state (title, body)
        const { data } = await postClient.post('/', { title, body })

// add the new post to the state
        setPosts([...posts, data])
// reset the form
        setTitle('')
        setBody('')
    }
    catch (err) {
        console.error(err)
    }
}

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Leave a Post Here</h2>
                <label htmlFor="title">Title:</label>
                <input 
                    type="text" 
                    id="body"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required={true}>
                </input>
                <label htmlFor="body">Body:</label>
                <textarea
                    type="text"
                    id="body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required={true}>
                </textarea>
                <button>Submit</button>
            </form>
            <h1>Feed Page</h1>
            {posts.map(post => <Post post={post} key={post._id}/>)}
        </div>
    )
}

export default Feed