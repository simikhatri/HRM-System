import React from 'react'
import { Container, Row, Col, Form, Accordion } from 'react-bootstrap';
import HRIS from '../../../images/hrm-removebg-preview.png'
import { Link, useNavigate } from 'react-router-dom';


const Compensation = () => {
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
                        <div className="textfield">
                            <div className="Heading pb-2 ps-1">
                                <Row>
                                    <Col lg={10} md={10} sm={10} xs={10}>
                                        <h5>Compensation Plan</h5>
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
                            <Accordion className="accordion mt-4" defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header >Compensation Plan - Add New</Accordion.Header>
                                    <Accordion.Body className="accordion-body mb-4">
                                        <Form>
                                            <Row className="textfield">
                                                <Col lg={6} md={6} sm={6} xs={12}>
                                                    <div className="mb-3 pt-2 me-2">
                                                        <Form.Label className="form-label">Compensation Plan Name<span className="important">*</span> </Form.Label>
                                                        <Form.Control type="text" className="form-control" required />
                                                    </div>
                                                    <div className="mb-3 pt-2 me-2">
                                                        <Form.Label className="form-label">Effecting From<span className="important">*</span> </Form.Label>
                                                        <Form.Control type="date" className="form-control" required />
                                                    </div>
                                                    <div className="mb-4 me-2 pt-2">
                                                        <Form.Label className="form-label">Status  <span className="important">*</span> </Form.Label>
                                                        <Form.Select className="form-select status" name="cat" aria-label="Default select example" required>
                                                            <option selected>Active</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </Form.Select>
                                                    </div>
                                                </Col>
                                                <Col lg={6} md={6} sm={6} xs={12}>
                                                    <div className="mb-4 me-2 pt-2">
                                                        <Form.Label className="form-label">Employee Status<span className="important">*</span> </Form.Label>
                                                        <Form.Select className="form-select status" name="cat" aria-label="Default select example" required>
                                                            <option selected>--Please Select--</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </Form.Select>
                                                    </div>
                                                    <div className="mb-3 me-2">
                                                        <Form.Label className="form-label">Compensation Plan Description<span className="important">*</span> </Form.Label>
                                                        <Form.Control as="textarea" rows={1} className="form-control" required></Form.Control>
                                                    </div>
                                                </Col>
                                                <div className="d-flex flex-row-reverse">
                                                    <button type="button" onClick={handleClick} className="btn">Cancel</button>
                                                    <button type="button" className="btn mr-2">SAVE</button>
                                                </div>
                                            </Row>
                                        </Form>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header >Compensation Plan - Details</Accordion.Header>
                                    <Accordion.Body className="accordion-body mb-4">
                                        <Form>
                                            <Row className="textfield">
                                                <Col lg={6} md={6} sm={6} xs={12}>
                                                    <div className="mb-3 pt-2 me-2">
                                                        <Form.Label className="form-label">Allowance<span className="important">*</span> </Form.Label>
                                                        <Form.Select className="form-select status" name="cat" aria-label="Default select example" required>
                                                            <option selected>--Please Select--</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </Form.Select>
                                                    </div>
                                                    <div className="mb-3 pt-2 me-2">
                                                        <Form.Label className="form-label">Allowance Limit<span className="important">*</span> </Form.Label>
                                                        <Form.Select className="form-select status" name="cat" aria-label="Default select example" required>
                                                            <option selected>--Please Select--</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </Form.Select>
                                                    </div>
                                                </Col>
                                                <Col lg={6} md={6} sm={6} xs={12}>
                                                    <div className="mb-3 pt-2 me-2">
                                                        <Form.Label className="form-label">Maximum Limit<span className="important">*</span> </Form.Label>
                                                        <Form.Control type="text" className="form-control" required />
                                                    </div>
                                                    <div className="mb-3 pt-2 distributed">
                                                        <Form.Label className="form-label me-4">Distributed In Days<span className="important">*</span> </Form.Label>
                                                        <Form.Check type="checkbox" id="checkboxId" inline />
                                                    </div>
                                                </Col>
                                                <Row className='mb-4 mt-3'>
                                                    <Col lg={6} md={6} sm={6} xs={12}>
                                                        <div className=" me-3">
                                                            <Form.Check type="checkbox" id="checkboxId" inline />
                                                            <Form.Label className="form-label ps-3">Part of Gross</Form.Label>
                                                        </div>
                                                    </Col>
                                                    <Col lg={6} md={6} sm={6} xs={12}>
                                                        <div>
                                                            <Form.Check type="checkbox" id="checkboxId" inline />
                                                            <Form.Label className="form-label ps-3">Taxable</Form.Label>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <div className="d-flex flex-row-reverse">
                                                    <button type="button" onClick={handleClick} className="btn">Cancel</button>
                                                    <button type="button" className="btn mr-2">SAVE</button>
                                                </div>
                                            </Row>
                                        </Form>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </Form>
                </div>
            </Container>
        </>
    )
}

export default Compensation
