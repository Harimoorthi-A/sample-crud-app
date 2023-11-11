import React from "react";
import { useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./CustomModal.css";
import { Link } from "react-router-dom";

const CustomModal = ({ id, setShowPopup }) => {
    const allusers = useSelector((state) => state.app.users);

    const singleUser = allusers.filter((ele) => ele.id === id);
    console.log("singleuser", singleUser);

    return (
        <div className="modalBackground">
            <Card style={{ width: '28rem' }} className="modalContainer">
                <Link onClick={() => setShowPopup(false)} className="text-end m-2">
                    <i class="fa-solid fa-xmark fa-xl" style={{color:'red'}}></i>
                </Link>
                <Card.Body>
                    <Card.Title className="text-center">
                    <h2>{singleUser[0].name}</h2>
                    </Card.Title>
                    <Card.Text>
                        <h3>{singleUser[0].email}</h3>
                        <h4>{singleUser[0].age} years Old</h4>
                        <p>{singleUser[0].gender}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CustomModal;