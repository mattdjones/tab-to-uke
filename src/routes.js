import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import SearchBar from './components/SearchBar';
//import AboutPage from './components/about/AboutPage';
//<Route path="about" component={AboutPage} />

export default (
  <Route path="/" component={App}>
    <IndexRoute component={SearchBar} />        
  </Route>
);
