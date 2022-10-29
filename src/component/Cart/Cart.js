import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveItem }) => {

    let message;
    if (cart.length === 0) {
        message = <p>Please buy at least one Item!!</p>
    }

    else if (cart.length === 1) {
        message = <div>
            <h3>Amar jonno akta nao</h3>
            <p>Tumar jonno akta nao</p>
            <p><small>amar jonno arekta nao</small></p>

        </div>
    }
    else {
        message = <p>Thanks for buying</p>
    }
    return (
        <div>
            <h2 className={cart.length === 2? `orange`:`purple`}>Order summary</h2>
            <h5 className={` ${cart.length ===2 ? 'blue':'yellow'}`}>Order quantity: {cart.length}</h5>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={() => handleRemoveItem(tshirt)}>X</button>
                </p>)
            }
            {
                message
            }

            {cart.length === 3 ? <p>Tin jon ke gift diba?</p> : <p>kino kino</p>}
            <p>And operetor</p>
            {cart.length === 2 && <h2>Double Item</h2>}
            {cart.length=== 4 || <p>Charta item na </p>}

        </div>
    );
};

export default Cart;

/*
Conditional Rendering 
1.Use Element and if-else
2.ternary operation condition
3.&& operator (if condition true , i want to display something)
4. || operator (if condition is false, i want to display something) 
*/