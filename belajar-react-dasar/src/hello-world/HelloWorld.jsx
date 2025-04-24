import './HelloWorld.css';

function HelloWorld() {
    const props = { text: "Hello World" };
    return (
        <div>
            <HeaderHelloWorld {...props} />
            <ParagraphHelloWorld />
        </div>
    )
}

function HeaderHelloWorld({text = "Ups, lupa kasih teks"}) {
    return (
        <h1 className="title"> {text.toUpperCase()}</h1>
    )
}

function ParagraphHelloWorld() {
    const text = "Ini paragraph";
    return (
        <p className='content'>{text.toLocaleLowerCase()}</p>
    )
}

export default HelloWorld;