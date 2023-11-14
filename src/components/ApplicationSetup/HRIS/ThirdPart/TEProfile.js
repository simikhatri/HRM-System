import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap';
import HRIS from '../../../images/hrm-removebg-preview.png'
import { Link, useNavigate } from 'react-router-dom';

const TEProfile = () => {
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
                                <div className="mb-4 pt-2 me-2">
                                    <Form.Label className="form-label">Prime HR ID<span className="important">*</span> </Form.Label>
                                    <Form.Control type="text" className="form-control" required />
                                </div>
                                <div className="mb-4 pt-2 me-2">
                                    <Form.Label className="form-label">Date Of Joining <span className="important">*</span> </Form.Label>
                                    <Form.Control type="date" className="form-control" required />
                                </div>
                                <div className="mb-3 me-2">
                                    <Form.Label className="form-label">Location<span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select form-control status" name="cat"
                                        aria-label="Default select example" required>
                                        <option selected> -- Please Select-- </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select >
                                </div>
                                <div className="mb-3 pt-2 me-2">
                                    <Form.Label className="form-label">A/C Number<span className="important">*</span> </Form.Label>
                                    <Form.Control type="text" className="form-control" required />
                                </div>
                                <div className="mb-3 pt-2 me-2">
                                    <Form.Label className="form-label">Cell No<span className="important">*</span> </Form.Label>
                                    <Form.Control type="text" className="form-control" required />
                                </div>
                                <div className="mb-4 pt-2 me-2">
                                    <Form.Label className="form-label">Present Address<span className="important">*</span> </Form.Label>
                                    <textarea className="form-control" rows="1" required></textarea>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={6} xs={12}>
                                <div className="mb-4 pt-2 me-2">
                                    <Form.Label className="form-label">IBT ID<span className="important">*</span> </Form.Label>
                                    <Form.Control type="text" className="form-control" required />
                                </div>
                                <div className="mb-3 pt-2 me-2">
                                    <Form.Label className="form-label">Project<span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select form-control status" name="cat"
                                        aria-label="Default select example" required>
                                        <option selected> -- Please Select-- </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select >
                                </div>
                                <div className="mb-3 pt-2 me-2">
                                <Form.Label className="form-label">Gross Pay<span className="important">*</span> </Form.Label>
                                    <Form.Control type="text" className="form-control" required />
                                </div>
                                <div className="mb-3 pt-2 me-2">
                                <Form.Label className="form-label">C-NIC(xxxxx-xxxxxxx-x)<span className="important">*</span> </Form.Label>
                                    <Form.Control type="text" className="form-control" required />
                                </div>
                                <div className="mb-3 pt-2 me-2">
                                <Form.Label className="form-label">Phone No<span className="important">*</span> </Form.Label>
                                    <Form.Control type="text" className="form-control" required />
                                </div>
                                <div className="mb-4 pt-2 me-2">
                                <Form.Label className="form-label">Permanent Address<span className="important">*</span> </Form.Label>
                                <textarea className="form-control" rows="1" required></textarea>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={6} xs={12}>
                                <div className="mb-4 pt-2 me-2">
                                    <Form.Label className="form-label">Employee Name<span className="important">*</span>
                                    </Form.Label>
                                    <Form.Control type="text" className="form-control" required />
                                </div>
                                <div className="mb-3 pt-2 me-2">
                                    <Form.Label className="form-label">Department<span className="important">*</span>
                                    </Form.Label>
                                    <Form.Select className="form-select form-control status" name="cat"
                                        aria-label="Default select example" required>
                                        <option selected> -- Please Select-- </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select >
                                </div>
                                <div className="mb-3 pt-2 me-2">
                                    <Form.Label className="form-label">Payment Mode<span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select form-control status" name="cat" aria-label="Default select example" required>
                                        <option selected>-- Please Select--</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select >
                                </div>
                                <div className="mb-3 pt-2 me-2">
                                    <Form.Label className="form-label">Gender<span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select status" name="cat"
                                        aria-label="Default select example" required>
                                        <option selected> -- Please Select-- </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select >
                                </div>
                                <div className="mb-4 pt-2 me-2">
                                <Form.Label className="form-label">Emergency No<span className="important">*</span>
                                    </Form.Label>
                                    <Form.Control type="text" className="form-control" required />
                                </div>
                                <div className="mb-3 pt-2 me-2 Consultant">
                                    <Form.Label className="form-label me-4 pe-4">Hold Salary</Form.Label>
                                    <Form.Check type="checkbox" id="checkboxId" inline />
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={6} xs={12}>
                                <div className="mb-4 pt-2 me-2">
                                    <Form.Label className="form-label">Father's/Husband Name<span className="important">*</span>
                                    </Form.Label>
                                    <Form.Control type="text" className="form-control" required />
                                </div>
                                <div className="mb-3 pt-2 me-2">
                                    <Form.Label className="form-label">Designation<span className="important">*</span>
                                    </Form.Label>
                                    <Form.Select className="form-select form-control status" name="cat"
                                        aria-label="Default select example" required>
                                        <option selected> -- Please Select-- </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select >
                                </div>
                                <div className="mb-3 pt-2 me-2">
                                    <Form.Label className="form-label">Bank<span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select form-control status" name="cat" aria-label="Default select example" required>
                                        <option selected> -- Please Select-- </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select >
                                </div>
                                <div className="mb-3 pt-2 me-2">
                                    <Form.Label className="form-label Contract">Date Of Birth</Form.Label>
                                    <Form.Control type="date" className="form-control" required />
                                </div>
                                <div className="mb-4 pt-2 me-2">
                                    <Form.Label className="form-label">Email<span className="important">*</span>
                                    </Form.Label>
                                    <Form.Control type="email" className="form-control" required />
                                </div>
                                <div className="mb-4 pt-2 me-2">
                                    <Form.Label className="form-label">Picture<span className="important">*</span> </Form.Label>
                                    <Form.Control type="file" className="form-control" required />
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

export default TEProfile
