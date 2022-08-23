import React from 'react';
import CartDetails from '../../Components/CartDetails/CartDetails';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
                 <CartDetails></CartDetails>
            <Products></Products>
        </div>
    );
};

export default Home;