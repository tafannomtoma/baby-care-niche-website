import React from 'react';
import Review from '../../Dashboard/Review/Review';
import Navigation from '../../Shared/Navigation/Navigation';
import Products from '../Products/Products';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <Review></Review>
        </div>
    );
};

export default Home;