import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'

import App from "./App";
import ErrorFallback from "./components/ErrorFallback";
import reportWebVitals from "./reportWebVitals";
import { ErrorBoundary } from "react-error-boundary";
import { store } from './store';
import "./index.scss";
    

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Provider store={store}>
            <App />
        </Provider>,
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();