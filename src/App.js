// App.js

import React from 'react';
import './App.css'
import Sidebar from './components/Sidebar';
import MainBox from './components/MainBox/MainBox';

function App() {
  return (
    <div class="container">
        <Sidebar/>
        <MainBox/>
    </div>
  );
}

export default App;
