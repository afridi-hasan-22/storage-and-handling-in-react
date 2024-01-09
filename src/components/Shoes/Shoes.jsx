import React from 'react';
import { multiply } from '../../utilities/calculate';

const Shoes = () => {
    const first = 5;
    const second = 4;
    const total = multiply(first,second)
    return (
        <div>
            <p>Total : {total} </p>
        </div>
    );
};

export default Shoes;