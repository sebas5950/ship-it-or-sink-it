import React from "react";
import { Link } from "react-router-dom";

function ProfileCard({profile}) {
  
    return (
        <div className="card">
            <h1>{profile.name}</h1>
            <img src = {profile.image}/>
            
            <Link to={`/${profile.id}/Info`}>Bio</Link>
        </div>
    )
}

export default ProfileCard;