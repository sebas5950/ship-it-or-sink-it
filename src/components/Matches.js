import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard.js"

function Matches({ currentUser }) {
    // console.log(currentUser.id)

    const matchURL = "http://localhost:9292/matches"
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        fetch(`${matchURL}/${currentUser.id}`)
            .then((response) => response.json())
            .then(data => setMatches(data))
    }, []);

    console.log(matches)

    return (
        <div className="card">
            {matches.map(profile => <ProfileCard profile={profile} key={profile.id} currentUser={currentUser} />)}
        </div>
    )
}

export default Matches;