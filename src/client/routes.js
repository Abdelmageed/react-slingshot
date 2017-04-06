import React from 'react';
import {Route, IndexRoute} from 'react-router';

import * as actionCreators from './actions/actionCreators';

import App from './components/App';
import Home from './containers/Home';
import MyProfile from './components/MyProfile';

export const getRoutes = (store)=> {

  return(
    <Route path="/" component={App}>
      <IndexRoute 
      component={Home} />
      <Route path="my-profile" component={MyProfile}/>
    </Route>
  );
}

