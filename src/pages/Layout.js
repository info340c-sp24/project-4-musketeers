import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../components/Footer';
import Navbar2 from '../components/Navbar2';


function Layout() {
    return (
        <div>
            <Navbar2 />
                <Outlet /> 
            <Footer />
        </div>
    );
}

export default Layout;