
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

import Matches from "./components/Matches.js"
import Bio from "./components/Bio.js"
import NavBar from "./components/NavBar.js"

function App() {

  const userURL = "http://localhost:9292/users"
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    fetch(userURL)
      .then((response) => response.json())
      .then((data) => { 
        //console.log(data[0])
        setCurrentUser(data[0])
        }) 
  }, []);

    return (
        <div>
        <NavBar />
        <Routes>
            <Route exact path="/">
                <Bio currentUser ={currentUser}
                 />
            </Route>
            <Route path="/matches">
                <Matches currentUser ={currentUser}/>
            </Route>
        </Routes>
    </div>
    )
}

export default App;


/* <Route path="/swiper" currentUser ={currentUser}>
<Swiper 
/>
</Route> */