import React, {useEffect, useState} from "react";
import ProfileCard from "./ProfileCard.js"

function Matches({currentUser}) {
    
    const matchURL = "http://localhost:9292/matches"
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        console.log(currentUser.id)
        fetch(`${matchURL}/${currentUser.id}`)
          .then((response) => response.json())
          .then(data => setMatches(data))
      }, []);

    return (
        <div className="card">
            {console.log(matches)}
            {matches.map(profile => <ProfileCard profile = {profile} key={profile.id}/>)}
        </div>
    )
}

export default Matches;