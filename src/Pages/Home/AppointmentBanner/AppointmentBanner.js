import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';


const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(113, 122, 175, 0.4)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: '100px',
    backgroundPosition: 'center',
}


const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: '600px', marginTop: '-150px' }}
                        src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', textAlign: 'left' }}>
                    <Box>
                        <Typography sx={{ mb: 5 }} variant="h5" style={{ color: '#1876D1', fontWeight: 800 }}>
                            Appointment
                        </Typography>
                        <Typography sx={{ mb: 5 }} variant="h3" style={{ color: 'white' }}>
                            Make an Appointment
                        </Typography>
                        <Typography sx={{ mb: 5 }} variant="h6" style={{ color: 'white', fontWeight: 300 }}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis animi saepe rem provident quasi architecto impedit reprehenderit praesentium beatae perspiciatis.
                        </Typography>
                        <Button sx={{ mb: 5 }} variant='contained'>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;