import Todo from "./todo";

export default function TodoList() {
    const data = [
        {
            id: 0,
            text: "Belajar React",
            isCompleted: true
        },
        {
            id: 1,
            text: "Belajar React Native",
            isCompleted: false
        },
        {
            id: 2,
            text: "Belajar Vue",
            isCompleted: true
        },
        {
            id: 3,
            text: "Belajar Svelte",
            isCompleted: false
        }
    ]
    
    return (
        <ul>
            {data.map((todo) => (
                <Todo key={todo.id} {...todo} />
            ))}
        </ul>
    )
}