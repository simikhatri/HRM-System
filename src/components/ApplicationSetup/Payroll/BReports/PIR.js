import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap';
import payroll from '../../../images/proll-removebg-preview (1).png'
import { Link, useNavigate } from 'react-router-dom';

const PIR = () => {
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
                                        <h5 className='mt-3'>Payroll Information Report</h5>
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
                            <Col lg={6} md={6} sm={6} xs={12}>
                                <div className="mb-3 pt-2 me-2">
                                    <Form.Label className="form-label">Month<span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select status" name="cat" aria-label="Default select example" required>
                                        <option value="0">--Please Select--</option>
                                        <option value="1">...</option>
                                        <option value="2">..</option>
                                    </Form.Select>
                                </div>
                                <div className="mb-3 pt-2 me-2">
                                    <Form.Label className="form-label">Business Unit<span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select status" name="cat" aria-label="Default select example" required>
                                        <option value="0">---All---</option>
                                        <option value="1">...</option>
                                        <option value="2">..</option>
                                    </Form.Select>
                                </div>
                                <div className="mb-3 pt-2 me-2">
                                    <Form.Label className="form-label">Employment Status<span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select status" name="cat" aria-label="Default select example" required>
                                        <option value="0">--Please Select--</option>
                                        <option value="1">...</option>
                                        <option value="2">..</option>
                                    </Form.Select>
                                </div>
                                <div className="mb-4 pt-2 me-3">
                                    <Form.Label className="form-label me-4">File Type<span className="important">*</span> </Form.Label> <br />
                                    <Form.Check inline label="Normal" type="radio" id="yes-radio" name="radioGroup" />
                                    <Form.Check inline label="Oracle JV" type="radio" id="no-radio" name="radioGroup" />
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={6} xs={12}>
                                <div className="mb-3 pt-2 me-2">
                                    <Form.Label className="form-label">Year<span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select status" name="cat" aria-label="Default select example" required>
                                        <option value="0">--Please Select--</option>
                                        <option value="1">...</option>
                                        <option value="2">..</option>
                                    </Form.Select>
                                </div>
                                <div className="mb-3 pt-2 me-2">
                                    <Form.Label className="form-label">Location<span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select status" name="cat" aria-label="Default select example" required>
                                        <option value="0">---All---</option>
                                        <option value="1">...</option>
                                        <option value="2">..</option>
                                    </Form.Select>
                                </div>
                                <div className="mb-3 pt-2 me-2">
                                    <Form.Label className="form-label">Allowance<span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select status multiplename" multiple aria-label="Default select example" required>
                                        <option value="0">Basic Salary</option>
                                        <option value="1">House Rent</option>
                                        <option value="2">Medical</option>
                                        <option value="3">Income Tax</option>
                                        <option value="4">Loan</option>
                                    </Form.Select>
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={6} xs={12}>
                                <div className="mb-4 pt-4">
                                    <Form.Label className="form-label me-4">Net Salary</Form.Label>
                                    <Form.Check type="checkbox" id="checkboxId" inline />
                                </div>
                                <div className="mb-4 pt-4">
                                    <Form.Label className="form-label me-4">Gross Salary</Form.Label>
                                    <Form.Check type="checkbox" id="checkboxId" inline />
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={6} xs={12}>
                            <div className="mb-4 pt-4">
                                    <Form.Label className="form-label me-4">Taxable Salary</Form.Label>
                                    <Form.Check type="checkbox" id="checkboxId" inline />
                                </div>
                                <div className="mb-4 pt-4">
                                    <Form.Label className="form-label me-4">Attendance</Form.Label>
                                    <Form.Check type="checkbox" id="checkboxId" inline />
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

export default PIR
