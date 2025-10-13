
import React from 'react';
import { products } from '../../assets/frontend_assets/assets';
import ShopContext from './ShopContext';

const ShopContextProvider = ({children}) => {
    const currncy = "$"
    const delivary_fee = 10
    const shopInfo = {
      products,
      currncy,
      delivary_fee
    }

    return (
        <ShopContext value = {shopInfo}>
            {children}
        </ShopContext>
    );
};

export default ShopContextProvider;