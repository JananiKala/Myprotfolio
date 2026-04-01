import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import profileImage from "./assets/profile.jpg";

const faviconLink =
  document.querySelector('link[rel="icon"]') ||
  document.querySelector('link[rel="shortcut icon"]');

if (faviconLink) {
  faviconLink.href = profileImage;
}

const appleTouchIconLink = document.querySelector(
  'link[rel="apple-touch-icon"]',
);
if (appleTouchIconLink) {
  appleTouchIconLink.href = profileImage;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
