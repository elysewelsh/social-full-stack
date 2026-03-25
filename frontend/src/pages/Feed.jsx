import { useEffect } from 'react'
import { postClient } from '../clients/api.js'

function Feed() {

useEffect(() => {
    async function getData() {
        try {
// get our posts from database
        const response = await postClient.get('/')
        console.log(response.data)
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
            Feed Page
        </div>
    )
}

export default Feed