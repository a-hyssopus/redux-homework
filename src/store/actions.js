import { getPost } from "../getPosts";
import { DISPLAY_POSTS } from "./types";

const displayPost = posts => {
    return {
        type: DISPLAY_POSTS,
        posts
    }
}

export const requestPost = () => {
    return (dispatch) => {
        return getPost()
            .then(response => response.json())
            .then(posts => dispatch(displayPost(posts.title)))
    }
}