import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import { GlobalStyle } from "./styles/index.js";
import { GlobalProvider } from "./context/GlobalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>
);
