import React from 'react';
import chair from '../../../Images/chair.png'

const HeaderMain = () => {
    return (
        <main style={{height: '500px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1 ">
                <h1>Your New Smile <br /> Starts Here</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sequi iste, blanditiis obcaecati pariatur velit?</p>
                <button className="btn btn-primary">Get Appointment</button> 
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;