import React, { useEffect, useState } from "react";
import ProfileInfo from "./ProfileCard.js"
import SwiperCard from "./SwiperCard.js";
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';


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
            <Card sx={{ maxWidth: 300 }}>
                <span>
                <SwiperCard profile={profiles[profileCount]} />
                <Button onClick={handleDislike}>❌</Button>
                <Button onClick={handleLike}>✔️</Button>
            </span>
            </Card>
        </div>
    )
}

export default Swiper;