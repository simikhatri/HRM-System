import React from 'react'
import { Container, Row, Col, Form} from 'react-bootstrap';
import payroll from '../../../images/proll-removebg-preview (1).png'
import { Link, useNavigate } from 'react-router-dom';

const OTPUB = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        // Redirect to the home page
        navigate('/Payroll');
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
                                        <h5>One Time Payment Uploaad By - Add New</h5>
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
                                    <Form.Label className="form-label">Employee Name<span className="important">*</span> </Form.Label>
                                    <Form.Control type="text" className="form-control" required />
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={6} xs={12}>
                            <div className="mb-4 me-2 pt-2">
                                    <Form.Label className="form-label">Allowance Name<span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select status" name="cat" aria-label="Default select example" required>
                                    <option value="0">Advance Salary(salary Advance)</option>
                                            <option value="1">Arrears(Arrears)</option>
                                            <option value="2">Car Allowance(Additional Allowance)</option>
                                            <option value="3">Car lease(Additional Allowance)</option>
                                            <option value="4">Car Maintenance(Additional Allowance)</option>
                                    </Form.Select>
                                </div>
                            </Col>
                            <div className="d-flex flex-row-reverse">
                                <button type="button" onClick={handleClick} className="btn">Cancel</button>
                                <button type="button" className="btn mr-2">Save</button>
                            </div>
                        </Row>
                    </Form>
                </div>
            </Container >
    </>
  )
}

export default OTPUB
