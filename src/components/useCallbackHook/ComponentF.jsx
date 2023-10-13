import { useCallback, useState } from "react"
import Button from "./Button"

function ComponentF() {
    const [count, setCount] = useState(10);
    const [age, setAge] = useState(10);

    const incrementCount = useCallback(() => {
        setCount(count + 1)
    }, [count])

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age])

    return (
        <div>
            <h4>Count - {count}</h4>
            <h4>Age - {age}</h4>
            <Button handleClick={incrementCount}>Increment Count</Button>
            <Button handleClick={incrementAge}>Increment Age </Button>
        </div>
    )
}

export default ComponentF