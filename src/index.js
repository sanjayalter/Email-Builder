import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { EmailTemplateProvider } from "./context/email-template";
import Context from "./context/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Context>
        <EmailTemplateProvider>
          <App />
        </EmailTemplateProvider>
      </Context>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
