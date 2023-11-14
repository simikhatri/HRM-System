import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap';
import Attendance from '../../../images/attendance-removebg.png'
import { Link, useNavigate } from 'react-router-dom';

const EShift = () => {
  const navigate = useNavigate();
  const handleClick = () => {
      // Redirect to the home page
      navigate('/ATransaction');
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
                                        <h5>Employee Shift - Add New</h5>
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
                            <Col lg={6} md={6} sm={6} xs={12}>
                                <div className="mb-3 pt-2 me-2">
                                <Form.Label className="form-label">Employee<span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select status" name="cat" aria-label="Default select example" required>
                                    <option selected>002 - Faridoon Ahmed</option>
                                        <option value="1">003 - Nadir Rahim</option>
                                        <option value="2">004 - Mirza Naveed Haveed</option>
                                        <option value="3">005 - Zeeshan Rauf</option>
                                        <option value="2">006 - Awais Yousaf Chughtai</option>
                                        <option value="3">007 - Nauman Malik</option>
                                    </Form.Select>
                                </div>
                                <div className="mb-3 pt-2 me-2">
                                    <Form.Label className="form-label">Effecting From<span className="important">*</span> </Form.Label>
                                    <Form.Control type="date" className="form-control" required />
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={6} xs={12}>
                            <div className="mb-4 me-2 pt-2">
                                    <Form.Label className="form-label">Shift<span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select status" name="cat" aria-label="Default select example" required>
                                        <option selected>--Please Select--</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div> 
                                <div className="mb-3 me-2">
                                    <Form.Label className="form-label">Effecting To<span className="important">*</span> </Form.Label>
                                    <Form.Control type="date" className="form-control" required />
                                </div>
                            </Col>
                            <div className="d-flex flex-row-reverse">
                                <button type="button" onClick={handleClick} className="btn">Cancel</button>
                                <button type="button" className="btn mr-2">Save Now</button>
                            </div>
                        </Row>
                    </Form>
                 </div>
            </Container >
    </>
  )
}

export default EShift
