import React from 'react';
import NewsLetter from '../../NewsLetter/NewsLetter';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Reviews from '../../Reviews/Reviews'
import Navigation from '../../../shared/Navigation/Navigation';
import Footer from '../../../shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </div>
    );
};

export default Home;