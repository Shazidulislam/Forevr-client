import React from 'react';

const NewsLetter = () => {
    return (
        <div className='text-center py-10'>
            <p className='font-medium text-2xl text-gray-800'>Subscribe now & get 20% of</p>
            <p className='text-gray-400 text-sm sm:text-lg pt-1 sm:pt-3 w-3/4 mx-auto '>Join our community for exclusive deals, early drops, and VIP discounts!</p>

            <div>
             <form action="" className='w-full sm:w-1/2 flex items-center px-2 sm:px-0  mx-auto pt-4'>
                   <input className='px-2 py-3 shadow outline-none w-full sm:flex-1' type="email" required placeholder='Enter your email' />
                <button type='submit' className='bg-black text-white px-10 py-4 text-xs'>SUBSCRIBE</button>
             </form>
            </div>
        </div>
    );
};

export default NewsLetter;