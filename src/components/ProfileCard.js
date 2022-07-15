import React from "react";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ProfileCard({ profile, handleUnmatch }) {


    return (
        <div className="card">

            <Card className="card-holder" sx={{ maxWidth: 345 }} >
                <CardMedia className="img" component="img" image={profile.image} alt="profile picture" />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {profile.name}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => handleUnmatch(profile.id)}>Unmatch</Button>
                    <Button><Link to={`/${profile.id}/info`}>Bio</Link></Button>
                </CardActions>
            </Card>

        </div>
    )
}

export default ProfileCard;