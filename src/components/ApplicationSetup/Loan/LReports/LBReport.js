import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap';
import Loans from '../../../images/Creat-removebg-preview.png'
import { Link, useNavigate } from 'react-router-dom';

const LBReport = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        // Redirect to the home page
        navigate('/LReports');
    };
  return (
    <>
            <Container>
                <div className="line HRISLine">
                    Employee Loan Management
                </div>
                <div className="MainContent">
                    <Form className="form SetupForm mt-4 ms-2">
                        <Row className="textfield">
                            <div className="Heading pb-2 ps-1">
                                <Row>
                                    <Col lg={10} md={10} sm={10} xs={10}>
                                        <h5>Loan Balance Report</h5>
                                    </Col>
                                    <Col lg={2} md={2} sm={2} xs={2}>
                                        <div className="hrmImage">
                                            <Link to="/Loan">
                                                <img src={Loans} className="card-img-top card-img" alt="..." />
                                            </Link>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <Col lg={6} md={6} sm={6} xs={12}>
                                <div className="mb-3 pt-2 me-2">
                                    <Form.Label className="form-label">Employee<span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select status" name="cat" aria-label="Default select example" required>
                                        <option value="0">--All--</option>
                                        <option value="1">...</option>
                                        <option value="2">..</option>
                                    </Form.Select>
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={6} xs={12}>
                                <div className="mb-3 pt-2 me-2">
                                    <Form.Label className="form-label">Loan Type<span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select status" name="cat" aria-label="Default select example" required>
                                        <option value="0">--All--</option>
                                        <option value="1">...</option>
                                        <option value="2">..</option>
                                    </Form.Select>
                                </div>
                            </Col>
                            <div className="d-flex flex-row-reverse">
                                <button type="button" onClick={handleClick} id='btn' className="btn">Generate Report</button>
                            </div>
                        </Row>
                    </Form>
                </div>
            </Container>
        </>
  )
}

export default LBReport
