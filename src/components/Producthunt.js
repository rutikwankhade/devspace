import React, { useEffect } from 'react';
import Header from './Header';
import producthuntIcon from '../assets/images/producthunt.png';

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

    const getTopProducts = async () => {
        const opts = {
            headers: {
                Authorization: `Bearer ${KEY}`,
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            method: "POST",
            mode: "cors",
            body: JSON.stringify({ query })
        };

        const response = await fetch(`https://api.producthunt.com/v2/api/graphql`, opts)
        const topProducts = await response.json();
        console.log(topProducts.data.posts.edges)

    };

    useEffect(() => {
        getTopProducts();
    })

    return (
        <div>
            <Header
                icon={producthuntIcon}
                title='Product Hunt'
                borderColor='border-red-300'
            />
        </div>
    );
}

export default Producthunt;