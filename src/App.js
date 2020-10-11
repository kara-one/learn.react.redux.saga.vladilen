import FetchedPosts from './components/FetchedPosts';
import PostForm from './components/PostForm';
import Posts from './components/Posts';
import React from 'react';

function App() {
    return (
        <div className="App container pt-3">
            <div className="row">
                <div className="col">
                    <PostForm />
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col">
                    <h2>Синхронные Посты</h2>
                    <Posts posts={[]} />
                </div>
                <div className="col">
                    <h2>Асинхронные Посты</h2>
                    <FetchedPosts posts={[]} />
                </div>
            </div>
        </div>
    );
}

export default App;
