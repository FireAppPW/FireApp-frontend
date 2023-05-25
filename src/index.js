import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GoogleOAuthProvider } from '@react-oauth/google';


const clientId = "369269235617-gbealbuhbg0u16vlm55sffka5h73k209.apps.googleusercontent.com"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <GoogleOAuthProvider clientId={clientId}>
            <App />
    </GoogleOAuthProvider>

);
