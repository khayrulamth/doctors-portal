import React from 'react';
import fluoride from '../../../Images/fluoride.png'
import cavity from '../../../Images/cavity.png'
import whitening from '../../../Images/whitening.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: fluoride,
    },
    {
        name: 'Cavity Filling',
        img: cavity,
    },
    {
        name: 'Teeth Whitening',
        img: whitening,
    }
]

const Services = () => {
    return (
        <section className="service container mt-5 ">


            <div className="text-center ">
                <h5 style={{ color: '#1cc7c1', textTransform: 'uppercase', }}>Our Services</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <div className="row w-75 ">
                    {
                        serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }
                </div>
            </div>

        </section>
    );
};

export default Services;