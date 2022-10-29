import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa.js/Grandpa';

const Sister = ({house}) => {
    const [money,setMoney ]= useContext(MoneyContext)
    return (
        <div>
            <h3>sister</h3>
            <p>House: {house}</p>
            <p>Money: {money}</p>
            <button onClick={()=> setMoney(money+100)}>Add 100</button>
        </div>
    );
};

export default Sister;