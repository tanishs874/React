
import Chai from "./chai"


function App() {
  const username = "tanish sharma"
  return (
    <>
      <Chai/>
      <h5>Chai aur react {username}</h5> 
      {/* {username} this is called evaluated expression */}
      <p> Tanish sharma</p>
    </>
  )
}

export default App
