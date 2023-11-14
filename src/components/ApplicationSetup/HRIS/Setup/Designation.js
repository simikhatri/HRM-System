import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap';
import HRIS from '../../../images/hrm-removebg-preview.png'
import { Link, useNavigate } from 'react-router-dom';

const Designation = () => {
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
                                        <h5>Designation - Add New</h5>
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
                                <div className="mb-4 pt-2 me-2">
                                    <Form.Label className="form-label">Company <span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select status" name="cat" aria-label="Default Form.Select example" required>
                                        <option selected>A Hamsom (Pvt) Limited </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                                <div className="mb-4 pt-2 me-2">
                                    <Form.Label className="form-label">Grade<span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select status" name="cat" aria-label="Default Form.Select example" required>
                                        <option selected> -- Please Select-- </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                                <div className="mb-3 pt-2 me-2">
                                    <Form.Label className="form-label">Designation Name<span className="important">*</span> </Form.Label>
                                    <Form.Control  type="text" className="form-control" required />
                                </div>
                                <div className="mb-3 pt-2 me-2">
                                    <Form.Label className="form-label">Report to Designation<span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select status" name="cat" aria-label="Default Form.Select example" required>
                                        <option selected> -- Please Select-- </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                                <div className="mb-3 pt-2 me-2">
                                    <Form.Label className="form-label">Grade Salary Slab (from)</Form.Label>
                                    <Form.Control  type="text" className="form-control" required />
                                </div>
                                <div className="mb-3 pt-2 me-2">
                                    <Form.Label className="form-label">Increment Value</Form.Label>
                                    <Form.Control  type="text" className="form-control" required />
                                </div>
                                <div className="mb-3 pt-2 me-2">
                                    <Form.Label className="form-label me-4 pe-4">Company Head</Form.Label>
                                    <Form.Check type="checkbox" id="checkboxId" inline  />
                                </div>
                            </Col>
                            <Col lg={4} md={4} sm={4} xs={12}>
                                <div className="mb-4 pt-2 me-2">
                                    <Form.Label className="form-label">Hierarchy<span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select status" name="cat" aria-label="Default Form.Select example" required>
                                        <option selected> -- Please Select-- </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                                <div className="mb-4 pt-2 me-2">
                                    <Form.Label className="form-label">Job Category<span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select status" name="cat" aria-label="Default Form.Select example" required>
                                        <option selected> -- Please Select-- </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                                <div className="mb-3 pt-2 me-2">
                                    <Form.Label className="form-label">Designation Domain<span className="important">*</span> </Form.Label>
                                    <Form.Control  type="text" className="form-control" required />
                                </div>
                                <div className="mb-3 pt-2 me-2">
                                    <Form.Label className="form-label">Job Description Effective Form<span className="important">*</span> </Form.Label>
                                    <Form.Control  type="date" className="form-control" required />
                                </div>
                                <div className="mb-3 pt-2 me-2">
                                    <Form.Label className="form-label">Grade Salary Slab (from)</Form.Label>
                                    <Form.Control  type="text" className="form-control" required />
                                </div>
                                <div className="mb-4 pt-2 me-2">
                                    <Form.Label className="form-label">Percentage Of<span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select status" aria-label="Default Form.Select example" required>
                                        <option selected> -- Please Select-- </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                                <div className="mb-3 pt-2 me-2">
                                    <Form.Label className="form-label me-4 pe-4">Unit Head</Form.Label>
                                    <Form.Check type="checkbox" id="checkboxId" inline  />
                                </div>
                            </Col>
                            <Col lg={4} md={4} sm={4} xs={12}>
                                <div className="mb-4 pt-2 me-2">
                                    <Form.Label className="form-label">Business Unit<span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select status" name="cat" aria-label="Default Form.Select example" required>
                                        <option selected> -- Please Select-- </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                                <div className="mb-3 pt-2 me-2">
                                    <Form.Label className="form-label">Designation Code<span className="important">*</span> </Form.Label>
                                    <Form.Control  type="text" className="form-control" required />
                                </div>
                                <div className="mb-3 pt-3 me-2">
                                    <Form.Label className="form-label">Designation Description<span className="important">*</span> </Form.Label>
                                    <Form.Control as="textarea" className="form-control" rows={1} required></Form.Control>
                                </div>
                                <div className="mb-3 pt-2 me-2">
                                    <Form.Label className="form-label">Job Description File</Form.Label>
                                    <Form.Label for="file">Attach file</Form.Label>
                                    <Form.Control  type="file" className="form-control" required />
                                </div>
                                <div className="mb-4 me-2 pt-2">
                                    <Form.Label className="form-label">Increment By<span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select status" name="cat" aria-label="Default Form.Select example" required>
                                        <option selected> -- Please Select-- </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                                <div className="mb-4 me-2">
                                    <Form.Label className="form-label">Status<span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select status" name="cat" aria-label="Default Form.Select example" required>
                                        <option selected>Active</option>
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

export default Designation
