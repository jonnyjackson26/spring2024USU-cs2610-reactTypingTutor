import { useState } from 'react'
import { Phrase } from "./components/Phrase"
import { Keyboard } from "./components/Keyboard"

function App() {
  const phrases = ["jOnny Jackson", "hello this is a test", "CaptiAL LETTERS", "coding is both a practical skill and a creative outlet for building innovative solutions."];
  const [nextKeyToType, setNextKeyToType] = useState(phrases[0].charAt(0));


  return (
    <>
      <main class='content'>
        <Phrase setNextKeyToType={setNextKeyToType} phrases={phrases} />
        <Keyboard nextKeyToType={nextKeyToType} />
      </main>
    </>
  )
}

export default App