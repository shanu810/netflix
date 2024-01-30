// import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import { action,originals } from './urls'
// import {Route,Routes} from 'react-router-dom';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import axios from 'axios';
import { useState } from 'react' 



function App() {
  const [state,setState] = useState([])

  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost  url={action} title='Action' isSmall />
      <RowPost  url={action} title='Action' isSmall />
      
    </div>
  );
}

export default App;
