import React from 'react';
import Category from '../Category/Category';

const Categories = ({products}) => {

    return (
        <div className='container mx-auto grid lg:grid-cols-8 gap-5'>
            {
                products.map(product => <Category
                key={product.id}
                product={product}
                ></Category>)
            }
        </div>
    );
};

export default Categories;