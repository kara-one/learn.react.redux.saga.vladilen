import Post from './Post';
import React from 'react'
import { connect } from "react-redux";

const Posts = ({ syncPosts }) => {
    if (!syncPosts.length) {
        return <p className="text-center">No posts</p>;
    }

    return syncPosts.map((post) => <Post post={post} key={post.id} />);
};

const mapStateToProps = state => ({
    syncPosts: state.posts.posts
});

export default connect(mapStateToProps, null)(Posts);