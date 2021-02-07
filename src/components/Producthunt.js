import React, { useEffect, useState } from 'react';
import Header from './Header';
import producthuntIcon from '../assets/images/producthunt.png';
import upvoteIcon from '../assets/icons/upvote.svg';


const KEY = 'VBKaBP3CsYNdjwrpq9svI1OVSdXQPP__cxA6MffDLhU';
const query = `{
    posts() {
        edges{
            cursor
            node{
                id
                name
                tagline
                description
                url
                votesCount
                thumbnail{
                    type
                    url
                }
            }
        }
    }
}`;


const Producthunt = () => {

    const [productsList, setProductsList] = useState([]);

    const getTopProducts = async () => {
        const opts = {
            headers: {
                Authorization: `Bearer ${KEY}`,
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            method: "POST",
            mode: "cors",
            // X-Frame-Options: "SAMEORIGIN"

            body: JSON.stringify({ query })
        };
        try {
            const response = await fetch(`https://api.producthunt.com/v2/api/graphql`, opts)
            const topProducts = await response.json();
            console.log(topProducts.data.posts.edges);
            setProductsList(topProducts.data.posts.edges);
        } catch (e) { alert('Oops! we got a temperory problem, Try after some time.') }

    };

    useEffect(() => {
        getTopProducts();
    }, [])

    return (
        <div>
            <Header
                icon={producthuntIcon}
                title='Product Hunt'
                borderColor='border-red-300'
            />

            <div className="flex flex-col justify-center p-4">

                {productsList.map(product => {
                    return (
                        <div key={product.node.id}
                            className="bg-white p-3 text-left m-2 rounded "
                        >
                            <a href={product.node.url} target="_blank" rel="noreferrer">
                                <div className="flex flex-row">
                                    <img src={product.node.thumbnail.url} alt="thumbnail"
                                        className="md:h-20 md:w-20 h-14 w-14 mr-4 rounded border-2"
                                    />
                                    <div className="flex flex-col my-auto">
                                        <h2 className="md:text-xl text-md font-semibold">{product.node.name}</h2>
                                        <span className="text-sm md:text-md">{product.node.tagline}</span>
                                    </div>

                                    <div className="text-center my-2 px-4 border-2 rounded h-14 w-14 flex flex-col mr-2 ml-auto justify-center">
                                        <img src={upvoteIcon} alt="upvote"
                                            className="h-4 w-4 mx-auto"
                                        />
                                        <span>{product.node.votesCount}</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Producthunt;