import React from "react";


function SwiperCard({profile}) {
  
    return (
        <div className="card">

            <h1>{profile.name}</h1>
            <img src = {profile.image}/>

        </div>
    )
}

export default SwiperCard;