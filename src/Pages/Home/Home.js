import React from 'react';
import CartDetails from '../../Components/CartDetails/CartDetails';
import Products from '../Products/Products';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
                 <CartDetails></CartDetails>
               <Banner></Banner>  
            <Products></Products>
        </div>
    );
};

export default Home;