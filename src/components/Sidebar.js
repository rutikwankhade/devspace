import React from 'react';
import { Link } from 'react-router-dom';
import hashnodeIcon from '../assets/images/hashnode.png';
import devIcon from '../assets/images/dev.webp';
import hackernewsIcon from '../assets/images/hackernews.png';
import producthuntIcon from '../assets/images/producthunt.png';
import githubIcon from '../assets/images/github.png';



const Sidebar = () => {
    return (
        <div className="flex flex-row flex-wrap md:px-20 justify-center">
            <Link to="/">
                <div className="shadow-md w-40 transform hover:scale-105 duration-100 p-4 m-2 flex flex-col bg-white rounded-lg  text-center">
                    <img src={hashnodeIcon} alt="logo"
                        className="h-12 w-12 mx-auto"
                    />
                    <p className="text-xl font-semibold mt-2">Hashnode</p>
                </div>
            </Link>

            <Link to="/dev">
                <div className="shadow-md w-40 transform hover:scale-105 duration-100 p-4 m-2 flex flex-col bg-white rounded-lg  text-center">
                    <img src={devIcon} alt="logo"
                        className="h-12 w-12 mx-auto "
                    />
                    <p className="text-xl font-semibold mt-2">Dev.to</p>
                </div>
            </Link>

            <Link to="/hackernews">
                <div className="shadow-md w-40  transform hover:scale-105 duration-100 p-4 m-2 flex flex-col bg-white rounded-lg  text-center">
                    <img src={hackernewsIcon} alt="logo"
                        className="h-12 w-12 mx-auto"
                    />
                    <p className="text-xl font-semibold mt-2">HackerNews</p>
                </div>
            </Link>

            <Link to="/producthunt">
                <div className="shadow-md w-40 transform hover:scale-105 duration-100 p-4 m-2 flex flex-col bg-white rounded-lg  text-center">
                    <img src={producthuntIcon} alt="logo"
                        className="h-12 w-12 mx-auto "
                    />
                    <p className="text-xl font-semibold mt-2">Product Hunt</p>
                </div>
            </Link>

            <Link to="/github">
                <div className="shadow-md w-40 transform hover:scale-105 duration-100 p-4 m-2 flex flex-col bg-white rounded-lg  text-center">
                    <img src={githubIcon} alt="logo"
                        className="h-12 w-12 mx-auto "
                    />
                    <p className="text-xl font-semibold mt-2">Github</p>
                </div>
            </Link>

            <Link to="/techcrunch">
                <div className="shadow-md w-40 transform hover:scale-105 duration-100 p-4 m-2 flex flex-col bg-white rounded-lg  text-center">
                    <img src={githubIcon} alt="logo"
                        className="h-12 w-12 mx-auto "
                    />
                    <p className="text-xl font-semibold mt-2">Techcrunch</p>
                </div>
            </Link>

        </div>
    );
}

export default Sidebar;