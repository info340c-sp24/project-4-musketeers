import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-tailwind/react';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import CommunityHub from './pages/CommunityHub';
import MasterCards from './pages/MasterCards';
import Masterclass from './pages/Masterclass';
import SignUp from './pages/SignUp';
import './index.css';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* The Layout component wraps around all these routes, providing a common layout */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} index />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="communityhub" element={<CommunityHub />} />
            <Route path="masterclass" element={<Masterclass />} />
            <Route path="mastercards" element={<MasterCards />} />
          </Route>
          {/* The SignUp page does not use the common layout */}
          <Route path="signup" element={<SignUp />} />
          {/* Fallback for no matched routes */}
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);