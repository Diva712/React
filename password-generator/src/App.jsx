import { useCallback, useEffect, useRef, useState } from "react"



function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState()

  //ref hook
  const passwordRef = useRef(null)




  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrestuvwxyz"

    if (numberAllowed) {
      str = str + "0123456789"
    }
    if (characterAllowed) {
      str = str + "!@#$%^&*()[]{}~`+=-|"
    }
    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass = pass + str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, characterAllowed, setPassword]) //setpassword ko yha pr likha bs simply optimization karna hai 



  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 20)
    window.navigator.clipboard.writeText(password)
  }, [password])


  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700 m-auto">
        <h1 className="text-white text-center">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 mt-3">
          <input type="text" value={password} className="outline-none w-full py-1 px-3" placeholder="password" readOnly ref={passwordRef} />
          <button className="outline-none bg-blue-700 text-white
          px-3 py-1 shrink-0 hover:bg-white hover:text-blue-700 hover:border hover:border-blue-700" onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div className="flex text-sm gap-x-3">
          <div className="flex items-center gap-x-1">
            <input type="range" min={5} max={20} value={length} className="cursor-pointer"
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label >Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={() => {
              setNumberAllowed((prev) => !prev)
            }} />
            <label htmlFor="numberInput">Numbers</label>
            <input type="checkbox" defaultChecked={characterAllowed} id="characterInput" onChange={() => {
              setCharacterAllowed((prev) => !prev)
            }} />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
