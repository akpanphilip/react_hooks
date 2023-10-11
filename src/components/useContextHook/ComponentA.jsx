import { useContext } from "react"
import { UserContext } from '../../App'
function ComponentA() {
    const user = useContext(UserContext)
    return (
        <div>
            <i>Example on useContext Hook</i>
            <h2>{user}</h2>
            <hr />
        </div>
    )
}

export default ComponentA