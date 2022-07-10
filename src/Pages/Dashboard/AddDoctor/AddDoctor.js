import { Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);
    // same as onChange
    // const handleName = (e) => {
    //     setName(e.target.value)
    // }
    const handleSubmit = e => {
        e.preventDefault();
        if(!image){
            return;
        };
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);
        fetch('https://gentle-falls-83113.herokuapp.com/doctors', {
            method: 'POST',
            body: formData
            })
            .then(res => res.json())
            .then(data => {
            // console.log('Success:', data);
            if(data.insertedId){
                setSuccess('doctor added successfully');
                console.log('doctor added successfully');
            }
            })
            .catch(error => {
            console.error('Error:', error);
            });
    }
    //end handleSubmit
    return (
        <div>
            <h2> Add a doctor</h2>
            <form onSubmit={handleSubmit}>
                 <TextField 
                 sx={{width:'50%'}}
                 label="Name" 
                 type="text"
                 required
                 onChange = {e => setName(e.target.value)}
                 variant="standard" />
                 <br/>
                 <TextField 
                 sx={{width:'50%'}}
                 label="Email" 
                 type="email"
                 required
                 onChange = {e => setEmail(e.target.value)}
                 variant="standard" />
                 <br/>
                 <Input accept="image/*" type="file"  
                //  onChange = {e => console.log(e.target.files[0])} />
                 onChange = {e => setImage(e.target.files[0])}
                  />
                  {/* files array like object */}
                 <br />
                <Button variant="contained" type="submit">
                   Add Doctor
                </Button>
            </form>
            {success && <p style={{color : 'green'}}>{success}</p>}
        </div>
    );
};

export default AddDoctor;