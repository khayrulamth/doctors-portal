import React from 'react';
import './Appointment.css';
import doctor from '../../../Images/doctor.png';

const Appointment = () => {
    return (
        <section className="appointment my-5">
            <div className="row d-flex text-white justify-content-center">
                <div className="img-doctor col-md-6 d-flex text-white justify-content-end">
                    <img className='doctor-img' style={{ height: '500px', }} src={doctor} alt="" />
                </div>
                <div style={{ height: '600vh' }} className="d-flex justify-content-start info-container col-md-6">
                    <div>
                        <h4 style={{ color: '#1cc7c1' }}>Appointment</h4>
                        <h2 style={{ fontWeight: 'bold' }}>Make an Appointment <br /> Today</h2>
                        <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, velit. Reprehenderit, molestiae?</p>
                        <button style={{ border: 'none', background: '#1cc7c1', color: 'white', padding: '5px 10px' }}>Learn More</button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Appointment;