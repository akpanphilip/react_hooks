import React, { useReducer } from "react"
import ComponentA from "./components/useContextHook/ComponentA"
import ComponentB from "./components/useReducerHook/ComponentB"
import ComponentC from "./components/useReducerHook/ComponentC"
import ComponentD from "./components/useReducerHook/ComponentD"
import ComponentE from "./components/useReducerHook/ComponentE"
import ComponentF from "./components/useCallbackHook/ComponentF"
import ComponentG from "./components/useStateHook/ComponentG"

export const UserContext = React.createContext()
export const CountContext = React.createContext()

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
function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <UserContext.Provider value={'John Doe'}>
        <h1>Welcome to React Hook Tutorial</h1>
        <ComponentA />
        <br />
        <ComponentB />
        <br />
        <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
          <ComponentC />
        </CountContext.Provider>
        <hr />
        <ComponentD />
        <hr />
        <ComponentE />
        <hr />
        <ComponentF />
        <hr />
        <ComponentG />
      </UserContext.Provider>
    </>
  )
}

export default App
