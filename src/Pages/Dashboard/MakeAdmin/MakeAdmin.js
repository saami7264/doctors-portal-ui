import { Alert, Button, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://still-springs-10082.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true)
                }
            })

        e.preventDefault()
    }

    return (
        <div>
            <h2>Make An Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    variant="standard"
                    onBlur={handleOnBlur}
                />
                <Button variant="contained" type="submit">Make Admin</Button>
            </form>
            {success && <Alert severity="success">New Admin Added Successfully</Alert>}
        </div>
    );
};

export default MakeAdmin;