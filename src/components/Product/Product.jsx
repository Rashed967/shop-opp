import React from 'react';

const Product = ({product}) => {
    const {title, price, description, category, image, rating, id} = product
    return (
        <div className={`bg-slate-400 rounded-md p-6 flex justify-between items-center gap-5 ${product.id === 1 && 'row-span-2'}`}>
            <div className=' top-1/2'>
                <h3 className='font-semibold text-2xl'>{title}</h3>
                <button className='bg-red-300 font-medium py-3 px-4 rounded-md my-3'>Shop now</button>
            </div>
            <img  className=' w-1/6 rounded-md' src={image} alt="" />
        </div>
    );
};

export default Product;