import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Unty/Aunty';
import './Grandpa.css';

export const RingContext = createContext('Silver Ring')
export const MoneyContext = createContext('555')

const Grandpa = () => {
    const [house, setHouse] = useState(1)
    const [money, setMoney] = useState(555)

    const ring = 'Diamond Ring'
    return (
        <RingContext.Provider value={[house, setHouse]}>
            <MoneyContext.Provider value={[money, setMoney]}>
                <div className='grandpa'>
                    <h3>Grandpa</h3>
                    <section className='flex'>
                        <Father house={house} ring={ring}></Father>
                        <Uncle house={house}></Uncle>
                        <Aunty house={house} ring={ring}></Aunty>
                    </section>
                </div>
            </MoneyContext.Provider>
        </RingContext.Provider>
    );
};

export default Grandpa;