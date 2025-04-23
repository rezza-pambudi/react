function HelloWorld() {
    return (
        <div>
            <HeaderHelloWorld text="Hello World" />
            <ParagraphHelloWorld />
        </div>
    )
}

function HeaderHelloWorld({text = "Ups, lupa kasih teks"}) {
    return (
        <h1 style={{ color: "blue", backgroundColor: "aqua" }}>{text.toUpperCase()}</h1>
    )
}

function ParagraphHelloWorld() {
    const text = "Ini paragraph";
    const style = { color: "red", backgroundColor: "yellow" };
    return (
        <p style={style}>{text.toLocaleLowerCase()}</p>
    )
}

export default HelloWorld;