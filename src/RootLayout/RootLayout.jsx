import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Home/Navbar/Navbar';
import Footer from '../Components/Home/Footer/Footer';

const RootLayout = () => {
    return (
        <div>
           {/* <section> */}
            <Navbar/>
           {/* </section> */}
           <main>
            <Outlet/>
           </main>
           <section>
            <Footer/>
           </section>
        </div>
    );
};

export default RootLayout;