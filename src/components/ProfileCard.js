import React from "react";
import { Link } from "react-router-dom";

function ProfileCard({ profile, handleUnmatch }) {


    return (
        <div className="card">

            <h1>{profile.name}</h1>
            <img src={profile.image} alt = {profile.name}/>
            <button onClick={() => handleUnmatch(profile.id)}>Unmatch</button>
            <Link to={`/${profile.id}/info`}>Bio</Link>

        </div>
    )
}

export default ProfileCard;