import React from "react";
import ReactDOM from "react-dom";
import { store } from "./redux/store/index";
import { Provider } from "react-redux";
import styles from "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Link } from "react-router-dom";
import App from "./App"; // Agregar esta línea de importación

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App className={styles.homeContainer} />
      <Link to="/home" className={styles.enlacePersonalizado}>
        Home
      </Link>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
