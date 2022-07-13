import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


function Info(){

const { id } = useParams();
const [ profileData, setProfileData ] = useState({})
const profileUrl = "http://localhost:9292/profiles"

useEffect(() => {
    fetch(`${profileUrl}/${id}`)
    .then(res => res.json())
    .then(data => setProfileData(data))
}, [])

const {name, age, gender, sexuality, location, info, image } = profileData

return (
    <div>
        <h1>{name}</h1>
        <img src = {image}/>
            <h3>{age}</h3>
            <h3>{gender}</h3>
            <h3>{location}</h3>
            <h3>{sexuality}</h3>
            <p>{info}</p>
    </div>
)
}

export default Info