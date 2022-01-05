import React, { useState, useEffect } from 'react';
import Header from './Header';
import techcrunchIcon from '../assets/images/techcrunch.png';
import { ThreeDots } from 'svg-loaders-react'
import Fade from 'react-reveal/Fade';


const Techcrunch = () => {

    const [stories, setStories] = useState([]);
    const [loading, setLoading] = useState(true);


    const getStories = async () => {
        const response = await fetch('https://techcrunch.vercel.app/articles', {
            // headers: {
            //     'Content-type': 'application/json',
            // },
        })
        // console.log(response)
        const apiResponse = await response.json();
        // console.log(apiResponse);
        setLoading(false);
        setStories(apiResponse.articles)
    }


    useEffect(() => {
        getStories();
    }, [])


    return (
        <div>
            <Header
                icon={techcrunchIcon}
                title='Techcrunch'
            />
            {
                (loading === true) ?
                    <div className="flex justify-center my-48">
                        < ThreeDots fill="#6366F1" />
                    </div>
                    :
                    <div className="p-2 flex flex-row flex-wrap justify-center md:px-20">
                        {stories.map(story => {
                            return (
                                <Fade bottom key={story.id}>
                                    <a href={story.link}
                                        target="_blank" rel="noreferrer"
                                    >
                                        <div className=" py-auto shadow-sm hover:shadow flex md:flex-row flex-col items-center bg-white rounded-md  text-left m-2">
                                            <img src={story.image === '' ? 'https://picsum.photos/seed/picsum/200/150' : story.image}
                                                alt="cover-img" className="md:w-80 w-full h-60 object-cover p-4 rounded"
                                            />
                                            <div className="flex flex-col p-6">
                                                <h3 className="text-2xl font-semibold mb-2">
                                                    {story.title}
                                                </h3>
                                                <p lassName="text-gray-500 text-sm">{story.description}...</p>
                                            </div>

                                        </div>
                                    </a>
                                </Fade>
                            )
                        })}
                    </div>
            }
        </div>
    );
}

export default Techcrunch;