import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';

import Hashnode from './components/Hashnode';
import Dev from './components/Dev'
import Hackernews from './components/Hackernews'
import Producthunt from './components/Producthunt'
import Github from './components/Github'

const App = () => {
  return (
    <div className=" text-center mx-auto ">

      <BrowserRouter>
        <div className="flex flex-row">

          <div className=" bg-indigo-500 w-1/2  h-screen py-20">
            <h1 className="text-4xl font-bold m-8 text-white">Devspace</h1>
            <Sidebar />
          </div>

          <div className="w-1/2 bg-gray-100 p-2">
            <Route exact path="/" component={Hashnode} />
            <Route exact path="/dev" component={Dev} />
            <Route exact path="/hackernews" component={Hackernews} />
            <Route exact path="/producthunt" component={Producthunt} />
            <Route exact path="/github" component={Github} />

          </div>
        </div>

      </BrowserRouter>

    </div>
  );
}

export default App;
