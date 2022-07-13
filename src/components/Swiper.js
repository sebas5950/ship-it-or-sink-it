import React, {useEffect, useState} from "react";
import ProfileInfo from "./ProfileCard.js"

function Swiper({currentUser, profiles}) {
    
    const matchURL = "http://localhost:9292/matches"
    
    const [profileCount, setProfileCount] = useState(0);
    
    function handleLike() {
        checkForMatch(true)
        setProfileCount(profileCount + 1)
    }
    function handleDislike() {
        checkForMatch(false)
        setProfileCount(profileCount + 1)
    }

    function checkForMatch(bool){
        fetch(`${matchURL}/${currentUser.id}/${profiles[profileCount].id}/check`)
        .then(response => response.json())
        .then(data => {console.log(data)
            updateMatch(bool)
        })
        return bool
    }
    
    function updateMatch(bool) {
         fetch(`${matchURL}/${currentUser.id}/${profiles[profileCount].id}/update`, {
            method : "PATCH",
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
        <div className="card">
            <ProfileInfo profile = {profiles[profileCount]}/>
            <span>
            <button onClick = {handleDislike}>❌</button>
            <button onClick = {handleLike}>✔️</button>
            </span>
        </div>
    )
}

export default Swiper;