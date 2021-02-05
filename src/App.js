import React from 'react';
import tailwindlogo from './tailwind-css-logo.svg';
import reactlogo from './react-logo.png';

const App = () => {
  return (
    <div className="text-center mx-auto mt-40 mb-8 w-7/12">
      <div className="flex flex-row justify-center">
        <img src={reactlogo} alt="react" className="w-20 m-4" />
        <img src={tailwindlogo} alt="tailwind" className="w-20 m-4" />
      </div>

      <div className=" rounded-md bg-indigo-100 p-6 mb-6 ">
        <h1 className="text-4xl font-semibold">Create React App + Tailwind CSS</h1>
      </div>

      <a
        href="https://tailwindcss.com/docs/guides/create-react-app"
        className="text-xl font-semibold text-blue-600"
      >Refer docs for more.</a>

    </div>
  );
}

export default App;
