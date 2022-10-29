import React from 'react';
import './Tshirt.css'

const Tshirt = ({tshirt,handleAddToCart}) => {
    const {name, picture, price}=tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt=''></img>
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <button onClick={()=> handleAddToCart(tshirt)}>Buy This</button>
        </div>
    );
};

export default Tshirt;