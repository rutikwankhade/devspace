import React from 'react';
const Header = ({ icon, title, borderColor }) => {
    return (
        <div className={`sticky top-0 flex flex-row justify-center text-2xl font-semibold p-3 border-t-8 bg-white ${borderColor}`}>
            <img src={icon} alt="logo"
                className="h-6 w-6 m-1 mr-2"
            />
            <h1 className="text-center">{title}</h1>

        </div>
    );
}

export default Header;