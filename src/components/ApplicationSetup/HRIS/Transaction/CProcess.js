import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap';
import HRIS from '../../../images/hrm-removebg-preview.png'
import { Link, useNavigate } from 'react-router-dom';


const CProcess = () => {
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
                                        <h5>Confirmation Process</h5>
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
                                    <Form.Label className="form-label">Employee Code<span className="important">*</span> </Form.Label>
                                    <p className="Review">068</p>
                                </div>
                                <div className="mb-4 pt-2 me-3">
                                    <Form.Label className="form-label">Grade<span className="important">*</span> </Form.Label>
                                    <p className="Review">E6</p>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={6} xs={12}>
                                <div className="mb-4 pt-2 me-3">
                                    <Form.Label className="form-label">Employee Name<span className="important">*</span> </Form.Label>
                                    <p className="Review">Mohsin Farooq</p>
                                </div>
                                <div className="mb-4 pt-2 me-3">
                                    <Form.Label className="form-label">Date Of Joining<span className="important">*</span> </Form.Label>
                                    <p className="Review">20-06-2022</p>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={6} xs={12}>
                                <div className="mb-4 pt-2 me-3">
                                    <Form.Label className="form-label">Designation<span className="important">*</span>
                                    </Form.Label>
                                    <p className="Review">Associate Software Engineer</p>
                                </div>
                                <div className="mb-4 pt-2 me-3">
                                    <Form.Label className="form-label">Probation Completion Date<span className="important">*</span> </Form.Label>
                                    <p className="Review">20-06-2022</p>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={6} xs={12}>
                                <div className="mb-4 pt-2">
                                    <Form.Label className="form-label">Department<span className="important">*</span>
                                    </Form.Label>
                                    <p className="Review">Software Development</p>
                                </div>
                            </Col>
                            <table className="table Ratings">
                                <thead>
                                    <tr>
                                        <th className="Reviews" >Remarks of Human Resource Department</th>
                                        <th className="Reviews text-center">Good</th>
                                        <th className="Reviews text-center">Average</th>
                                        <th className="Reviews text-center">Below Average</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th className="Reviews">compliance of HR Policies & Procedures</th>
                                        <td><Form.Check inline type="radio" id="Good" name="radioGroup"/></td>
                                        <td><Form.Check inline type="radio" id="Average" name="radioGroup" /></td>
                                        <td><Form.Check inline type="radio" id="BelowAverage" name="radioGroup" /></td>
                                    </tr>
                                    <tr>
                                        <th className="Reviews">Attendance</th>
                                        <td><Form.Check inline type="radio" id="Good" name="radioGroup"/></td>
                                        <td><Form.Check inline type="radio" id="Average" name="radioGroup" /></td>
                                        <td><Form.Check inline type="radio" id="BelowAverage" name="radioGroup" /></td>
                                    </tr>
                                    <tr>
                                        <th className="Reviews">Status of Personal file</th>
                                        <td><Form.Check inline type="radio" id="Good" name="radioGroup"/></td>
                                        <td><Form.Check inline type="radio" id="Average" name="radioGroup" /></td>
                                        <td><Form.Check inline type="radio" id="BelowAverage" name="radioGroup" /></td>
                                    </tr>
                                    <tr>
                                        <th className="Reviews">Status of Profile</th>
                                        <td><Form.Check inline type="radio" id="Good" name="radioGroup"/></td>
                                        <td><Form.Check inline type="radio" id="Average" name="radioGroup" /></td>
                                        <td><Form.Check inline type="radio" id="BelowAverage" name="radioGroup" /></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="mb-3 pt-2">
                                <Form.Label className="form-label">HR Comments (If Any)<span className="important">*</span> </Form.Label>
                                <textarea className="form-control" rows="1" required></textarea>
                            </div>
                            <div className="d-flex flex-row-reverse">
                                <button type="button" onClick={handleClick} className="btn">Cancel</button>
                                <button type="button" className="btn mr-2">Initiate</button>
                            </div>
                        </Row>
                    </Form>
                </div>
            </Container >
    </>
  )
}

export default CProcess
