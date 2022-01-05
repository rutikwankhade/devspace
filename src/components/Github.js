import React, { useEffect, useState } from 'react';
import Header from './Header';
import githubIcon from '../assets/images/github.png';
import starIcon from '../assets/icons/star.svg';
import forkIcon from '../assets/icons/fork.svg';
import Fade from 'react-reveal/Fade';
import { ThreeDots } from 'svg-loaders-react'



const Github = () => {

    const [reposList, setReposList] = useState([]);
    const [loading, setLoading] = useState(true)

    const getTrendingRepos = async () => {
        const response = await fetch('https://gtrend.yapie.me/repositories?since=daily')
        const trendingRepos = await response.json();
        // console.log(trendingRepos);
        setLoading(false);
        setReposList(trendingRepos)
    };

    useEffect(() => {
        getTrendingRepos();
    }, [])

    return (
        <div>
            <Header
                icon={githubIcon}
                title='Github'
            />

            {
                (loading === true) ?
                    <div className="flex justify-center my-48">
                        < ThreeDots fill="#6366F1" />
                    </div>
                    :
                    <div className="flex flex-col  justify-center px-auto py-2">
                        {reposList.map(repo => {
                            return (
                                <Fade bottom key={repo.name}>
                                    <div className="bg-white w-8/12 mx-auto p-4 px-8 rounded-md m-2 text-left">
                                        <a href={repo.url} target="-blank" rel="noreffer">
                                            <h3 className="text-xl font-semibold text-blue-500">
                                                {repo.name}
                                            </h3>
                                            <span className="text-md">
                                                {repo.description}
                                            </span>

                                            <div className="flex flex-row my-2">
                                                <div className="flex mr-2 text-sm">
                                                    <div className="m-1 h-4 w-4 rounded-full"
                                                        style={{ backgroundColor: `${repo.languageColor}` }}></div>
                                                    <span className="m-1">
                                                        {repo.language}
                                                    </span>
                                                </div>
                                                <div className="flex mr-2">
                                                    <img src={starIcon} alt="star" className="m-1 h-4 w-4" />
                                                    <span>{repo.stars}</span>
                                                </div>
                                                <div className="flex mr-2">
                                                    <img src={forkIcon} alt="fork" className="m-1 h-4 w-4" />
                                                    <span className="mx-2">{repo.forks}</span>
                                                </div>
                                            </div>

                                        </a>
                                    </div>
                                </Fade>
                            )
                        })}
                    </div>
            }
        </div>
    );
}

export default Github;