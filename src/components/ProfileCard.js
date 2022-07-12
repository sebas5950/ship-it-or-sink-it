import React from "react";
import { Link } from "react-router-dom";

function ProfileCard({profile}) {
  
    return (
        <div className="card">
            {console.log(profile)}
            <h1>{profile.name}</h1>
            <img src = {profile.image}/>
            <Link to = {"ProfileInfo"} profile ={profile}>Bio</Link>
        </div>
    )
}

export default ProfileCard;