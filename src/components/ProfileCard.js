import React from "react";
import { Link } from "react-router-dom";

function ProfileCard({profile, currentUser}) {

    async function handleUnmatch() {
        await fetch(`http://localhost:9292/matches/${currentUser.id}/${profile.id}/delete`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        })
    }
  
    return (
        <div className="card">

            <h1>{profile.name}</h1>
            <img src = {profile.image}/>
            <button onClick={handleUnmatch}>Unmatch</button>
            <Link to={`/${profile.id}/info`}>Bio</Link>

        </div>
    )
}

export default ProfileCard;