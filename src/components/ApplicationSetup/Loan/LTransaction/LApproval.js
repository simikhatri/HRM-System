import React from 'react'
import { Container, Row, Col, Form, Accordion } from 'react-bootstrap';
import Loans from '../../../images/Creat-removebg-preview.png'
import { Link, useNavigate } from 'react-router-dom';

const LApproval = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        // Redirect to the home page
        navigate('/LTranstion');
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
                                        <h5>Loan Approval</h5>
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
                            <Accordion className="accordion mt-4" defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header >Loan Approval</Accordion.Header>
                                    <Accordion.Body className="accordion-body mb-4">
                                        <Form>
                                            <Row className="textfield">
                                                <Col lg={6} md={6} sm={6} xs={12}>
                                                    <div className="mb-4 me-2 pt-2">
                                                        <Form.Label className="form-label">Employee<span className="important">*</span> </Form.Label>
                                                        <Form.Select className="form-select status" name="cat" aria-label="Default select example" required>
                                                            <option selected>--All--</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </Form.Select>
                                                    </div>
                                                    <div className="mb-4 me-2 pt-2">
                                                        <Form.Label className="form-label">Loan Date<span className="important">*</span> </Form.Label>
                                                        <Form.Control type="date" className="form-control" required />
                                                    </div>
                                                </Col>
                                                <Col lg={6} md={6} sm={6} xs={12}>
                                                    <div className="mb-4 me-2 pt-2">
                                                        <Form.Label className="form-label">Loan Type<span className="important">*</span> </Form.Label>
                                                        <Form.Select className="form-select status" name="cat" aria-label="Default select example" required>
                                                            <option selected>--All--</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </Form.Select>
                                                    </div>
                                                    <div className="mb-4 me-2 pt-2">
                                                        <Form.Label className="form-label">Loan Amount<span className="important">*</span> </Form.Label>
                                                        <Form.Control type="text" className="form-control" required />
                                                    </div>
                                                </Col>
                                                <div className="d-flex flex-row-reverse">
                                                    <button type="button" onClick={handleClick} className="btn">Search</button>
                                                </div>
                                            </Row>
                                        </Form>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header >Loan Approval - Manage</Accordion.Header>
                                    <Accordion.Body className="accordion-body mb-4">
                                        <Form>
                                            <Row className="textfield">
                                                <div class="displayfound mt-4">
                                                    Nothing found to display
                                                </div>
                                                <div> <button onClick={handleClick}
                                                    className="GoTo btn">Goto Page</button>
                                                </div>
                                            </Row>
                                        </Form>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Row>
                    </Form>
                </div>
            </Container>
        </>
    )
}

export default LApproval
