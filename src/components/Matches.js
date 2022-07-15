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
    }, [currentUser]);

    async function handleUnmatch(profileId) {
        await fetch(`http://localhost:9292/matches/${currentUser.id}/${profileId}/delete`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        })
        .then(r=>r.json())
        .then(deletedMatch=>deleteMatches(deletedMatch))
    }

    function deleteMatches (deletedMatch) {
        const updatedMatches = matches.filter(match => match.id !== deletedMatch.id)
        setMatches(updatedMatches)
    }


    return (
        <div className="matches-card">
            {console.log(matches)}
            {matches.map(profile => <ProfileCard profile={profile} key={profile.id} currentUser={currentUser} handleUnmatch = {handleUnmatch}/>)}

        </div>
    )
}

export default Matches;