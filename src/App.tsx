import React from 'react';
import './App.css';

import RouterIndex from './routes/routerIndex';

function App() {
  return (
    <div className="app">
      <h1 className='text-3xl font-bold underline text-red-900'>Welcome to the session</h1>
      <p className='text-4x1 font-semibold text-blue-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quas atque recusandae odit numquam labore aut omnis! Ratione delectus, laudantium molestiae commodi ex perferendis. Reiciendis iure officiis aperiam rem quibusdam?</p>
      <RouterIndex/>
    </div>
  );
}

export default App;
