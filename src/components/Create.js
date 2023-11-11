import React, { useEffect, useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import { useDispatch } from 'react-redux';
import { createUser } from '../features/userDetailSlice';
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';
import { Link, useNavigate } from "react-router-dom";

function Create() {

    const [users, setUsers] = useState({});

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const getUserData = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("users...", users);
        dispatch(createUser(users));
        navigate("/read");
    };

    return (
        <div>
            <Container className='mt-5' >
                <Row onSubmit={handleSubmit}>
                    <FloatingLabel className='mb-3' controlId="floatingPassword" label="Name">
                        <Form.Control name='name' onChange={getUserData} required type="text" placeholder="Name" />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control type="email" onChange={getUserData} required name='email' placeholder="name@example.com" />
                    </FloatingLabel>

                    <FloatingLabel className='mb-3' controlId="floatingPassword" label="Age">
                        <Form.Control type="text" onChange={getUserData} required name='age' placeholder="Age" />
                    </FloatingLabel>

                    <Form>
                        <input
                            class="form-check-input"
                            name="gender"
                            value="Male"
                            type="radio"
                            onChange={getUserData}
                            required
                        />
                        <label class="form-check-label">Male</label>
                        <br></br>

                        <input
                            class="form-check-input"
                            className='mt-3'
                            name="gender"
                            value="Female"
                            type="radio"
                            onChange={getUserData}
                        />
                        <label class="form-check-label">Female</label>
                    </Form>

                    <Button className='btn btn-success w-25 container text-center mt-3' type='submit'>
                        Submit
                    </Button>


                </Row>
            </Container>
        </div >
    )
}

export default Create