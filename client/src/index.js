import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import App from "./App";
import history from "./helpers/history";
import { QueryClient, QueryClientProvider } from "react-query";

import "./index.css";

const queryClient = new QueryClient();
queryClient.setDefaultOptions({
  refetchOnWindowFocus: false,
  refetchOnReconnect: false,
  retry: false,
  staleTime: 1000 * 6,
});

ReactDOM.render(
  <Router forceRefresh={true} history={history}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Router>,
  document.getElementById("root")
);
