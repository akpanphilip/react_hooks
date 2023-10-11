import React from "react"
import ComponentA from "./components/useContextHook/ComponentA"

export const UserContext = React.createContext()
function App() {
  return (
    <>
      <UserContext.Provider value={'John Doe'}>
        <h1>Welcome to React Hook Tutorial</h1>
        <ComponentA />
      </UserContext.Provider>
    </>
  )
}

export default App
