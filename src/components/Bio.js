import React from "react";
import BioForm from "./BioForm";

function Bio({ bio }) {

    return (
        <div className="card">
            {/* <img src={bio.image} /> */}
            <BioForm bio={bio} />
        </div>
    )
}

export default Bio;