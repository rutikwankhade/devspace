import React from 'react';
import Header from './Header';
import githubIcon from '../assets/images/github.png';

const Github = () => {
    return (
        <div>
            <Header
                icon={githubIcon}
                title='Github'
                borderColor='border-purple-400'
            />
        </div>
    );
}

export default Github;