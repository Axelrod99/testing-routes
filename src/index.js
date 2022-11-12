import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Careers from './component/Careers';
import About from './component/About';
import Project from './component/Project';
import Contact from './component/Contact';


ReactDOM.render(
   <Router>
    <Routes>
      <Route path='/' element={<App/>}/> 
      <Route path='/Careers' element={<Careers/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Project' element={<Project/>}/>
      <Route path='/Contact' element={<Contact/>}/>
    </Routes>
   </Router>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

