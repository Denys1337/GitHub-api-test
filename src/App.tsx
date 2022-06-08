import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import UserDetails from './components/userDetails/UserDetails';
import Users from './components/Users';

const App = ():JSX.Element => {
  
  return (
    <div className="App">
 <BrowserRouter>
      
      <Routes>
        <Route path = '/' element= {<Users/>}/>
        <Route path='/user/:id' element={<UserDetails/>} />
      </Routes>
    </BrowserRouter>
      
   
    </div>
  );
}

export default App;
