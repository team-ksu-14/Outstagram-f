import React from 'react';
import PostCard from './PostCard'

function PostList({ posts }) {
    return(
        <ul>
            {
                posts.map(post => (
                <PostCard
                key = {post.id}
                title = {post.title}
                description = {post.description}
                image = {post.image}
                />
            ))}
        </ul>
    );
}

export default PostList;