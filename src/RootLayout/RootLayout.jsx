import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Home/Navbar/Navbar';
import Footer from '../Components/Home/Footer/Footer';

const RootLayout = () => {
    return (
        <div>
           <section>
            <Navbar/>
           </section>
           <main className='sm:max-w-7xl mx-auto'>
            <Outlet/>
           </main>
           <section className='px-4 sm:px-12'>
            <Footer/>
           </section>
        </div>
    );
};

export default RootLayout;