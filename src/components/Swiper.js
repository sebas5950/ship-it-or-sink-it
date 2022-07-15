import React from "react";
import SwiperCard from "./SwiperCard.js";
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';


function Swiper({ currentUser, profiles, profileCount, setProfileCount, isItTheEnd, setIsItTheEnd }) {

    const matchURL = "http://localhost:9292/matches"
    
    function handleLike() {
        checkForMatch(true)
        setProfileCount(profileCount + 1)
        if(profileCount === profiles.length-1){
        setIsItTheEnd(true)}
    }
    function handleDislike() {
        checkForMatch(false)
        setProfileCount(profileCount + 1)
        if(profileCount === profiles.length-1){
        setIsItTheEnd(true)}
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
    }
    console.log(profiles)
    return (
        <div>{isItTheEnd? <h3>Sorry, there are no more users in your area.</h3> :
        <div className="card">
            <Card sx={{ maxWidth: 300 }}>
                <span>
                <SwiperCard profile={profiles[profileCount]} />
                <Button onClick={handleDislike}>❌</Button>
                <Button onClick={handleLike}>✔️</Button>
            </span>

            </Card>
        </div>
}
        </div>
    )
}

export default Swiper;
