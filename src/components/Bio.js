import React, { useEffect, useState } from "react";
import BioForm from "./BioForm";

function Bio({ currentUser }) {

    const bioURL = "http://localhost:9292/profiles"
    const [bio, setBio] = useState([]);

    // useEffect(() => {
    //     // fetch(`${bioURL}/${currentUser.id}`)
    //     //     .then((response) => response.json())
    //     //     .then(data => setBio(data));
    // }, []);

    return (
        <div className="card">
            {console.log(currentUser)}
        </div>
    )
}

export default Bio;

{/* <img src={bio.image} />
<BioForm bio={bio} /> */}