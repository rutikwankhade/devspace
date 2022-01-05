import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';

import Hashnode from './components/Hashnode';
import Dev from './components/Dev'
import Hackernews from './components/Hackernews'
import Producthunt from './components/Producthunt'
import Github from './components/Github'
import Techcrunch from './components/Techcrunch'
// import logo from './assets/images/'


const App = () => {
  return (
    <div className="  mx-auto ">

      <BrowserRouter>
        <div className="flex md:flex-row flex-col">

          <div className="bg-purple-50  p-4 md:w-1/3 md:h-screen h-full">


            <div className="bg-white p-4 flex items-center rounded-xl shadow-sm">

              <span className="bg-indigo-100 p-2 text-2xl rounded-xl mr-2">🚀</span>
              <div>
                <h1 className="text-2xl text-indigo-500 font-bold   ">
                  Devspace
                </h1>
                <span className="text-gray-500 italic text-sm">
                  Top posts from the best dev sites.
                </span>
              </div>

            </div>

            <Sidebar />

            <div className="my-2 p-2 text-gray-400 flex flex-row justify-evenly">
              <a href="https://github.com/rutikwankhade/devspace" target="_blank" rel="noreferrer" className="flex">
                <span className="text-sm font-semibold  hover:text-gray-600">
                  ⭐ Star on Github
                </span>
              </a>

              <a href="https://rutikwankhade.dev" target="_blank" rel="noreferrer" className="flex">
                <span className="text-sm ml-auto mr-2 font-semibold hover:text-gray-600">
                  Rutik Wankhade
                </span>
              </a>
            </div>

          </div>

          <div className=" bg-gray-50 w-full  overflow-y-scroll max-h-screen">
            <Route exact path="/" component={Hashnode} />
            <Route exact path="/dev" component={Dev} />
            <Route exact path="/hackernews" component={Hackernews} />
            <Route exact path="/producthunt" component={Producthunt} />
            <Route exact path="/github" component={Github} />
            <Route exact path="/techcrunch" component={Techcrunch} />


          </div>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
