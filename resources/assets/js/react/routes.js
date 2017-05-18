import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';

const Greeting = () => {
  return <div>Hi there!</div>
}
const PostIndex = () => {
	return <div>Index</div>
}

export default (
  <Route path="/"  component={App} >
    <IndexRoute component={PostIndex} />
    <Route path="greet" component={Greeting} />
  </Route>
);
