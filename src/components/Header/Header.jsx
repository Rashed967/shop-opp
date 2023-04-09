import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='space-x-16 text-center mb-5 font-medium text-xl bg-orange-400 py-5'>
            <Link to="/">Shop</Link>
            <Link to="/">Sellers</Link>
            <Link to="/">Blogs</Link>
            <Link to="/">About</Link>
            <Link to="/">Contact</Link>
        </nav>
    );
};

export default Header;