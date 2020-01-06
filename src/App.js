import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';
import Explore from './pages/Explore';
import Signin from './pages/Signin';

const App = () => {
  return (
    <>
      <Route path="/" component = {Signin} exact/>
      <Route path="/home" component = {Home} />
      <Route path="/user" component = {User} />
      <Route path="/explore" component = {Explore} />
    </>
  );
};

export default App;
