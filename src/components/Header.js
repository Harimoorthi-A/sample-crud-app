import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchUser } from "../features/userDetailSlice";

function Header() {

    const allusers = useSelector((state) => state.app.users);
    const dispatch = useDispatch();

    const [searchData, setSearchData] = useState("");

    useEffect(() => {
        dispatch(searchUser(searchData));
    }, [searchData]);

    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">CRUD App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Create Post</Nav.Link>
                            <Nav.Link href="/read">All Post
                                <span className='ms-1' style={{backgroundColor:'red',borderRadius:'15px', width:'auto',color:'white'}}>
                                    {allusers.length}
                                </span>
                            </Nav.Link>
                            <Nav.Link className='w-50 '>
                                <Form.Control type="search" placeholder="Search"
                                    value={searchData}
                                    onChange={(e) => setSearchData(e.target.value)}
                                />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header