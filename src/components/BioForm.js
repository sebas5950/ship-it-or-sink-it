import React from "react";
import { Link } from "react-router-dom";


function BioForm({ bio }) {

return (
    <div>
        <h1>{bio.name}</h1>
        <img src = {bio.image}/>
            <h3>{bio.age}</h3>
            <h3>{bio.gender}</h3>
            <h3>{bio.location}</h3>
            <h3>{bio.sexuality}</h3>
            <p>{bio.info}</p>
            <Link to={`/bio/${bio.id}/edit`} className="button">
                Edit
          </Link>
   
    </div>


)}

export default BioForm;