import React from 'react'
import { Container, Row, Col, Form} from 'react-bootstrap';
import Attendance from '../../../images/attendance-removebg.png'
import { Link, useNavigate } from 'react-router-dom';

const EYLB = () => {
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
                                        <h5>Employee Yearly Leave BreakUp</h5>
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
                                    <Form.Label className="form-label">Start Date<span className="important">*</span> </Form.Label>
                                    <p class="mt-2">01-01-2023</p>
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={6} xs={12}> 
                                <div className="mb-3 me-2 pt-2">
                                    <Form.Label className="form-label">End Date<span className="important">*</span> </Form.Label>
                                    <p class="mt-2">31-12-2023</p>
                                </div>
                            </Col>
                            <div className="d-flex flex-row-reverse">
                                <button type="button" onClick={handleClick} className="btn">Generate</button>
                            </div>
                        </Row>
                    </Form>
                 </div>
            </Container >
    </>
  )
}

export default EYLB
