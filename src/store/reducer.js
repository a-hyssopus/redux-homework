import {ADD_TODO, DISPLAY_POSTS, REMOVE_TODO} from "./types"

export const initialState = {
    todos: [],
    posts: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            const newTodos = [...state.todos, {text: action.text}]
            return {
                ...state,
                todos: newTodos
            }
        }
        case REMOVE_TODO: {
            const newTodos = [...state.todos]
            newTodos.splice(action.index, 1)
            return {
                ...state,
                todos: newTodos
            }
        }
        case DISPLAY_POSTS: {
            return {
                ...state,
                posts: action.posts
            }
        }
        default:
            return state
    }
}