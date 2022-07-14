import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Info() {

    let navigate = useNavigate()
    const { id } = useParams();
    const [profileData, setProfileData] = useState({})
    const profileUrl = "http://localhost:9292/profiles"

    useEffect(() => {
        fetch(`${profileUrl}/${id}`)
            .then(res => res.json())
            .then(data => setProfileData(data))
    })

    const { name, age, gender, sexuality, location, info, image } = profileData

    function handleClick() {

        navigate(-1)
    }

    return (
        <div>

            <Card className="info-card" sx={{ maxWidth: 300 }}>
                <CardMedia
                    className="card-image"
                    component="img"
                    image={image}
                    alt="green iguana"
                />
                <CardContent className="card-content">
                    <Typography className="info-name" gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography className="card-desc" variant="subtitle1">{`Age: ${age}`}</Typography>
                    <Typography className="card-desc" variant="subtitle1">{`Gender: ${gender}`}</Typography>
                    <Typography className="card-desc" variant="subtitle1">{`Location: ${location}`}</Typography>
                    <Typography className="card-desc" variant="subtitle1">{`Sexuality: ${sexuality}`}</Typography>
                    <Typography className="card-desc" variant="body1" color="text.secondary">{`Bio: ${info}`}</Typography>
                    <Button className="button" onClick={handleClick}><ArrowBackIcon /></Button>
                </CardContent>
            </Card>


        </div>
    )
}

export default Info
