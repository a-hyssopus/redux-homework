import React from "react"
import { useDispatch } from "react-redux"
import { REMOVE_TODO } from "../../store/types"

function Todo({ todo, index }) {
    const dispatch = useDispatch()

    return (
        <div className="todo">
            {todo.text}
            <>
                <button onClick={() => dispatch({ type: REMOVE_TODO, index })}>x</button>
            </>
        </div>
    );
}

export default Todo