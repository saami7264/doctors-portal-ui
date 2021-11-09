import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import { Button, Typography, Container } from '@mui/material';


const bannerBg = {
    background: `url(${bg})`
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: '400px'
}

const TopBanner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid style={{ ...verticalCenter, textAlign: 'left' }} item xs={2} md={6}>
                    <Box>
                        <Typography variant='h2' style={{ fontWeight: 400 }}>
                            Your New Smile <br /> Starts Here
                        </Typography>
                        <Typography variant='h6' sx={{ my: 3, fontSize: 13, color: 'gray' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde est esse omnis eaque placeat magnam consequuntur. Rem totam ullam aperiam!
                        </Typography>
                        <Button sx={{ mb: 5 }} variant='contained'>Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: '600px' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default TopBanner;