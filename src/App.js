import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';

import Hashnode from './components/Hashnode';
import Dev from './components/Dev'
import Hackernews from './components/Hackernews'
import Producthunt from './components/Producthunt'
import Github from './components/Github'
import Techcrunch from './components/Techcrunch'


const App = () => {
  return (
    <div className="  mx-auto ">

      <BrowserRouter>
        <div className="flex md:flex-row flex-col">
        
          <div className="md:w-1/3">
            <Sidebar />
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
