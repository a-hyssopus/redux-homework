import React from "react"
import { useDispatch } from "react-redux";
import { ADD_TODO } from "../../store/types";

function TodoForm() {
    const [value, setValue] = React.useState("");
    const dispatch = useDispatch()

    const handleSubmit = event => {
        event.preventDefault();
        if (!value) return;
        dispatch({ type: ADD_TODO, text: value });
        setValue("");
    };

    return (

        <div className="inputField">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="input"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default TodoForm