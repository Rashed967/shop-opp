import React from 'react';
import Product from '../Product/Product';

const Banner = ({products}) => {
    const bannerProducts = products.slice(0, 3)
    return (
        <div className='grid grid-cols-2  gap-5 m-5 container mx-auto'>
           {
            bannerProducts.map(product => <Product
            key={product.id}
            product={product}
            ></Product>)
           }
        </div>
    );
};

export default Banner;