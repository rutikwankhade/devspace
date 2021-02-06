import React from 'react';
import Header from './Header';
import producthuntIcon from '../assets/images/producthunt.png';

const Producthunt = () => {
    return (
        <div>
            <Header
                icon={producthuntIcon}
                title='Product Hunt'
                borderColor='border-red-300'
            />
        </div>
    );
}

export default Producthunt;