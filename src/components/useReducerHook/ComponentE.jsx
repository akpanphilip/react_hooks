/* eslint-disable no-unused-vars */
import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                error: 'Something went wrong!'
            }
        default:
            return state
    }
}

function ComponentE() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/1`)
            .then(response => {
                dispatch({ type: 'FETCH_SUCCESS', payload: response.data })
            })
            .catch(error => {
                dispatch({ type: 'FETCH_ERROR' })
            })
    }, [])
    return (
        <div>
            <i>Fetching data with useReducer and useEffect</i>
            <h3>{state.loading ? 'Loading' : state.post.title}</h3>
            {state.error ? state.error : null}
        </div>
    )
}

export default ComponentE