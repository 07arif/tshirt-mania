import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css';


const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);
    // add to cart
    const handleAddToCart = tshirt => {
        const exist = cart.find(ts => ts._id === tshirt._id);
        if (exist) {
            alert('t-shirt already added');
        }
        else {
            const newCart = [...cart, tshirt];
            setCart(newCart)
            // console.log(newCart)
        }
    }
    // remove from cart
    const handleRemoveItem = tshirt => {
        const remaining = cart.filter(ts => ts._id !== tshirt._id);
        setCart(remaining)
    }

    return (
        <div className='home-container'>
            {/* shop section  */}
            <div className='t-shirt-container'>
                {
                    tshirts.map(tshirt => <Tshirt
                        key={tshirt.id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></Tshirt>)
                }
            </div>
            {/* cart section */}
            <div className='cart-container'>
                <Cart
                    cart={cart}
                    handleRemoveItem={handleRemoveItem}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;