import React from 'react';
import Router, { Route, DefaultRoute } from 'react-router';
import { Home, Chat, Score } from './pages/';
import App from './App';

export var navigationConfig = [
  {title: "Home", routeName: "home"},
  {title: "Score", routeName: "score"},
  {title: "Chat", routeName: "chat"}
];


// declare our routes and their hierarchy
export var routes = (
  <Route handler={App}>
    <DefaultRoute handler={Home} />
    <Route path="/" name="home" handler={Home}/>
    <Route path="/score" name="score" handler={Score} />
    <Route path="/chat" name="chat" handler={Chat} />
  </Route>
);