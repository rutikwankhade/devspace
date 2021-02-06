import React from 'react';
import githubIcon from '../assets/images/github.png';

const Github = () => {
    return (
        <div>
            <div className="sticky top-0 flex flex-row justify-center text-2xl font-semibold p-3 border-t-8 border-purple-400 bg-white">
                <img src={githubIcon} alt="logo"
                    className="h-6 w-6 m-1 mr-2"
                />
                <h1 className="text-center">Github</h1>
            </div>
        </div>
    );
}

export default Github;