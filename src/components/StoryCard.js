import React, { useEffect, useState } from 'react';
const StoryCard = ({ id }) => {
    const [details, setDetails] = useState({})

    const getStoryData = async (id) => {
        const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`, {
            headers: {
                'Content-type': 'application/json',
            },
        })

        const storyDetails = await response.json();
        console.log(storyDetails);
        setDetails(storyDetails)
    }


    useEffect(() => {
        getStoryData(id);
    }, [id])


    return (
        <div Key={details.id}
        className="bg-white text-gray-700 p-2 text-xl m-2 text-left"
        >
            <span>{details.score === null ? '' : details.score}</span>

            <h2>{details.title === null ? '' : details.title}</h2>
        </div>
    );
}

export default StoryCard;