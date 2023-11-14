import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap';
import payroll from '../../../images/proll-removebg-preview (1).png'
import { Link, useNavigate } from 'react-router-dom';

const EClearance = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        // Redirect to the home page
        navigate('/Report');
    };
    return (
        <>
            <Container>
                <div className="line HRISLine">
                    Payroll
                </div>
                <div className="MainContent">
                    <Form className="form SetupForm mt-4 ms-2">
                        <Row className="textfield">
                            <div className="Heading pb-2 ps-3">
                                <Row>
                                    <Col lg={10} md={10} sm={10} xs={10}>
                                        <h5 className='mt-3'>Employee Clearance</h5>
                                    </Col>
                                    <Col lg={2} md={2} sm={2} xs={2}>
                                        <div className="hrmImage">
                                            <Link to="/HRIS">
                                                <img src={payroll} className="card-img-top card-img" alt="..." />
                                            </Link>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="mb-2 pt-2 me-3">
                                <Form.Check inline label="Clearance Report" type="radio" id="yes-radio" name="radioGroup" />
                            </div>
                            <div className="mb-4 pt-2 me-2">
                                <Form.Label className="form-label">Employee<span className="important">*</span> </Form.Label>
                                <Form.Select className="form-select status" name="cat" aria-label="Default select example" required>
                                    <option value="0">---All---</option>
                                    <option value="1">...</option>
                                    <option value="2">..</option>
                                </Form.Select>
                            </div>
                            <div className="mb-2 pt-4 me-3">
                                <Form.Check inline label="Clearance Status Report" type="radio" id="no-radio" name="radioGroup" />
                            </div>
                            <Col lg={6} md={6} sm={6} xs={12}>
                                <div className="mb-4 pt-2 me-2">
                                    <Form.Label className="form-label">Exit Date (From)<span className="important">*</span> </Form.Label>
                                    <Form.Control type="date" className="form-control" required />
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={6} xs={12}>
                                <div className="mb-4 pt-2 me-2">
                                    <Form.Label className="form-label">Exit Date (To)<span className="important">*</span> </Form.Label>
                                    <Form.Control type="date" className="form-control" required />
                                </div>
                            </Col>
                            <div className="d-flex flex-row-reverse">
                                <button type="button" onClick={handleClick} id='btn' className="btn">Generate Report</button>
                            </div>
                        </Row>
                    </Form>
                </div>
            </Container >
        </>
    )
}

export default EClearance
