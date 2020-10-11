import Post from './Post';
import React from 'react'

export default ({ posts }) => {
    if (!posts.length) {
        return (<p className="text-center">No posts</p>)
    }
    
    return posts.map( post => <Post post={post} key={post} />);
};
