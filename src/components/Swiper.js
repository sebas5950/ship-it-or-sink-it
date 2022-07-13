import React, { useEffect, useState } from "react";
import ProfileInfo from "./ProfileCard.js"
import SwiperCard from "./SwiperCard.js";

function Swiper({ currentUser, profiles, profileCount, setProfileCount }) {

    const matchURL = "http://localhost:9292/matches"
    //const [profilesToSwipe, setProfilesToSwipe] = useState(profileList);
    

    // useEffect(()=> {
    //     setProfilesToSwipe(window.localStorage.getItem('profilesToSwipe'))
    // }, [])
    // useEffect(()=> {
    //     window.localStorage.setItem('profilesToSwipe', profilesToSwipe)
    // }, [profilesToSwipe])

    function handleLike() {
        checkForMatch(true)
        setProfileCount(profileCount + 1)
        //handleSwipe()
    }
    function handleDislike() {
        checkForMatch(false)
        setProfileCount(profileCount + 1)
        //handleSwipe()
    }

    // function handleSwipe() {
    //     let newProfiles = [...profilesToSwipe].shift()
    //     setProfilesToSwipe(newProfiles)
    // }

    async function checkForMatch(bool) {
        await fetch(`${matchURL}/${currentUser.id}/${profiles[profileCount].id}/check`)
            .then(response => response.json())
            .then(async (data) => {
                console.log(data)
                await updateMatch(bool)
            })
        console.log(bool)
    }

    async function updateMatch(bool) {
        await fetch(`${matchURL}/${currentUser.id}/${profiles[profileCount].id}/update`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                swipe_user: bool
            })
        })
            .then(resp => resp.json())
            .then(data => console.log(data))
    }

    return (
        <div className="card">
            <SwiperCard profile={profiles[profileCount]} />
            <span>
                <button onClick={handleDislike}>❌</button>
                <button onClick={handleLike}>✔️</button>
            </span>
        </div>
    )
}

export default Swiper;