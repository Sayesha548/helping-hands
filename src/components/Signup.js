import axios from 'axios'
import React, { useState } from 'react'
import { FaArrowRight, FaRegCheckCircle } from "react-icons/fa"
import '../styles/Signup.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function Signup() {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [arr, setarr] = useState([])
    const initialData = {
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        city: "",
        state: "",
        passcode: ""
    }
    const [formData, setFormData] = useState(initialData)
    const inputHandler = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value });
    }

    const singupData = (e) => {
        setShow(true)
        // e.preventdefault();
        let obj = {
            first_name: formData.firstName,
            last_name: formData.lastName,
            username: formData.userName,
            email: formData.email,
            city: formData.city,
            state: formData.state,
            passcode: formData.passcode
        }
        console.log(obj, "one object created")
        // setFirst_name("")
        // setLast_name("")
        // setUsername("")
        // setEmail("")
        // setCity("")
        // setState("")
        // setPasscode("")

        axios.post("http://192.168.3.97:3030/signup/", obj).then((response) => {
            console.log(response.data);
            // setarr(response.data)
        })


    }
    return (
        <div>
            <div className='img'>
                <div className='row'>
                    <div className='frm col-4'>
                        <h6 className='text-start mb-4'>Create an Account</h6>
                        <div className="input-group">
                            <input type="text" className='form-control'
                                name="firstName"
                                value={formData.firstName}
                                onChange={inputHandler}
                                placeholder='First name'></input>
                            <label className='label'>First name</label>
                        </div><br />
                        <div className='input-group'>
                            <input type="text" className='form-control'
                                name='lastName'
                                value={formData.lastName}
                                onChange={inputHandler}
                                placeholder='Last name'></input>
                            <label className='label'>Last name</label>
                        </div><br />
                        <div className='input-group'>

                            <input type="text" className='form-control'
                                name='userName'
                                value={formData.userName}
                                onChange={inputHandler}
                                placeholder='User name'></input>
                            <label className='label'>User Name</label>
                        </div><br />
                        <div className='input-group'>
                            <input type="text" className='form-control'
                                name='email'
                                value={formData.email}
                                onChange={inputHandler}
                                placeholder='Email'></input>
                            <label className='label'>Email</label>
                        </div><br />
                        <div className='input-group'>
                            <input type="text" className='form-control'
                                name='city'
                                value={formData.city}
                                onChange={inputHandler} placeholder='City'></input>
                            <label className='label'>City</label>
                        </div><br />
                        <div className='input-group'>
                            <input type="text" className='form-control'
                                name='state'
                                value={formData.state}
                                onChange={inputHandler} placeholder='State'></input>
                            <label className='label'>State</label>
                        </div><br />
                        <div className='input-group'>
                            <input type="text" className='form-control'
                                name='passcode'
                                value={formData.passcode}
                                onChange={inputHandler} placeholder='Passcode'></input>
                            <label className='label'>Passcode</label>
                        </div><br />
                        <div className='input-group mb-3'>

                            <button type='button' className='form-control btnn'
                                onClick={singupData}
                            ><FaArrowRight /></button><br/>
                            <Modal className='modal-box text-center' show={show} onHide={handleClose}>
                                <Modal.Body><FaRegCheckCircle className='fa-design' />
                                    <h4>Registration successful!</h4>
                                    <p>Thank you. Please click on the link sent to your email
                                        address to activate your account.</p>
                                        <Link to='/login'>
                                    <button type='button' className='cls-btn' onClick={handleClose}
                                    > Close</button></Link>
                                </Modal.Body>
                                {/* <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={handleClose}>
                                        Save Changes
                                    </Button>
                                </Modal.Footer> */}
                            </Modal>
                        </div>


                    </div>
                </div>


            </div>
        </div>
    )
}

export default Signup
