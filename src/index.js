import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import {EmailTemplateProvider} from "./context/email-template"
import Context from "./context/Context";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { createClient } from "@supabase/supabase-js";


const supabaseUrl = 'https://udqpsjhnskuytmiteqwd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkcXBzamhuc2t1eXRtaXRlcXdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMwMzM4NDksImV4cCI6MTk5ODYwOTg0OX0.TWKuxiENlpAXNnjwxOrPGE5cgUOJPOPlI9BaDgq_i7A'
const supabase = createClient(supabaseUrl, supabaseKey)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <SessionContextProvider supabaseClient={supabase}>
    <Context>
    <EmailTemplateProvider>
    <App />
 
    </EmailTemplateProvider>
    </Context>
    </SessionContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
