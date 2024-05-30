import AOS from 'aos'; 
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import MasterCards from "./pages/MasterCards";
import Masterclass from "./pages/Masterclass";
import CommunityForm from "./pages/CommunityForm";
import Login from './components/auth/login/index'
import CommunityHub from "./pages/CommunityHub";
import Register from './components/auth/register/index'
import Home2 from './pages/Home2';
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import { AuthProvider } from "./contexts/authContext";
import "./index.css";
import 'aos/dist/aos.css';
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  useEffect(() => {
    AOS.init(); // Initialize AOS directly
  }, []);
  return (
    <AuthProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Everything that has navbar goes in here: */}
            <Route element={<Layout />}>
              <Route path="contact" element={<Contact />} />
              <Route path="communityhub" element={<CommunityHub />} />
              <Route path="masterclass" element={<Masterclass />} />
              <Route path="mastercards" element={<MasterCards />} />
              <Route path="communityform" element={<CommunityForm />} />
              <Route path="home" element={<Home2 />} /> 
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            {/* Change for page after user logged in */}
            
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>

  );
}

export default App;