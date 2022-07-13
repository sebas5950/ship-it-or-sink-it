
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

//import logo from './logo.svg';
import './App.css';

import Matches from "./components/Matches.js"
import Bio from "./components/Bio.js"
import NavBar from "./components/NavBar.js"
import Info from "./components/Info.js"
import Swiper from "./components/Swiper.js"
import EditForm from "./components/EditForm";


function App() {

  const userURL = "http://localhost:9292/users"
  const [currentUser, setCurrentUser] = useState([]);
  // const bioURL = "http://localhost:9292/profiles"
  // const [bio, setBio] = useState([]);
  const profilesURL = "http://localhost:9292/profiles"
  const [profiles, setProfiles] = useState([]);


  
  useEffect(() => {
    async function goGetEm() {
      await fetch(userURL)
        .then((response) => response.json())
        .then(async (data) => {
          setCurrentUser(data[0]);
          const userId = data[0].id
          console.log(data[0])
          // return fetch(`${bioURL}/${userId}`)
          //   .then((response) => response.json())
          //   .then(async (data) => {
          //     setBio(data)
              await fetch(`${profilesURL}/swiper/${userId}`)
                .then((response) => response.json())
                .then(data => {
                  setProfiles(data)
                  console.log(data)
                })
            
        })
    }
    goGetEm()
  }, []);

// console.log(bio)
 

  
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/"
          element={<Bio bio={currentUser} />}>
        </Route>
        <Route path="/swiper" element={
  <Swiper currentUser={currentUser} profiles = {profiles} />}>
  </Route>
        <Route path="/matches" element={<Matches currentUser={currentUser} />}>
        </Route>
        <Route path = "/:id/Info" element = {<Info />}>
        </Route>
        <Route path = "/bio/:id/edit" element = {<EditForm currentUser={currentUser}/>}></Route>
      </Routes>

    </div>
  )
}

export default App;

{/* <Route path="/swiper" element={
  <Swiper currentUser={currentUser} profiles = {profiles} />}>
  </Route> */}

/* <Route path="/swiper" element = {
<Swiper {currentUser ={currentUser}
/>}
</Route> */