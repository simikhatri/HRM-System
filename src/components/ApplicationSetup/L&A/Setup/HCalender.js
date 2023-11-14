import React from 'react'
import { Container, Row, Col, Form, Accordion } from 'react-bootstrap';
import Attendance from '../../../images/attendance-removebg.png'
import { Link, useNavigate } from 'react-router-dom';

const HCalender = () => {
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
                                        <h5>Holiday Calender</h5>
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
                            <Accordion className="accordion mt-4" defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header >Calender - Add New</Accordion.Header>
                                    <Accordion.Body className="accordion-body mb-4">
                                        <Form>
                                            <Row className="textfield">
                                                <Col lg={6} md={6} sm={6} xs={12}>
                                                    <div className="mb-3 pt-2 me-2">
                                                        <Form.Label className="form-label"> Name<span className="important">*</span> </Form.Label>
                                                        <Form.Control type="text" className="form-control" required />
                                                    </div>
                                                </Col>
                                                <Col lg={6} md={6} sm={6} xs={12}>
                                                    <div className="mb-4 me-2 pt-2">
                                                        <Form.Label className="form-label">Year<span className="important">*</span> </Form.Label>
                                                        <Form.Select className="form-select status" name="cat" aria-label="Default select example" required>
                                                            <option selected>--Please Select--</option>
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
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header >Holiday Calender - Details</Accordion.Header>
                                    <Accordion.Body className="accordion-body mb-4">
                                        <Form>
                                            <Row className="textfield">
                                                <Col lg={6} md={6} sm={6} xs={12}>
                                                    <div className="mb-4 me-2 pt-2">
                                                        <Form.Label className="form-label">Holiday<span className="important">*</span> </Form.Label>
                                                        <Form.Select className="form-select status" name="cat" aria-label="Default select example" required>
                                                            <option selected>--Please Select--</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </Form.Select>
                                                    </div>
                                                    <div className="mb-4 me-2 pt-2">
                                                        <Form.Label className="form-label">Holiday Daya<span className="important">*</span> </Form.Label>
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
                                                        <Form.Label className="form-label">Holiday Date<span className="important">*</span> </Form.Label>
                                                        <Form.Control type="date" className="form-control" required />
                                                    </div>
                                                </Col>
                                                <div class="displayfound mt-4">
                                                       Nothing found to display
                                                </div>
                                            </Row>
                                        </Form>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Row>
                    </Form>
                </div>
            </Container >
        </>
    )
}

export default HCalender
