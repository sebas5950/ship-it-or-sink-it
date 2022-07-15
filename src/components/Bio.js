import React from "react";
import BioForm from "./BioForm";

function Bio({ bio }) {

    return (
        <div>
            <BioForm bio={bio} />
        </div>
    )
}

export default Bio;