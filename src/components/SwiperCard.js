import React from "react";
import { Link } from "react-router-dom";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function SwiperCard({ profile }) {

    return (
        <div className="card">

                <CardMedia className="img" component="img" image={profile.image} alt="profile picture" />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {profile.name}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button><Link to={`/${profile.id}/info`}>Bio</Link></Button>
                </CardActions>

        </div>
    )
}

export default SwiperCard;
