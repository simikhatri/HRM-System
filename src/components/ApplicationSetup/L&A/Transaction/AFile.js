import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap';
import Attendance from '../../../images/attendance-removebg.png'
import { Link, useNavigate } from 'react-router-dom';

const AFile = () => {
    const [claimDate, setClaimDate] = useState('');
    const navigate = useNavigate();
    const handleClick = () => {
        // Redirect to the home page
        navigate('/ATransaction');
    };
    return (
        <>
            <Container>
                <div className="line HRISLine">
                    Leave & Attendance
                </div>
                <div className="MainContent">
                    <Form className="form SetupForm mt-4 ms-2">
                        <Row className="textfield">
                            <div className="Heading pb-2 ps-3">
                                <Row>
                                    <Col lg={10} md={10} sm={10} xs={10}>
                                        <h5>Attendance Upload File</h5>
                                    </Col>
                                    <Col lg={2} md={2} sm={2} xs={2}>
                                        <div className="hrmImage">
                                            <Link to="/HRIS">
                                                <img src={Attendance} className="card-img-top card-img" alt="..." />
                                            </Link>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <Col lg={7} md={7} sm={7} xs={12}>
                                <div className="mb-3 pt-2 me-2">
                                    <Form.Label className="form-label">File Name<span className="important">*</span> </Form.Label>
                                    <Form.Control type="file" className="form-control" required />
                                </div>
                            </Col>
                            <div className="mb-3 pt-2 me-2">
                                    <span>NOTE: The uploaded attendance file will be considered for the User's selected company</span>
                                </div>
                            <div className="d-flex flex-row-reverse">
                                <button type="button" onClick={handleClick} className="btn">Cancel</button>
                                <button type="button" className="btn mr-2">Upload Data</button>
                            </div>
                        </Row>
                    </Form>
                </div>
            </Container >
        </>
    )
}

export default AFile
