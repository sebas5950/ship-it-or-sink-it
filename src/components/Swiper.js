import React, {useState} from "react";
import SwiperCard from "./SwiperCard.js";

function Swiper({ currentUser, profiles, profileCount, setProfileCount }) {

    const matchURL = "http://localhost:9292/matches"
    const [isItTheEnd, setIsItTheEnd] = useState(false)
    
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

    return (
        <div>{isItTheEnd? <h3>Sorry, there are no more users in your area.</h3> :
        <div className="card">
            <SwiperCard profile={profiles[profileCount]} />
            <span>
                <button onClick={handleDislike}>❌</button>
                <button onClick={handleLike}>✔️</button>
            </span>
        </div>}</div>
    )
}

export default Swiper;