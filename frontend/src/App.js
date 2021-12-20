// import React, {Component, useState, useEffect} from 'react';
import './App.css';
//import AppBar from './components/Appbar';
import Login from './components/login';

function App () {
  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   fetch('/api/backend')
  //       .then(response => response.text())
  //       .then(message => {
  //         setMessage(message);
  //       });
  // },[])
  // return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo"/>
  //         <h1 className="App-title">{message}</h1>
  //       </header>
  //       <p className="App-intro">
  //         This is a test to check for correct branch commit.
  //       </p>
  //     </div>
  // )
  return (   <div className='App'>
  <Login/>
</div> );

}

export default App;