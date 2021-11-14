import React from 'react';
import Review from '../../Dashboard/Review/Review';
import Navigation from '../../Shared/Navigation/Navigation';
import BannerCard from '../BannerCard/BannerCard';
import Blog from '../Blog/Blog';
import BlogCard from '../BlogCard/BlogCard';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <BannerCard></BannerCard>
            <Products></Products>
            <BlogCard></BlogCard>
            <Blog></Blog>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;