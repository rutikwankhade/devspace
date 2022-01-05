import React from 'react';
import { Link } from 'react-router-dom';
import hashnodeIcon from '../assets/images/hashnode.png';
import devIcon from '../assets/images/dev.webp';
import hackernewsIcon from '../assets/images/hackernews.png';
import producthuntIcon from '../assets/images/producthunt.png';
import githubIcon from '../assets/images/github.png';
import techcrunchIcon from '../assets/images/techcrunch.png';




const Sidebar = () => {
    return (
        <div className="flex  flex-col justify-center my-4 bg-white rounded-xl shadow-sm">
            <Link to="/">
                <div className="transform hover:scale-105 hover:bg-indigo-50 duration-100 p-4 flex rounded-xl items-center bg-white ">
                    <img src={hashnodeIcon} alt="logo"
                        className="h-12 w-12 "
                    />
                    <p className="text-2xl px-4 font-bold text-gray-700">Hashnode</p>
                </div>
            </Link>

            <Link to="/dev">
                <div className=" transform hover:scale-105 hover:bg-indigo-50 duration-100 p-4  flex items-center rounded-xl bg-white   ">
                    <img src={devIcon} alt="logo"
                        className="h-12 w-12 "
                    />
                    <p className="text-2xl px-4 font-bold text-gray-700">Dev.to</p>
                </div>
            </Link>

            <Link to="/hackernews">
                <div className=" transform hover:scale-105 hover:bg-indigo-50 duration-100 p-4  flex items-center rounded-xl bg-white   ">
                    <img src={hackernewsIcon} alt="logo"
                        className="h-12 w-12 "
                    />
                    <p className="text-2xl px-4 font-bold text-gray-700">HackerNews</p>
                </div>
            </Link>

            <Link to="/producthunt">
                <div className=" transform hover:scale-105 hover:bg-indigo-50 duration-100 p-4 flex items-center  rounded-xl bg-white  ">
                    <img src={producthuntIcon} alt="logo"
                        className="h-12 w-12  "
                    />
                    <p className="text-2xl px-4 font-bold text-gray-700">Product Hunt</p>
                </div>
            </Link>

            <Link to="/techcrunch">
                <div className="transform hover:scale-105 hover:bg-indigo-50 duration-100 flex p-4 items-center  rounded-xl bg-white  ">
                    <img src={techcrunchIcon} alt="logo"
                        className="h-12 w-12 "
                    />
                    <p className="text-2xl px-4 font-bold text-gray-700">Techcrunch</p>
                </div>
            </Link>

            <Link to="/github">
                <div className=" transform hover:scale-105 hover:bg-indigo-50 duration-100 p-4  flex items-center rounded-xl bg-white  ">
                    <img src={githubIcon} alt="logo"
                        className="h-12 w-12  "
                    />
                    <p className="text-2xl px-4 font-bold text-gray-700">Github</p>
                </div>
            </Link>



        </div>
    );
}

export default Sidebar;