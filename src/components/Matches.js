import React, {useEffect, useState} from "react";
import ProfileCard from "./ProfileCard.js"

function Matches({currentUser}) {
    
    const MatchURL = "http://localhost:9292/matches"
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        fetch(`${MatchURL}/${currentUser.id}`)
          .then((response) => response.json())
          .then(data => setMatches(data));
      }, []);

    return (
        <div className="card">
            {matches.map(match => <ProfileCard profile = {match} key={match.id}/>)}
        </div>
    )
}

export default Matches;