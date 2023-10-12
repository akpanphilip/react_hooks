/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import axios from 'axios';

function ComponentD() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
            .then(response => {
                setLoading(false)
                setPost(response.data)
                setError('')
            })
            .catch(error => {
                setLoading(false)
                setPost({})
                setError('Something went wrong!')
            })
    }, [])

    return (
        <div>
            <i>Fetching data with useState and useEffect</i>
            <h3>{loading ? 'Loading' : post.title}</h3>
            {error ? error : null}
        </div>
    )
}

export default ComponentD