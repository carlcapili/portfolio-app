'use client'
import { useState } from 'react'
export default function Try() {
  const [text, setText] = useState(false)

  const handleText = () => console.log('im clicked')
  handleText(!text)
  return (
    <div>
      <button onClick={handleText}> clicked me </button>
      <h1 className={text ? 'hi' : 'hello'}>hi</h1>
    </div>
  )
}
