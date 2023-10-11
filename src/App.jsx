import React from "react"
import ComponentA from "./components/useContextHook/ComponentA"
import ComponentB from "./components/useReducerHook/ComponentB"

export const UserContext = React.createContext()
function App() {
  return (
    <>
      <UserContext.Provider value={'John Doe'}>
        <h1>Welcome to React Hook Tutorial</h1>
        <ComponentA />
        <br />
        <ComponentB />
      </UserContext.Provider>
    </>
  )
}

export default App
