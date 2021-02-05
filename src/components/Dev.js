import React, { useEffect } from 'react';
const Dev = () => {

    const getDevFeed = async () => {
        const response = await fetch('https://dev.to/api/articles', {
            headers: {
                'Content-type': 'application/json',
            },
        })
        const apiResponse = await response.json();
        console.log(apiResponse)

    }

    useEffect(() => {
        getDevFeed();
    })


    return (
        <div>
            <h1 className="text-2xl font-semibold">Dev</h1>
        </div>
    );
}

export default Dev;