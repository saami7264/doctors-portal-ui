import { Button, Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date, setBookingSuccess }) => {

    const { name, time, space } = booking;

    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);

    return (
        <>
            <Grid item xs={12} sm={2} md={4} >

                <Paper style={{ padding: '5px' }} elevation={3}>
                    <h3 style={{ color: '#1876D1', fontWeight: '800' }}>{name}</h3>
                    <h5 style={{ color: 'black', fontWeight: '400' }}>{time}</h5>
                    <h6 style={{ color: 'gray' }}>{space} SPACES AVAILABLE</h6>

                    <Button sx={{ mb: 5 }} variant='contained' onClick={handleBookingOpen}>BOOK APPOINTMENT</Button>
                </Paper>

            </Grid>
            <BookingModal
                booking={booking}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
                date={date}
                setBookingSuccess={setBookingSuccess}
            ></BookingModal>
        </>
    );
};

export default Booking;