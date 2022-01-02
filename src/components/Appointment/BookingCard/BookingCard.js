import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({booking,date}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function openModal() {
        setModalIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        //   subtitle.style.color = '#f00';
    }

    function closeModal() {
        setModalIsOpen(false);
    }
    return (
        <div className=" col-md-4 mb-5">
            <div className="singleCard text-center card p-3">
                <h5 className="text-brand">{booking.name}</h5>
                <h6>{booking.time}</h6>
                <small>{booking.space} SPACE AVAILABLE</small>
                <button onClick={openModal} className="btn btn-brand text-uppercase">Book Appointment</button>
                <AppointmentForm modalIsOpen={modalIsOpen} modalClose={closeModal} afterOpenModal={afterOpenModal}></AppointmentForm>

            </div>
            
        </div>
    );
};

export default BookingCard;