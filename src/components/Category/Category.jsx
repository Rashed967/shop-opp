import React from 'react';

const Category = ({product}) => {

    return (
        <div className='p-24 bg-orange-300'>
            <h3>{product.category}</h3>
        </div>
    );
};

export default Category;