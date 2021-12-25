import React from 'react';
import featuredImg from '../../../Images/checking.png';
import './Featured.css';


const Featured = () => {
    return (
        <section className='d-flex featured-container justify-content-center row my-5'>
            <div className="img-container col-md-4 d-flex d-flex justify-content-end">
                <img style={{height:'60vh'}} src={featuredImg} alt="" />

            </div>
            <div style={{height:'60vh'}} className="info-container col-md-4">
                <h2 style={{fontWeight: 'bold'}}>Exceptional Dental Care, <br/> On Your Terms</h2>
                <p className='my-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur dignissimos eius inventore sunt quo eos sed quis, perspiciatis id officia doloribus, iure omnis, veniam odio!</p>
                <button style={{border:'none',background:'#1cc7c1',color:'white',padding: '5px 10px'}}>Learn More</button>

            </div>
        </section>
    );
};

export default Featured;