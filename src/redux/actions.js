import { CREATE_POST, FETCH_POSTS, HIDE_LOADER, SHOW_LOADER } from "./types";

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    }
}

export function fetchPosts() {
    return async dispatch => {
        dispatch({ type: SHOW_LOADER });

        const responce = await fetch(
            'https://jsonplaceholder.typicode.com/posts?_limit=5',
        );
        const json = await responce.json()

        setTimeout(() => {
            dispatch({ type: HIDE_LOADER });
            dispatch({ type: FETCH_POSTS, payload: json })
        }, 2000);
        
    }
}