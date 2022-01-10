import React, { useState } from 'react';
import NavBar from '../../Home/NavBar/NavBar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date()); 
    const handleDateChange = date => {
        setSelectedDate(date);
    }
    return (
        <div style={{margin:"0 20px"}}>
            <NavBar></NavBar>
            <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
            <BookAppointment date={selectedDate}></BookAppointment>
        </div>
    );
};

export default Appointment;