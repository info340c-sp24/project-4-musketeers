import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import CommunityHub from "./pages/CommunityHub";
import MasterCards from "./pages/MasterCards";
import Masterclass from "./pages/Masterclass";
import SignUp from "./pages/SignUp";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHi0vaDjbtI2M9IOF0afct3adv07i1TiE",
  authDomain: "fourmusketeers-102431.firebaseapp.com",
  databaseURL: "https://fourmusketeers-102431-default-rtdb.firebaseio.com",
  projectId: "fourmusketeers-102431",
  storageBucket: "fourmusketeers-102431.appspot.com",
  messagingSenderId: "492158954689",
  appId: "1:492158954689:web:a92457b726ad35271a7840",
  measurementId: "G-BJKMTWHXXZ",
};

// Initialize Firebase
initializeApp(firebaseConfig);

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* The Layout component wraps around all these routes, providing a common layout */}
          {/* Uses conditional rendering */}
          <Route path="/" element={<Home />} index />
          <Route element={<Layout />}>
            <Route path="contact" element={<Contact />} />
            <Route path="communityhub" element={<CommunityHub />} />
            <Route path="masterclass" element={<Masterclass />} />
            <Route path="mastercards" element={<MasterCards />} />
          </Route>
          <Route path="signup" element={<SignUp />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
