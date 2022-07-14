import React from "react";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function BioForm({ bio }) {
    const { name, age, gender, sexuality, location, info, image } = bio

    return (
        <div className="container-bio">
            <Card className="bio-card" sx={{ maxWidth: 300 }}>
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
                    <Link to={`/bio/${bio.id}/edit`} className="button">Edit</Link>

                </CardContent>
            </Card>


        </div>
    )
}

export default BioForm;