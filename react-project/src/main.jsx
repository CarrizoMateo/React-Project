import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CartProvider } from "./context/CartContext";

import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyChHu6Rp8OfZrd4OYQVISPBdl5j9PtvwWU",
  authDomain: "react-project-3f646.firebaseapp.com",
  projectId: "react-project-3f646",
  storageBucket: "react-project-3f646.appspot.com",
  messagingSenderId: "885625581465",
  appId: "1:885625581465:web:698bf0784139be92ac6d08",
  measurementId: "G-31DT792E8D"
};


initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
