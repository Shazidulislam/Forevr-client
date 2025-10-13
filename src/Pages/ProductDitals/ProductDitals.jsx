import React from 'react';
import { useParams } from 'react-router';

const ProductDitals = () => {

    const {id} = useParams()
    return (
        <div>
            <p>This your ID {id}</p>
        </div>
    );
};

export default ProductDitals;