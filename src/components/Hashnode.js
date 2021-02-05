import React, { useState, useEffect } from 'react';



const query = `{
    storiesFeed(type:BEST)
        {
            title,
            author
            {
                username,
                blogHandle,
                publicationDomain
            },
            coverImage,
            slug,
            dateFeatured,
            brief,
            cuid
        }
    }
  `;

const Hashnode = () => {

    const [feedPosts, setFeedPosts] = useState([]);

    const fetchPosts = async () => {
        const response = await fetch('https://api.hashnode.com', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ query }),
        })
        const apiResponse = await response.json();
        setFeedPosts(apiResponse.data.storiesFeed)
        console.log(feedPosts);
    };

    useEffect(() => {
        fetchPosts();
    })

    return (
        <div>
            <h1 className="text-2xl font-semibold p-2 border-b-2 bg-white">Hashnode</h1>
            <div className="flex flex-row flex-wrap  justify-center">
                {feedPosts.map(post => {
                    return (
                        <a href={`https://${post.author.publicationDomain === '' ? post.author.blogHandle + '.hashnode.dev/' : post.author.publicationDomain}${post.slug}`}
                            target="_blank" rel="noreferrer" Key={post.cuid}
                        >
                            <div className="w-72 h-72 py-auto shadow flex flex-col bg-white rounded-md p-4 text-left m-2">
                                <img src={post.coverImage === '' ? 'https://picsum.photos/seed/picsum/200/150' : post.coverImage} alt="cover-img" className="rounded" />
                                <h3 className="text-xl mt-2">{post.title}</h3>
                            </div>
                        </a>
                    )
                })}
            </div>
        </div>
    );
}

export default Hashnode;