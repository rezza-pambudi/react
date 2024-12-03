import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(1)
  const [article, setArticle] = useState("")

  function nextPage() {
    setCount(count + 1)
  }

  function prevPage() {
    setCount(count - 1)
  }

  useEffect(() => {
    fetch('https://dummyjson.com/posts/' + count)
      .then((response) => response.json())
      .then((data) => setArticle(data))
  }, [count])

  return (
    <>
      <main>
        <header>
          <p>{count}</p>
        </header>
        <button onClick={nextPage}>Next Page</button>
        <button onClick={prevPage}>Previous Page</button>
        <article>
          <h3>{article.title}</h3>
          <p>{article.body}</p>
        </article>
      </main>
    </>
  )
}

export default App
