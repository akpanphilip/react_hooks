import { useState } from "react"

function ComponentG() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <i>Example on UseState Hook</i> <br />
            {count} <br />
            <button onClick={() => { setCount(count + 1) }}>+</button>
            <button onClick={() => { setCount(0) }}>reset</button>
            <button onClick={() => { setCount(count - 1) }}>-</button>
        </div>
    )
}

export default ComponentG