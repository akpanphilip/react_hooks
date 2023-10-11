import { useContext } from "react"
import { CountContext } from "../../App"
function ComponentC() {
    const countContext = useContext(CountContext)
    return (
        <div>
            <h2>Count value: {countContext.countState}</h2>
            <button onClick={() => countContext.countDispatch('increment')}>+</button>
            <button onClick={() => countContext.countDispatch('reset')}>reset</button>
            <button onClick={() => countContext.countDispatch('decrement')}>-</button>
        </div>
    )
}

export default ComponentC 