import React, { useEffect, useState } from 'react';
import Header from './Header';
import devIcon from '../assets/images/dev.webp';
import Fade from 'react-reveal/Fade';


const Dev = () => {
    const [devPosts, setDevPosts] = useState([]);
    const getDevFeed = async () => {
        const response = await fetch('https://dev.to/api/articles', {
            headers: {
                'Content-type': 'application/json',
            },
        })
        const apiResponse = await response.json();
        console.log(apiResponse)
        setDevPosts(apiResponse);

    }

    useEffect(() => {
        getDevFeed();
    })


    return (
        <div>
            <Header
                icon={devIcon}
                title='Dev'
                borderColor='border-gray-500'
            />

            <div className="flex flex-row flex-wrap  justify-center p-2">

                {devPosts.map(post => {
                    return (
                        <Fade bottom>
                            <a href={post.url}
                                target="_blank" rel="noreferrer" Key={post.id}
                            >
                                <div className="w-72 h-64 py-auto shadow flex flex-col bg-white rounded-md p-4 text-left m-2">
                                    <img src={post.social_image === '' ? 'https://picsum.photos/seed/picsum/200/150' : post.social_image} alt="cover-img" className="rounded" />
                                    <h3 className="text-xl mt-2">{post.title}</h3>
                                </div>
                            </a>
                        </Fade>
                    )
                })}
            </div>
        </div>
    );
}

export default Dev;