import React, { useState, useEffect } from 'react';
import StoryCard from './StoryCard';

const Hackernews = () => {

    const [stories, setStories] = useState([]);


    const getStories = async () => {
        const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty', {
            headers: {
                'Content-type': 'application/json',
            },
        })
        const apiResponse = await response.json();
        console.log(apiResponse);
        setStories(apiResponse)

       
    }



   


    useEffect(() => {
        getStories();
    })
    return (
        <div>
            <h1 className="rounded-md text-2xl font-semibold p-3 border-t-4 border-yellow-300 bg-white">HackerNews</h1>
        {stories.slice(0,20).map(storyId=>{
           return <StoryCard id={storyId}/>
        })}
        
        </div>
    );
}

export default Hackernews;