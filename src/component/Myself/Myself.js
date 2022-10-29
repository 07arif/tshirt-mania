import React from 'react';
import Special from '../Speacial/Special';

const Myself = ({house,ring}) => {
    return (
        <div>
          <h3>My self</h3>
          <p><small>House:{house}</small></p>
          <section>
            <Special ring={ring}></Special>
          </section>
        </div>
    );
};

export default Myself;