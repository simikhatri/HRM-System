import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap';
import HRIS from '../../../images/hrm-removebg-preview.png'
import { Link, useNavigate } from 'react-router-dom';

const FisalYears = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        // Redirect to the home page
        navigate('/HRIS');
      };
    return (
        <>
            <Container>
                <div className="line HRISLine">
                    Human Resource Information System
                </div>
                <div className="MainContent">
                    <Form className="form SetupForm mt-4 ms-2">
                        <Row className="textfield">
                            <div className="Heading pb-2 ps-1">
                                <Row>
                                    <Col lg={10} md={10} sm={10} xs={10}>
                                        <h5>Fiscal-Year - Add New</h5>
                                    </Col>
                                    <Col lg={2} md={2} sm={2} xs={2}>
                                        <div className="hrmImage">
                                            <Link to="/HRIS">
                                                <img src={HRIS} className="card-img-top card-img" alt="..." />
                                            </Link>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <Col lg={6} md={6} sm={6} xs={12}>
                                <div className="mb-4 pt-3 me-2">
                                    <Form.Label className="form-label">Name <span className="important">*</span> </Form.Label>
                                    <Form.Control type="text" className="form-control" id="Code" required />
                                </div>
                                <div className="mb-4 pt-3 me-2">
                                    <Form.Label className="form-label">End-Date <span className="important">*</span> </Form.Label>
                                    <Form.Control type="date" className="form-control" id="cnic" required />
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={6} xs={12}>
                                <div className="mb-4 pt-3 me-2">
                                    <Form.Label className="form-label">Start-Date <span className="important">*</span> </Form.Label>
                                    <Form.Control type="date" className="form-control" id="Supervisor" required />
                                </div>
                                <div className="mb-4 pt-3 me-2">
                                    <Form.Label className="form-label">Status <span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select status" name="cat"
                                        aria-label="Default select example" required>
                                        <option selected> -- Please Select-- </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                            </Col>
                            <div className="d-flex flex-row-reverse">
                                <button type="button" onClick={handleClick} className="btn">Cancel</button>
                                <button type="button" className="btn mr-2">SAVE</button>
                            </div>
                        </Row>
                    </Form>
                </div>
            </Container>
        </>
    )
}

export default FisalYears
