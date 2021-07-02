import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';

import App from './components/App';
import LoginForm from './components/LoginForm';

const networkInterface = createNetworkInterface({
  uri: '/graphql',
  opts: {
    // this is saying its safe to send along cookies with the outgoing request
    // it means you are making a request to the same origin that the browser is currently on
    // it tells apollo client to send along cookies whenever it makes a query to the backend server
    // note that this.props.data actually had the user information before I added this code, but adding it for visibility
    credentials: 'same-origin'
  }
});

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}> {/*will always display on screen at all times */}
          <Route path="login" component={LoginForm} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
