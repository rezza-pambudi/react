import { useEffect, useState } from "react"

const test = () => {
    const [count, setCount] = useState(1)
    const [article, setArticle] = useState("")

    useEffect(() => {
        fetch('https://dummyjson.com/posts/' + count).then((res) => res.json()).then((data) => setArticle(data))  
    }, [count])


    function prevPage() {
        setCount(count - 1)
    }

    function nextPage() {
        setCount(count + 1)
    }

    return (
        <>
        <header>
            <h1>{count}</h1>
        </header>
        <button onClick={prevPage}>Prev Page</button>
        <button onClick={nextPage}>Next Page</button>
        <article>    
            <h3>{article.title}</h3>
            <p>{article.body}</p>
        </article>
        </>
    )
}

export default test