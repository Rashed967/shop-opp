import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Categories from '../Categories/Categories';

const Home = () => {
    const products = useLoaderData()

    return (
        <div>
            <Banner
            products={products}
            ></Banner>
            <Categories
            products={products}
            ></Categories>
        </div>
    );
};

export default Home;