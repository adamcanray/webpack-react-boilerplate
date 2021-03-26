import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router} from 'react-router-dom';
import App from "./App";
var mountNode = document.getElementById("app");
ReactDOM.render(
  <Suspense fallback={
    <div>Loading...</div>
  }>
    <Router>
      <App />
    </Router>
  </Suspense>
, mountNode);