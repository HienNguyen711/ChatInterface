//route
import React from 'react';
import App from '../components/App.jsx';
import Jane from '../components/jane.jsx';
import Jimmy from '../components/jimmy.jsx';
import Router from 'react-router';
let Route = Router.Route;
let DefaultRoute = Router.DefaultRoute;

let routes = (
   <Route path="/" handler={App}>
    <DefaultRoute handler={App} />
    <Route path="jane" handler={Jane} />
    <Route path="jimmy" handler={Jimmy} />
  </Route>

);

Router.run(routes, Router.HashLocation, (Root)=> {
  React.render(<Root />, document.getElementById('root'));
});

