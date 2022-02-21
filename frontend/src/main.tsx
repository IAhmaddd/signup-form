import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'react-toastify/dist/ReactToastify.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { createHttpLink } from 'apollo-link-http';

const httpLink = createHttpLink({
	uri: 'https://icreate-user.herokuapp.com/graphql',
	//  set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
  credentials: 'include',
  
});

const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)