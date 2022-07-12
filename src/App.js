
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

//import logo from './logo.svg';
import './App.css';

import Matches from "./components/Matches.js"
import Bio from "./components/Bio.js"
import NavBar from "./components/NavBar.js"
import Info from "./components/Info.js"

function App() {

  const userURL = "http://localhost:9292/users"
  const [currentUser, setCurrentUser] = useState([]);
  const bioURL = "http://localhost:9292/profiles"
  const [bio, setBio] = useState([]);

  useEffect(() => {
    async function goGetEm() {
      await fetch(userURL)
      .then((response) => response.json())
      .then(async (data) => { 
        setCurrentUser(data[4]);
        const userId = data[4].id
        return fetch(`${bioURL}/${userId}`)
          .then((response) => response.json())
          .then(data => setBio(data))
      })}
      goGetEm()
  }, []);

  
 

    return (
        <div>
        <NavBar />
        <Routes>
            <Route exact path="/"
            element = {<Bio bio ={bio}/>}>
            </Route>
            <Route path="/matches" element = {<Matches currentUser ={currentUser}/>}>
            </Route>
            <Route path = "/:id/Info" element = {<Info />}>
            </Route>
        </Routes>
    </div>
    )
}

export default App;


/* <Route path="/swiper" element = {
<Swiper {currentUser ={currentUser}
/>}
</Route> */