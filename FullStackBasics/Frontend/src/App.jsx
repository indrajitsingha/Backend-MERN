import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [Joke, setJoke] = useState({})
  const [Loading, setLoading] = useState(false)
  const FeatchJoke = () => {
    setLoading(true)
    fetch("/api/jokes")
      .then((response) => response.json())
      .then((response) => {
        setJoke(response)
        setLoading(false)
      }
      )
  }
  useEffect(() => {
    FeatchJoke()
  }, [])

  const getJoke = () => {
    FeatchJoke()
  }
  console.log(Joke);
  if (Loading)
    return <h1>Loading ....</h1>
  return (
    <>
      {Joke ?
        <>
          <h1>{Joke?.setup}</h1>
          <p>{Joke?.punchline}</p>
        </> :
        <h1>Loading ....</h1>
      }
      <div className="card">
        <button onClick={getJoke} >Get Joke</button>
      </div>

    </>
  )
}

export default App
