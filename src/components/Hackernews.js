import React, { useState, useEffect } from 'react';
import StoryCard from './StoryCard';
import hackernewsIcon from '../assets/images/hackernews.png';


const Hackernews = () => {

    const [stories, setStories] = useState([]);

    const getStories = async () => {
        const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty', {
            headers: {
                'Content-type': 'application/json',
            },
        })
        const apiResponse = await response.json();
        // console.log(apiResponse);
        setStories(apiResponse)


    }






    useEffect(() => {
        getStories();
    })
    return (
        <div>
            <div className="sticky top-0 flex flex-row justify-center text-2xl font-semibold p-3 border-t-8 border-yellow-400 bg-white">
                <img src={hackernewsIcon} alt="logo"
                    className="h-6 w-6 m-1 mr-2"
                />
                <h1 className="text-center">HackerNews</h1>
            </div>
            <div className="p-2 flex flex-col justify-center">

                {stories.slice(0, 20).map(storyId => {
                    return <StoryCard id={storyId} />
                })}
            </div>

        </div>
    );
}

export default Hackernews;