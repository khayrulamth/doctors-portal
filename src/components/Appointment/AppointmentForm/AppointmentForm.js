import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


Modal.setAppElement('#root');
const AppointmentForm = ({ modalIsOpen, closeModal, booking, date }) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className="mb-3 text-brand text-center">{booking.name}</h2>
                <p>on {date.toDateString()}</p>
                <form style={{ padding: "0 10px" }} onSubmit={handleSubmit(onSubmit)}>
                    <div className=" form-group mb-3">
                        <input className=" p-1" {...register("Name", { required: true, maxLength: 40 })} placeholder="Name" />
                    </div>
                    <div className="form-group mb-3">
                        <input className=" p-1"  {...register("Phone", { required: true, maxLength: 20 })} placeholder="Phone No: " />
                    </div>
                    <div className="form-group mb-3">
                        <input className=" p-1" type="email" {...register("Email", { required: true, maxLength: 100 })} placeholder="Your Email: " />
                    </div>

                    <div className="form-group mb-3">
                        <input className=" p-1" type="number" {...register("Age", { min: 18, max: 99 })} placeholder="Age" />
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="select">Select Gender:
                            <select className="ms-2 p-1" >
                                <option {...register("Gender")} value="Male">Male</option>
                                <option {...register("Gender")} value="Female">Female</option>
                            </select>
                            
                        </label>
                    </div>

                    <input className="btn btn-brand text-uppercase" type="submit" />
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;