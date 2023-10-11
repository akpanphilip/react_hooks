import { useContext } from "react"
import { UserContext } from '../../App'
function ComponentA() {
    const user = useContext(UserContext)
    return (
        <div>{user} - example on useContext Hook</div>
    )
}

export default ComponentA