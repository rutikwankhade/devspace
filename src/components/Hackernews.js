import React, { useState, useEffect } from 'react';
import Header from './Header';
import StoryCard from './StoryCard';
import hackernewsIcon from '../assets/images/hackernews.png';
import { ThreeDots } from 'svg-loaders-react'


const Hackernews = () => {

    const [stories, setStories] = useState([]);
    const [loading, setLoading] = useState(true);


    const getStories = async () => {
        const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty', {
            headers: {
                'Content-type': 'application/json',
            },
        })
        const apiResponse = await response.json();
        // console.log(apiResponse);
        setLoading(false);
        setStories(apiResponse)
    }


    useEffect(() => {
        getStories();
    }, [])


    return (
        <div>
            <Header
                icon={hackernewsIcon}
                title='Hackernews'
                borderColor='border-yellow-400'
            />
            {
                (loading === true) ?
                    <div className="flex justify-center my-48">
                        < ThreeDots fill="#6366F1" />
                    </div>
                    :
                    <div className="p-2 flex flex-col justify-center">
                        {stories.slice(0, 20).map(storyId => {
                            return <StoryCard id={storyId} />
                        })}
                    </div>
            }
        </div>
    );
}

export default Hackernews;