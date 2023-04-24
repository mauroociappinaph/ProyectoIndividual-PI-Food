import React from "react";
import ReactDOM from "react-dom";
import { store } from "./redux/store/index";
import { Provider } from "react-redux";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import App from "./App"; // Agregar esta línea de importación

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);

reportWebVitals();
