import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap';
import HRIS from '../../../images/hrm-removebg-preview.png'
import { Link, useNavigate } from 'react-router-dom';

const EProfile = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        // Redirect to the home page
        navigate('/HRIS/Transaction');
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
                                        <h5>Employee Profile - Add New</h5>
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
                            <Col lg={3} md={6} sm={6} xs={12}>
                                <div className="mb-4 pt-2 me-3">
                                    <Form.Label className="form-label">Employee No<span className="important">*</span> </Form.Label>
                                    <Form.Control type="text" className="form-control" required />
                                </div>
                                <div className="mb-4 pt-2 me-3">
                                    <Form.Label className="form-label">Company <span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select form-control form-control status" name="cat"
                                        aria-label="Default select example" required>
                                        <option selected>A Hamsom (Pvt) Limited </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select >
                                </div>
                                <div className="mb-3 me-3">
                                    <Form.Label className="form-label">Designation<span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select form-control status" name="cat"
                                        aria-label="Default select example" required>
                                        <option selected> -- Please Select-- </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select >
                                </div>
                                <div className="mb-3 pt-2 me-3">
                                    <Form.Label className="form-label">Leave Plan<span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select form-control status" name="cat"
                                        aria-label="Default select example" required>
                                        <option selected> -- Please Select-- </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select >
                                </div>
                                <div className="mb-3 pt-2 me-3">
                                    <Form.Label className="form-label">New Grade<span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select form-control status" name="cat"
                                        aria-label="Default select example" required>
                                        <option selected> -- Please Select-- </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select >
                                </div>
                                <div className="mb-4 pt-2 me-3">
                                    <Form.Label className="form-label">Primary<span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select status" aria-label="Default select example" required>
                                        <option selected>--Please Select--</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select >
                                </div>
                                <div className="mb-4 pt-2 me-3">
                                    <Form.Label className="form-label">N.T.N (xxxxxxx-x)<span className="important">*</span> </Form.Label>
                                    <Form.Control type="text" className="form-control" required />
                                </div>
                                <div className="mb-3 pt-2 me-3">
                                    <Form.Label className="form-label">Payment Mode<span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select form-control status" name="cat"
                                        aria-label="Default select example" required>
                                        <option selected> -- Please Select-- </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select >
                                </div>
                                <div className="mb-4 pt-2 me-3">
                                    <Form.Label className="form-label">IBAN Number<span className="important">*</span> </Form.Label>
                                    <Form.Control type="text" className="form-control" required />
                                </div>
                                <div className="mb-4 pt-2 me-3">
                                    <Form.Label className="form-label">Perform Evaluation<span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select status" name="cat"
                                        aria-label="Default select example" required>
                                        <option selected> No </option>
                                        <option value="1">Yes</option>
                                    </Form.Select >
                                </div>
                                <div className="mb-3 pt-2 me-3">
                                    <Form.Label className="form-label me-4 pe-4">Hold Salary</Form.Label>
                                    <Form.Check type="checkbox" id="checkboxId" inline />
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={6} xs={12}>
                                <div className="mb-4 pt-2 me-3">
                                    <Form.Label className="form-label">Employee Name<span className="important">*</span> </Form.Label>
                                    <Form.Control type="text" className="form-control" required />
                                </div>
                                <div className="mb-3 pt-2 me-3">
                                    <Form.Label className="form-label">Location<span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select form-control status" name="cat"
                                        aria-label="Default select example" required>
                                        <option selected> -- Please Select-- </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select >
                                </div>
                                <div className="mb-3 pt-2 me-3">
                                    <Form.Label className="form-label">Department<span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select form-control status" name="cat"
                                        aria-label="Default select example" required>
                                        <option selected>--Please Select-- </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select >
                                </div>
                                <div className="mb-3 pt-2 me-3">
                                    <Form.Label className="form-label">Overtime Plan<span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select form-control status" name="cat"
                                        aria-label="Default select example" required>
                                        <option selected> -- Please Select-- </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select >
                                </div>
                                <div className="mb-3 pt-2 me-3">
                                    <Form.Label className="form-label">Old Grade<span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select form-control status" name="cat"
                                        aria-label="Default select example" required>
                                        <option selected> -- Please Select-- </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select >
                                </div>
                                <div className="mb-4 pt-2 me-3">
                                    <Form.Label className="form-label">Secondary<span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select status" aria-label="Default select example" required>
                                        <option selected>--Please Select--</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select >
                                </div>
                                <div className="mb-4 pt-2 me-3">
                                    <Form.Label className="form-label">C-NIC(xxxxx-xxxxxxx-x)<span className="important">*</span> </Form.Label>
                                    <Form.Control type="text" className="form-control" required />
                                </div>
                                <div className="mb-3 pt-2 me-3">
                                    <Form.Label className="form-label">Bank<span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select form-control status" name="cat"
                                        aria-label="Default select example" required>
                                        <option selected> -- Please Select-- </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select >
                                </div>
                                <div className="mb-3 pt-2 me-3">
                                    <Form.Label className="form-label">Gender<span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select form-control status" name="cat"
                                        aria-label="Default select example" required>
                                        <option selected> -- Please Select-- </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select >
                                </div>
                                <div className="mb-3 pt-3 me-3">
                                    <Form.Label className="form-label">Picture</Form.Label>
                                    <Form.Control type="file" className="form-control" required />
                                </div>
                                <div className="mb-3 pt-3 me-3">
                                    <Form.Label className="form-label ms-4 pe-4">Add User</Form.Label>
                                    <Form.Check type="checkbox" id="checkboxId" inline />
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={6} xs={12}>
                                <div className="mb-4 pt-2 me-3">
                                    <Form.Label className="form-label">Father's/Husband Name<span className="important">*</span>
                                    </Form.Label>
                                    <Form.Control type="text" className="form-control" required />
                                </div>
                                <div className="mb-3 pt-2 me-3">
                                    <Form.Label className="form-label">Reporting Location<span className="important">*</span>
                                    </Form.Label>
                                    <Form.Select className="form-select form-control status" name="cat"
                                        aria-label="Default select example" required>
                                        <option selected> -- Please Select-- </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select >
                                </div>
                                <div className="mb-3 pt-2 me-3">
                                    <Form.Label className="form-label">Shift<span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select form-control status" name="cat" aria-label="Default select example" required>
                                        <option selected>G</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select >
                                </div>
                                <div className="mb-3 pt-2 me-3">
                                    <Form.Label className="form-label">Employment Status<span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select status" name="cat"
                                        aria-label="Default select example" required>
                                        <option selected> -- Please Select-- </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select >
                                </div>
                                <div className="mb-4 pt-2 me-3">
                                    <Form.Label className="form-label">Dual Reporting<span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select status" aria-label="Default select example" required>
                                        <option selected>No </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select >
                                </div>
                                <div className="mb-4 me-3">
                                    <Form.Label className="form-label">Compensation Plan<span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select status" aria-label="Default select example" required>
                                        <option selected>--Please Select--</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select >
                                </div>
                                <div className="mb-4 pt-2 me-3">
                                    <Form.Label className="form-label">CNIC Expiry Date<span className="important">*</span> </Form.Label>
                                    <Form.Control type="date" className="form-control" required />
                                </div>
                                <div className="mb-3 pt-2 me-3">
                                    <Form.Label className="form-label">Branch<span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select form-control status" name="cat"
                                        aria-label="Default select example" required>
                                        <option selected> -- Please Select-- </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select >
                                </div>
                                <div className="mb-4 pt-2 me-3">
                                    <Form.Label className="form-label">Date Of Birth<span className="important">*</span> </Form.Label>
                                    <Form.Control type="date" className="form-control" required />
                                </div>
                                <div className="mb-4 pt-2 me-3 Consultant">
                                    <Form.Label className="form-label me-4">Consultant<span className="important">*</span> </Form.Label>
                                    <Form.Check inline label="Yes" type="radio" id="yes-radio" name="radioGroup" />
                                    <Form.Check inline label="No" type="radio" id="no-radio" name="radioGroup" />
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={6} xs={12}>
                                <div className="mb-4 pt-2">
                                    <Form.Label className="form-label">Date Of Joining<span className="important">*</span>
                                    </Form.Label>
                                    <Form.Control type="date" className="form-control" required />
                                </div>
                                <div className="mb-3 pt-2">
                                    <Form.Label className="form-label">Placement Location<span className="important">*</span>
                                    </Form.Label>
                                    <Form.Select className="form-select form-control status" name="cat"
                                        aria-label="Default select example" required>
                                        <option selected> -- Please Select-- </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select >
                                </div>
                                <div className="mb-3 pt-2">
                                    <Form.Label className="form-label">Function<span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select form-control status" name="cat" aria-label="Default select example" required>
                                        <option selected> -- Please Select-- </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select >
                                </div>
                                <div className="mb-3 pt-2">
                                    <Form.Label className="form-label Contract">End Of Probation/Contract</Form.Label>
                                    <Form.Control type="date" className="form-control" required />
                                </div>
                                <div className="mb-3 pt-2">
                                    <Form.Label className="form-label">Profile<span
                                        className="important">*</span> </Form.Label>
                                    <textarea className="form-control" rows="1" required></textarea>
                                </div>
                                <div className="mb-4 pt-2">
                                    <Form.Label className="form-label">Gross Pay<span className="important">*</span>
                                    </Form.Label>
                                    <Form.Control type="text" className="form-control" required />
                                </div>
                                <div className="mb-4 pt-2">
                                    <Form.Label className="form-label">Passport No.<span className="important">*</span> </Form.Label>
                                    <Form.Control type="text" className="form-control" required />
                                </div>
                                <div className="mb-4 pt-2">
                                    <Form.Label className="form-label">A/C Number<span className="important">*</span> </Form.Label>
                                    <Form.Control type="text" className="form-control" required />
                                </div>
                                <div className="mb-4">
                                    <Form.Label className="form-label">Show On Portal<span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select status" name="cat"
                                        aria-label="Default select example" required>
                                        <option selected> No </option>
                                        <option value="1">Yes</option>
                                    </Form.Select >
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

export default EProfile
