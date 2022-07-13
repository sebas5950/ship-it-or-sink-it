import React from "react";
import { Link } from "react-router-dom";


function SwiperCard({ profile }) {

    return (
        <div className="card">
            <h1>{profile.name}</h1>
            <img src={profile.image} />
            <Link to={`/${profile.id}/info`}>More Info</Link>
        </div>
    )
}

export default SwiperCard;