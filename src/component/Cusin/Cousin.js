import React from 'react';
import Friend from '../Friend/Friend';

const Cousin = ({house,ring}) => {
    return (
        <div>
            <h3>Cousin</h3>
            <p>House: {house}</p>
            <section>
            <Friend ring={ring}></Friend>
            
            </section>
        </div>
    );
};

export default Cousin;