import { useState,useCallback,useEffect,useRef } from 'react'


function App() {
  const [length , setlength] = useState(8)
  const [numberallowed , setnumberallowed] = useState(false)
  const [charallowed , setcharallowed] = useState(false)
  const [Password , setPassword] = useState('')

  //useRef hook

  const passwordRef = useRef(null)

  const Password_generator = useCallback(()=>{
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(numberallowed) str+='0123456789'
    if(charallowed) str+='!@#$%^&*(){}~'

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  },[length,numberallowed,charallowed,setPassword])

const copyPasswordToClickboard = useCallback(() => {
  passwordRef.current?.select();
  // passwordRef.current?.setSelectionRange(0,3)
  window.navigator.clipboard.writeText(Password)
},
[Password])

  useEffect(() => {
    Password_generator()
  } , [length,numberallowed,charallowed,Password_generator])
  
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md roundedlg px-4 text-orange-500  bg-gray-800 '>
    <h1 className='text-white text-center my-3'>
     Password generator
    </h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
    <input
    type='text'
    value={Password}
    className='outline-none w-full py-1 px-3'
    placeholder='password'
    readOnly
    ref={passwordRef}
    />
    <button
    onClick={copyPasswordToClickboard}
     className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
      copy
    </button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
      <input
      type="range"
      min={6}
      max={100}
      value={length}
      className='cursor-pointer'
      onChange={(e) =>{setlength(e.target.value)}}

      />
      <label>Length: {length} </label>

      </div>
      <div className='flex items-center gap-x-1'>
      <input
      type='checkbox'
      defaultChecked={numberallowed}
      id='numberInput'
      onChange={() => {
        setnumberallowed((prev) => !prev)
        }} 
      />
      <label htmlFor='numberInput'> Numbers </label>
      </div>
      <div className='flex items-center gap-x-1'>
      <input
      type='checkbox'
      defaultChecked={charallowed}
      id='CharacterInput'
      onChange={() => {
        setcharallowed((prev) => !prev)
        }} 
      />
      <label htmlFor='CharacterInput'> Characters </label>
      </div>
    </div>
    </div>  
    </>
  )
}

export default App
 