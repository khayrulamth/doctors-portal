import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className='col-md-4 text-center justify-content-center mt-5'>
            <img style={{height:'60px', marginBottom:'10px'}} src={service.img} alt="" />
            <h6>{service.name}</h6>
            <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo ipsam error vel.</p>
        </div>
    );
};

export default ServiceDetail;