import React from "react";
import { Link } from "react-router-dom";

function ProfileCard({profile}) {
  
    return (
        <div className="card">
            {console.log(profile.name)}
            <h1>{profile.name}</h1>
            <img src = {profile.image}/>
            <Link to={`/${profile.id}/info`}>Bio</Link>
        </div>
    )
}

export default ProfileCard;