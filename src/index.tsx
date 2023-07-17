import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";

import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import store from "../src/redux/saga/store";
import { Provider } from "react-redux";

import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
  
);

const queryClient = new QueryClient();

root.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <Router>
        <App />
      </Router>
    </QueryClientProvider>
  </Provider>
);
