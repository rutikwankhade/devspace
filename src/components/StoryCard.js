import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';

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
        <Fade bottom>
            <div key={details.id}
                className="bg-white rounded shadow-sm hover:shadow border-l-4 text-gray-700 p-3 px-4 text-xl m-1 text-left"
            >
                <a href={details.url} target="_blank" rel="noreferrer">
                    <h2>{details.title}</h2>
                </a>
            </div>
        </Fade>
    );
}

export default StoryCard;