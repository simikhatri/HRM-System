import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap';
import HRIS from '../../../images/hrm-removebg-preview.png'
import { Link, useNavigate } from 'react-router-dom';

const HRInfo = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        // Redirect to the home page
        navigate('/ThirdP');
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
                                        <h5>HR Resource Info - Add New</h5>
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
                            <Col lg={4} md={4} sm={4} xs={12}>
                                <div className="mb-4 pt-2">
                                    <Form.Label className="form-label">Project</Form.Label><br />
                                    <Form.Check inline label="Current Month Headcount" type="radio" id="Headcount" name="Project" />
                                    <Form.Select className="form-select status" name="pro" aria-label="Default select example" required>
                                        <option selected>----All----</option>
                                    </Form.Select>
                                </div>
                            </Col>
                            <Col lg={4} md={4} sm={4} xs={12}>
                                <div className="mb-4 pt-2">
                                    <Form.Label className="form-label">Project</Form.Label><br />
                                    <Form.Check inline label="Employee Information" type="radio" id="Einfo" name="Project" />
                                    <Form.Select className="form-select status" name="pro" aria-label="Default select example" required>
                                        <option selected>----All----</option>
                                    </Form.Select>
                                </div>
                            </Col>
                            <Col lg={4} md={4} sm={4} xs={12}>
                                <div className="mb-4 pt-2">
                                    <Form.Label className="form-label">Project</Form.Label><br />
                                    <Form.Check inline label="Employee Cases" type="radio" id="ECases" name="Project" />
                                    <Form.Select className="form-select status" name="pro" aria-label="Default select example" required>
                                        <option selected>----All----</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                            </Col>
                            <div className="mb-4 pt-3">
                                <Form.Check inline label="Joining & Exit" type="radio" id="JoiningExit" name="JoiningExit" />
                                <Row>
                                    <Col lg={4} md={4} sm={4} xs={12}>
                                        <div className="mb-4 pt-2 ">
                                            <Form.Label className="form-label">Project</Form.Label>
                                            <Form.Select className="form-select status" aria-label="Default select example" required>
                                                <option selected>----All----</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={4} sm={4} xs={12}>
                                        <div className="mb-4 pt-2 ">
                                            <Form.Label className="form-label">Year <span className="important">*</span> </Form.Label>
                                            <Form.Select className="form-select status" aria-label="Default select example" required>
                                                <option selected>--Please Select--</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={4} sm={4} xs={12}>
                                        <div className="mb-4 pt-2 ">
                                            <Form.Label className="form-label">Month <span className="important">*</span> </Form.Label>
                                            <Form.Select className="form-select status" aria-label="Default select example" required>
                                                <option selected>--Please Select--</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="mb-4 pt-3">
                            <Form.Check inline label="Payroll" type="radio" id="Payroll" name="Payroll" />
                                <Row>
                                    <Col lg={4} md={4} sm={4} xs={12}>
                                        <div className="mb-4 pt-2 ">
                                            <Form.Label className="form-label">Project <span className="important">*</span> </Form.Label>
                                            <Form.Select className="form-select status" aria-label="Default select example" required>
                                                <option selected>--Please Select--</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={4} sm={4} xs={12}>
                                        <div className="mb-4 pt-2 ">
                                            <Form.Label className="form-label">Year <span className="important">*</span> </Form.Label>
                                            <Form.Select className="form-select status" aria-label="Default select example" required>
                                                <option selected>--Please Select--</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={4} sm={4} xs={12}>
                                        <div className="mb-4 pt-2 ">
                                            <Form.Label className="form-label">Month <span className="important">*</span> </Form.Label>
                                            <Form.Select className="form-select status" aria-label="Default select example" required>
                                                <option selected>--Please Select--</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="d-flex flex-row-reverse ">
                                <button type="button" onClick={handleClick} id='btn' className="btn">Generate Report</button>
                            </div>
                        </Row>
                    </Form>
                </div>
            </Container>
        </>
    )
}

export default HRInfo
