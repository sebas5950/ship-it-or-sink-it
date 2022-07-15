import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function EditForm({ currentUser, setCurrentUser }) {

    let navigate = useNavigate()
    const { name, age, gender, sexuality, info, location, image } = currentUser
    const { id } = useParams()
    let starterFormData = {
        name: name,
        age: age,
        gender: gender,
        sexuality: sexuality,
        info: info,
        location: location,
        image: image,
    }
    const [formData, setFormData] = useState(starterFormData);

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`http://localhost:9292/users/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => setCurrentUser(data))
        navigate(`/`)
    }

    function handleChange(e) {
        const { value, name } = e.target
        setFormData({ ...formData, [name]: value })
    }

    return (
        <div className="form-wrapper">
            <form className="form-card" onSubmit={handleSubmit}>
                <label className="label-color">
                    Name:
                </label>
                <TextField className="input-box" type="text" name="name" placeholder={name} value={formData.name} onChange={handleChange} />
                <label className="label-color">
                    Age:
                </label>
                <TextField className="input-box" type="number" name="age" placeholder={age} value={formData.age} onChange={handleChange} />
                <label className="label-color">
                    Location:
                </label>
                <TextField className="input-box" type="text" name="location" placeholder={location} value={formData.location} onChange={handleChange} />
                <label className="label-color">
                    Gender:
                </label >
                <select className="drop-down" name="gender" placeholder={gender} value={formData.gender} onChange={handleChange}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="nonbinary">Nonbinary</option>
                </select>
                <label className="label-color">
                    Sexuality:
                </label>
                <select className="drop-down" name="sexuality" placeholder={sexuality} value={formData.sexuality} onChange={handleChange}>
                    <option value="gay">Gay</option>
                    <option value="straight">Straight</option>
                    <option value="bisexual">Bisexual</option>
                </select>
                <label className="label-color">
                    Photo:
                </label>
                <TextField className="input-box" type="text" name="image" placeholder='image' value={formData.image} onChange={handleChange} />

                <label className="label-color">
                    Bio:
                </label>
                <TextField
                    className="input-box"
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    defaultValue="Default Value" type="text" name="info" placeholder={info} value={formData.info} onChange={handleChange} />

                <Button className="save-button" variant="contained" > Save </Button>
            </form>
        </div>
    )
}

export default EditForm;