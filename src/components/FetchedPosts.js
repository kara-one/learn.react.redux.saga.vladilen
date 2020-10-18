import { useDispatch, useSelector } from 'react-redux';

import { Loader } from './Loader';
import Post from './Post';
import React from 'react';
import { fetchPosts } from '../redux/actions';

export default () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.fetchedPosts);
    const loading = useSelector((state) => state.app.loading);

    if (loading) {
        return <Loader />;
    }

    if (!posts.length && !loading) {
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
