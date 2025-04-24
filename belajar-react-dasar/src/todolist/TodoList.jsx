import Todo from "./todo";

export default function TodoList() {
    return (
        <ul>
            <Todo text="Belajar React" isCompleted={true} />
            <Todo text="Belajar Javascript" isCompleted={false} />
            <Todo text="Belajar NodeJS" isCompleted={false} /> 
            <Todo text="Belajar ExpressJS" isCompleted={false} /> 
        </ul>
    )
}