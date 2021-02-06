import React, { useState, useEffect } from 'react';
import Header from './Header';
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
            <Header
                icon={hackernewsIcon}
                title='Hackernews'
                borderColor='border-yellow-400'
            />

            <div className="p-2 flex flex-col justify-center">

                {stories.slice(0, 20).map(storyId => {
                    return <StoryCard id={storyId} />
                })}
            </div>

        </div>
    );
}

export default Hackernews;