import { useDispatch, useSelector } from 'react-redux';

import Post from './Post';
import React from 'react';
import { fetchPosts } from '../redux/actions';

export default () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.fetchedPosts);

    if (!posts.length) {
        return (
            <button
                className="btn btn-primary"
                onClick={() => dispatch(fetchPosts())}
            >
                Go posts
            </button>
        );
    }

    return posts.map((post) => <Post post={post} key={post.id} />);
};
