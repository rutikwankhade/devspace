import React, { useEffect } from 'react';
import Header from './Header';
import githubIcon from '../assets/images/github.png';

const Github = () => {
    const getTrendingRepos = async () => {
        const response = await fetch('https://gtrend.yapie.me/repositories?since=daily')
        const trendingRepos = await response.json();
        console.log(trendingRepos);
    };

    useEffect(() => {
        getTrendingRepos();
    }, [])

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