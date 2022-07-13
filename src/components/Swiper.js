import React, { useEffect, useState } from "react";
import ProfileInfo from "./ProfileCard.js"
import SwiperCard from "./SwiperCard.js";

function Swiper({ currentUser, profiles, profileCount, setProfileCount }) {

    const matchURL = "http://localhost:9292/matches"

    function handleLike() {
        checkForMatch(true)
        setProfileCount(profileCount + 1)
    }
    function handleDislike() {
        checkForMatch(false)
        setProfileCount(profileCount + 1)
    }

    async function checkForMatch(bool) {
        await fetch(`${matchURL}/${currentUser.id}/${profiles[profileCount].id}/${bool}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                swipe_user: bool
            })
        })
        // .then(response => response.json())
        // .then(async (data) => {
        //     console.log(data)
        //     const user = data.id
        //     console.log(user)
        //     updateMatch(bool, user)
        // })
        console.log(bool)
    }

    // function updateMatch(bool, user) {
    //     fetch(`${matchURL}/${currentUser.id}/${user}/update`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json",
    //             Accept: "application/json",
    //         },
    //         body: JSON.stringify({
    //             swipe_user: bool
    //         })
    //     })
    // }

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