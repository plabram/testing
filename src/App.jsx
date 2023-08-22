import { useState } from 'react'

import './App.css'

function App() {
  const [text, setText] = useState("")
  const handleInput = (e) => setText(e.target.value)

  return (
    <>
      <img
        data-testid="hello"
        alt="giphy"
        width="200px"
        src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*t7lx34vYoJ8lAeNU6un7_g.jpeg"
      />
      <div>
        <input
          type="text"
          onChange={handleInput}
          placeholder="Type your name" />
        <h1>hello
          {text}
        </h1>
      </div>
    </>
  )
}

export default App
