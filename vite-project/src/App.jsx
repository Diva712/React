import { useState } from "react"


function App() {
  let [counter, setCounter] = useState(15)
  //let counter = 5

  const addValue = () => {
    //counter = counter + 1
    setCounter(counter + 1)
  }
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Diva Gupta</h1>
      <h3>Couter Value : {counter} </h3>
      <button
        onClick={addValue}
      >Add Value</button>
      <br />
      <button
        onClick={removeValue}
      >Remove Value</button>
    </>
  )
}

export default App
