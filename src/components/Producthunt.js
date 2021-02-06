import React from 'react';
import producthuntIcon from '../assets/images/producthunt.png';

const Producthunt = () => {
    return (
        <div>
            <div className="sticky top-0 flex flex-row justify-center text-2xl font-semibold p-3 border-t-8 border-red-300 bg-white">
                <img src={producthuntIcon} alt="logo"
                    className="h-6 w-6 m-1 mr-2"
                />
                <h1 className="text-center">Product Hunt</h1>
            </div>
        </div>
    );
}

export default Producthunt;