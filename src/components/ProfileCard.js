import React from "react";
import { Link } from "react-router-dom";

function ProfileCard({profile}) {
  
    return (
        <div className="card">

            <h1>{profile.name}</h1>
            <img src = {profile.image}/>
            <button>un</button>
            <Link to={`/${profile.id}/info`}>More Info</Link>

        </div>
    )
}

export default ProfileCard;