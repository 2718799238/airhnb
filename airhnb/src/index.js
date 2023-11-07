import ReactDOM from "react-dom/client";
import React, { Suspense } from "react";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import "@/assets/css/index.less";
import "normalize.css";
import store from "./store";

import App from "@/App";
import { theme } from "./assets/theme";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Suspense>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </Provider>
  </Suspense>
  // </React.StrictMode>
);
