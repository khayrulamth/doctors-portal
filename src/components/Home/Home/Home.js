import React from 'react';
import Appointment from '../Appointment/Appointment';
import Featured from '../Featured/Featured';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Featured></Featured>
            <Appointment></Appointment>
        </div>
    );
};

export default Home;