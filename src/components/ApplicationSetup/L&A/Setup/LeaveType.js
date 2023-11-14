import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap';
import Attendance from '../../../images/attendance-removebg.png'
import { Link, useNavigate } from 'react-router-dom';


const LeaveType = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        // Redirect to the home page
        navigate('/Attendance');
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
                                        <h5>Leave Type - Add New</h5>
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
                            <Col lg={6} md={6} sm={6} xs={12}>
                                <div className="mb-3 pt-2 me-2">
                                    <Form.Label className="form-label"> Code<span className="important">*</span> </Form.Label>
                                    <Form.Control type="text" className="form-control" required />
                                </div>
                                <div className="mb-3 pt-2 me-2">
                                    <Form.Label className="form-label">Description<span className="important">*</span> </Form.Label>
                                    <textarea className="form-control" rows="1" required></textarea>
                                </div>
                                <div className="mb-4 me-2 pt-2">
                                    <Form.Label className="form-label">Gender<span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select status" name="cat" aria-label="Default select example" required>
                                        <option selected>--All--</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                                <div className="mb-3 pt-2 me-2">
                                    <Form.Label className="form-label">Forward Limit<span className="important">*</span> </Form.Label>
                                    <Form.Control type="text" className="form-control" required />
                                </div>
                                <div className="mb-4 me-2">
                                    <Form.Label className="form-label">Status<span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select status" name="cat" aria-label="Default select example" required>
                                        <option selected>--Active--</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                                
                                <div className="mb-4 pt-4">
                                    <Form.Label className="form-label me-4">Distributed in Months</Form.Label>
                                    <Form.Check type="checkbox" id="checkboxId" inline />
                                </div>
                                <div className="mb-4 pt-2">
                                    <Form.Label className="form-label me-4">Allowed once in Tenure</Form.Label>
                                    <Form.Check type="checkbox" id="checkboxId" inline />
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={6} xs={12}>
                            <div className="mb-3 pt-2 me-2">
                                    <Form.Label className="form-label"> Name<span className="important">*</span> </Form.Label>
                                    <Form.Control type="text" className="form-control" required />
                                </div>
                                <div className="mb-4 me-2 pt-2">
                                    <Form.Label className="form-label">Deductible<span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select status" name="cat" aria-label="Default select example" required>
                                        <option selected>--No--</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                                <div className="mb-4 me-2">
                                    <Form.Label className="form-label">Allow for Dates<span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select status" name="cat" aria-label="Default select example" required>
                                        <option selected>--All--</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                                <div className="mb-3 pt-2 me-2">
                                    <Form.Label className="form-label">Maximum Balance Limit<span className="important">*</span> </Form.Label>
                                    <Form.Control type="text" className="form-control" required />
                                </div>
                                <div className="mb-4 pt-2 Consultant">
                                    <Form.Label className="form-label me-4">Encashable </Form.Label>
                                    <Form.Check type="checkbox" id="checkboxId" inline />
                                </div>
                                <div className="mb-4 pt-2">
                                    <Form.Label className="form-label me-4">Mandatory</Form.Label>
                                    <Form.Check type="checkbox" id="checkboxId" inline />
                                </div>
                                <div className="mb-4 pt-2">
                                    <Form.Label className="form-label me-4">Forwardable</Form.Label>
                                    <Form.Check type="checkbox" id="checkboxId" inline />
                                </div>
                            </Col>
                            <div className="d-flex flex-row-reverse">
                                <button type="button" onClick={handleClick} className="btn">Cancel</button>
                                <button type="button" className="btn mr-2">Search Now</button>
                            </div>
                        </Row>
                    </Form>
                 </div>
            </Container >
    </>
  )
}

export default LeaveType
