import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer'
import Upload from './components/Upload'
import Login from './components/Login'
import Videos from './components/Videos';

import Home from './components/Home';
import {BrowserRouter as Router,Route,Routes  } from 'react-router-dom'
import Signup from './components/Signup';
function App() {
  return (
   <Router>
<Header/>
<Routes>
  <Route path='/' element= {<Home/>}/>  
  <Route path='/videos' element={<Videos/>}/>
  <Route path='/upload' element={<Upload/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/signup' element={<Signup/>}/>

  



</Routes>

<Footer/>
   </Router>
  );
}

export default App;
