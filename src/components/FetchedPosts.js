import Post from './Post';
import React from 'react';

export default ({ posts }) => {
    if (!posts.length) {
        return <button className="btn btn-primary">Go posts</button>;
    }
    
    return posts.map((post) => <Post post={post} key={post} />);
};
