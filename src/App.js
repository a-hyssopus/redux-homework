import React, { useEffect } from "react"
import "./App.css"
import Todo from "./components/Todo/Todo"
import TodoForm from "./components/Todo/TodoForm"
import { useDispatch, useSelector } from "react-redux";
import { requestPost } from "./store/actions";

function App() {
    const todos = useSelector(state => state.todos)
    const post = useSelector(state => state.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(requestPost())
    }, [])

    return (
        <div className="app">
            <div className="todo-list">
                <TodoForm/>
                {todos.map((todo, index) => (
                    <Todo
                        key={index}
                        index={index}
                        todo={todo}
                    />
                ))}
                <p className="post">{post}</p>
            </div>
        </div>
    );
}

export default App;