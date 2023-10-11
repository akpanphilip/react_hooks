import { useReducer } from "react"

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state;
    }
}
function ComponentB() {

    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <i>Example on useReducer working with simple state and action</i>
            <h2>Count = {count}</h2>
            <button onClick={() => dispatch('increment')}>+</button>
            <button onClick={() => dispatch('reset')}>reset</button>
            <button onClick={() => dispatch('decrement')}>-</button>
            <hr />
        </div>
    )
}

export default ComponentB