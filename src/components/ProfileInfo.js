import React from "react";


function ProfileInfo({ profile }) {

    return (
        <div className="card">
            <h1>{profile.name}</h1>
            <img src={profile.image} />
            <h3>{profile.age}</h3>
            <h3>{profile.location}</h3>
            <h3>{profile.gender} - {profile.sexuality}</h3>
        </div>
    )
}

export default ProfileInfo;