import React, { useContext } from 'react';
import { RingContext } from '../Grandpa.js/Grandpa';

const Friend = ({ring}) => {
    const [house, setHouse] = useContext(RingContext)
    return (
        <div>
            <h3>Friend</h3>
            <p>Gift:{ring}</p>
            <p><small>House: {house}</small></p>
            <button onClick={()=> setHouse(house+1)}>Increase</button>
            <button onClick={()=> setHouse(house-1)}>Decries</button>

        </div>
    );
};

export default Friend;