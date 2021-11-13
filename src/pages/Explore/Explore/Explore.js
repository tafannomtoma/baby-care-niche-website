import React from 'react';
import Products from '../../Home/Products/Products';
import Navigation from '../../Shared/Navigation/Navigation';
import ExploreProducts from '../ExploreProducts/ExploreProducts';

const Explore = () => {
    return (
        <div>
            <Navigation></Navigation>
            {/* <Products></Products> */}
            <ExploreProducts></ExploreProducts>

        </div>
    );
};

export default Explore;