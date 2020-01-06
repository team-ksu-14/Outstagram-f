import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../modules/posts'
import PostList from '../components/PostList';

const PostListContainer = () => {
    const { data, loading, error } = useSelector(state => state.posts.posts)
    const dispatch = useDispatch();

    //component가 브라우저에 mount될 때 api요청을 하기 위해 useEffect 사용
    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch]);
 
    if (loading && !data) return <div>로딩중...</div>
    if (error) return <div>에러 발생!</div>
    if (!data) return null;

    return( 
        <div>
            <PostList posts ={data}/>
        </div>
    )
}

export default PostListContainer;
