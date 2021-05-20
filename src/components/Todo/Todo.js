import React from "react"

function Todo({ todo, index, removeTodo }) {
    return (
        <div className="todo">
            {todo.text}
            <>
                <button onClick={() => removeTodo(index)}>x</button>
            </>
        </div>
    );
}

export default Todo