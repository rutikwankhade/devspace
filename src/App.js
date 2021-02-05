import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Hashnode from './components/Hashnode';
import Dev from './components/Dev'
import Hackernews from './components/Hackernews'
import Producthunt from './components/Producthunt'



const App = () => {
  return (
    <div className=" bg-indigo-600 text-center mx-auto p-4 ">
      <BrowserRouter>

        <div className="p-4 w-40 bg-white  rounded ">
          <Route exact path="/" component={Hashnode} />
          <Route exact path="/dev" component={Dev} />
          <Route exact path="/hackernews" component={Hackernews} />
          <Route exact path="/producthunt" component={Producthunt} />
        </div>

      </BrowserRouter>

    </div>
  );
}

export default App;
