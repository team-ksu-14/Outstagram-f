import React from 'react';
import PostListContainer from '../containers/PostListContainer';
import PrimarySearchAppBar from '../components/PrimarySearchAppBar';

function Home(){

    return(
        <div>
            <PrimarySearchAppBar/>
            <PostListContainer/>
        </div>
    );
}

export default Home;