import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";


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
        <div className="card">
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" placeholder={name} value={formData.name} onChange={handleChange} />
                </label>
                Age:
                <label>
                    <input type="number" name="age" placeholder={age} value={formData.age} onChange={handleChange} />
                </label>
                Location:
                <label>
                    <input type="text" name="location" placeholder={location} value={formData.location} onChange={handleChange} />
                </label>
                Gender:
                <label>
                    <select name="gender" placeholder={gender} value={formData.gender} onChange={handleChange}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="nonbinary">Nonbinary</option>
                    </select>
                </label>
                Sexuality:
                <label>
                    <select name="sexuality" placeholder={sexuality} value={formData.sexuality} onChange={handleChange}>
                        <option value="gay">Gay</option>
                        <option value="straight">Straight</option>
                        <option value="bisexual">Bisexual</option>
                    </select>
                </label>
                Photo:
                <label>
                    <input type="text" name="image" placeholder='image' value={formData.image} onChange={handleChange} />
                </label>
                <label>
                    <textarea type="text" name="info" placeholder={info} value={formData.info} onChange={handleChange} />
                </label>
                <button>Save</button>
            </form>
        </div>
    )
}

export default EditForm;