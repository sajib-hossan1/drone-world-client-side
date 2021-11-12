import React from 'react';
import Navigation from '../../../shared/Navigation/Navigation';
import NewsLetter from '../../NewsLetter/NewsLetter';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;