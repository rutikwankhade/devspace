import React, { useState, useEffect } from 'react';



const query = `{
    storiesFeed(type:BEST)
        {
            title,
            author
            {
                username,
                blogHandle
            },
            coverImage,
            slug,
            dateFeatured
        }
    }
  `;

const Hashnode = () => {

    const fetchPosts = async () => {
        const response = await fetch('https://api.hashnode.com', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ query }),
        })
        const apiResponse = await response.json();

        console.log(apiResponse.data.storiesFeed);
    };

    useEffect(() => {
        fetchPosts();
    })

    return (
        <div>
            <h1 className="text-2xl font-semibold">Hashnode</h1>
        </div>
    );
}

export default Hashnode;