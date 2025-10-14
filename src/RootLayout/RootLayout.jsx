import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Home/Navbar/Navbar';
import Footer from '../Components/Home/Footer/Footer';

const RootLayout = () => {
    return (
        <div>
           <section className='px-2 sm:px-10 '>
            <Navbar/>
           </section>
           <main className=' px-2 sm:max-w-7xl mx-auto'>
            <Outlet/>
           </main>
           <section className='px-2 sm:px-10'>
            <Footer/>
           </section>
        </div>
    );
};

export default RootLayout;