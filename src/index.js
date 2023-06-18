import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GoogleOAuthProvider } from '@react-oauth/google';


const clientId = "462971002541-du8637ldheo1l66ngpufa64inmr54llr.apps.googleusercontent.com"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <GoogleOAuthProvider clientId={clientId}>
            <App />
    </GoogleOAuthProvider>

);
