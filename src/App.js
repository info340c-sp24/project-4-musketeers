import React, { useEffect } from "react";
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
import CommunityForm from "./pages/CommunityForm";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from 'aos'; // Import AOS directly
import 'aos/dist/aos.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulatorm, signInWithEmailAndPassword, connectAuthEmulator } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIkJw5qnqdU2g9xJIcCgFraHH_rVn_U1U",
  authDomain: "echosystem-485df.firebaseapp.com",
  projectId: "echosystem-485df",
  storageBucket: "echosystem-485df.appspot.com",
  messagingSenderId: "251611996826",
  appId: "1:251611996826:web:5d0c4b72c86c2485e23523",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// connectAuthEmulator(auth, 'http://localhost:3000/', ) // Continue this on VID

// Fade Animations
function App() {
  useEffect(() => {
    AOS.init(); // Initialize AOS directly
  }, []);

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
            <Route path="communityform" element={<CommunityForm />} />
          </Route>
          <Route path="signup" element={<SignUp />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
