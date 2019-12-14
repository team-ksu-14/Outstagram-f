import React from 'react';
import { Route } from 'react-router-dom';
import PostListPage from './pages/PostListPage'
import PostPage from './pages/PostPage'
import Home from './pages/Home';
import User from './pages/User';
import Explore from './pages/Explore';

function App() {
  return (
    <>
      <Route path="/" component = {Home} exact/>
      <Route path="/:id" component= {PostPage} />
      <Route path="/user" component = {User} />
      <Route path="/explore" component = {Explore} />
    </>
  );
}

export default App;
