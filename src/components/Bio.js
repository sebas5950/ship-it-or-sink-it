import React, { useEffect, useState } from "react";
import BioForm from "./BioForm";

function Bio({ bio }) {

    return (
        <div className="before-bio">
            {/* <img src={bio.image} /> */}
            <BioForm bio={bio} />
        </div>
    )
}

export default Bio;