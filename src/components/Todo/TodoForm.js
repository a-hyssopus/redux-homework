import React from "react";

function TodoForm({ addTodo }) {
    const [value, setValue] = React.useState("");

    const handleSubmit = event => {
        event.preventDefault();
        if (!value) return;
        addTodo(value);
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