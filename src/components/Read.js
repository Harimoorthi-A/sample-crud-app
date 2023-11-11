import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser, showUser } from "../features/userDetailSlice";
import CustomModal from "./CustomModal";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";

function Read() {

    const dispatch = useDispatch();

    const [id, setId] = useState();

    const [radioData, setRadioData] = useState("");

    const [showPopup, setShowPopup] = useState(false);

    const { users, loading, searchData } = useSelector((state) => state.app);

    useEffect(() => {
        dispatch(showUser());
    }, []);

    if (loading) {
        return
            <Container className="text-center mt-5">
                <i class="fa-regular fa-spinner fa-spin fa-2xl" style={{color: 'black'}}></i>
            </Container>
        ;
    }

    return (
        <div>
            {showPopup && (
                <CustomModal
                    id={id}
                    showPopup={showPopup}
                    setShowPopup={setShowPopup}
                />
            )}
            <h2>All data</h2>
            <input
                class="form-check-input"
                name="gender"
                checked={radioData === ""}
                type="radio"
                onChange={(e) => setRadioData("")}
            />
            <label class="form-check-label">All</label>
            <input
                class="form-check-input"
                name="gender"
                checked={radioData === "Male"}
                value="Male"
                type="radio"
                onChange={(e) => setRadioData(e.target.value)}
            />
            <label class="form-check-label">Male</label>
            <input
                class="form-check-input"
                name="gender"
                value="Female"
                checked={radioData === "Female"}
                type="radio"
                onChange={(e) => setRadioData(e.target.value)}
            />
            <label class="form-check-label">Female</label>

            <div>
                {users &&
                    users
                        .filter((ele) => {
                            if (searchData.length === 0) {
                                return ele;
                            } else {
                                return ele.name
                                    .toLowerCase()
                                    .includes(searchData.toLowerCase());
                            }
                        })
                        .filter((ele) => {
                            if (radioData === "Male") {
                                return ele.gender === radioData;
                            } else if (radioData === "Female") {
                                return ele.gender === radioData;
                            } else return ele;
                        })

                        .map((ele) => (
                            <div key={ele.id} className="card w-50 mx-auto my-2">
                                <div className="card-body">
                                    <h5 className="card-title">{ele.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
                                    <p className="card-text">{ele.gender}</p>
                                    <Button
                                        className="card-link"
                                        onClick={() => [setId(ele.id), setShowPopup(true)]}
                                    >
                                        View
                                    </Button>
                                    <Link to={`/edit/${ele.id}`} className="card-link">
                                    <i class="fa-solid fa-pen-to-square" style={{color: '#005eff'}}></i>
                                    </Link>
                                    <Link
                                        onClick={() => dispatch(deleteUser(ele.id))}
                                        className="card-link"
                                    >
                                        <i class="fa-solid fa-trash" style={{color: '#ff0033'}}></i>
                                    </Link>
                                </div>
                            </div>
                        ))}
            </div>
        </div>
    )
}

export default Read