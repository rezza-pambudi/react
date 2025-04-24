export default function Container({ children }) {
    return (
        <div className="container">
            <h1>Rezza Pambudi</h1>
            {children}
            <footer>&copy; Rezza Pambudi</footer>
        </div>
    )
}