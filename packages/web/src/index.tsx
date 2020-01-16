import * as React from "react";
import * as ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";

import * as serviceWorker from "./serviceWorker";
import { client } from "./apollo";
import { Routes } from "./routes";
import App from "./App";
import "./index.css"
console.log('WEB')

ReactDOM.render(
  <ApolloProvider client={client}>
    <Routes />,
    <App />
  </ApolloProvider>,
  document.getElementById("root") as HTMLElement
);
serviceWorker.unregister();
