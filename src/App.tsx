import { ApolloProvider, gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { client } from "./lib/apollo";
import { Router } from "./Router";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
