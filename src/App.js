import React from "react";  
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import HomePage from '../src/Pages/HomePage'
import Details from '../src/Pages/Details'
import { BrowserRouter as Router, Route, Routes, Switch} from "react-router-dom";


const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "https://api.spacex.land/graphql/" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/details/:id' element={<Details />} />             
          </Routes>
        </div>
        </Router>
    </ApolloProvider>
   
  );
}

export default App;