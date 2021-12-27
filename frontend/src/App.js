import React from 'react';
import './App.css';
import Feed from './components/feed';
import Login from './components/login';
import Register from './components/register'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {useState} from 'react';

function App () {
  var stompClient = null;

  const [user, setUser] = useState('Thomas');

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login setUser={setUser}/>}/>
          <Route  path="/register" element={<Register/>}/>
          <Route path="/feed" element={<Feed user={user} stompClient={stompClient}/>} isPrivate/>
          <Route element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
