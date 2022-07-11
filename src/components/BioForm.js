import React from "react";

function BioForm({ bio }) {

return (
<form>
<label>
    Name:
    <input type="text" name="name" placeholder= {bio.name}/>
</label>
    Age:
<label>
    <input type="number" name="age" placeholder={bio.age}/>
</label>
    Location:
<label>
    <input type="text" name="location" placeholder={bio.location}/>
</label>
    Gender:
<label>
    <select name="gender" placeholder={bio.gender}>
        <option value="1">Male</option>
        <option value="2">Female</option>
        <option value="3">Nonbinary</option>
      </select>
</label>
    Sexuality:
<label>
<select name="sexuality" placeholder={bio.sexuality}>
        <option value="1">Gay</option>
        <option value="2">Straight</option>
        <option value="3">Bisexual</option>
      </select>
</label>    
    Photo:
<label>
    <input type="text" name="image" placeholder={bio.image}/>
</label>
</form>)}

export default BioForm;