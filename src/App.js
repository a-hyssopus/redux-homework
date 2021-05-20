import React from "react"
import "./App.css"
import Todo from "./components/Todo/Todo"
import TodoForm from "./components/Todo/TodoForm"

function App() {
    const [todos, setTodos] = React.useState([]);

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div className="app">
            <div className="todo-list">
                <TodoForm addTodo={addTodo} />
                {todos.map((todo, index) => (
                    <Todo
                        key={index}
                        index={index}
                        todo={todo}
                        removeTodo={removeTodo}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;