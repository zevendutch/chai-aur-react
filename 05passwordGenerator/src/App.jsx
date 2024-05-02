import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App()
{
  const [len, setLen] = useState(8)
  const [num, setNum] = useState(false)
  const [char, setChar] = useState(false)
  const [pass, setPass] = useState('')

  //useRef
  const passwordRef = useRef(null)

  const passGen = useCallback(
    () =>
    {
      let pass = ''
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if (num) str += "0123456789"
      if (char) str += "~!@#$%^&*(){}<>?_+-:|/"

      for (let i = 1; i <= len; i++)
      {
        let charword = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(charword)
      }

      setPass(pass)
    },
    [len, num, char, setPass],
  )

  useEffect(() => { passGen() }, [len, num, char, passGen])

  const copyPass = useCallback(() =>
  {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(pass)
  }, [pass])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-4xl text-center my-3 mb-4'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={pass} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={passwordRef} />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPass}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1 px-1'>
            <input
              type="range"
              min={6}
              max={16}
              value={len}
              className='cursor-pointer'
              onChange={(e) => { setLen(e.target.value) }}
            />
            <label>Length: {len}</label>
          </div>
          <div className="flex items-center gap-x-1 px-2">
            <input
              type="checkbox"
              defaultChecked={num}
              id="numberInput"
              onChange={() =>
              {
                setNum((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={char}
              id="characterInput"
              onChange={() =>
              {
                setChar((prev) => !prev)
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
