import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap';
import payroll from '../../../images/proll-removebg-preview (1).png'
import { Link, useNavigate } from 'react-router-dom';

const WFD = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        // Redirect to the home page
        navigate('/PTransaction');
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
                                        <h5>Welfare Fund Distribution</h5>
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
                                    <Form.Select className="form-select status" name="cat" aria-label="Default select example" required>
                                        <option value="0">--Please Select--</option>
                                        <option value="1">...</option>
                                        <option value="2">..</option>
                                    </Form.Select>
                                </div>
                                <div className="mb-3 pt-2 me-2">
                                    <Form.Label className="form-label">Distributed Amount<span className="important">*</span> </Form.Label>
                                    <Form.Control type="text" className="form-control" required />
                                </div>
                                <div className="mb-3 pt-2 me-2">
                                    <Form.Label className="form-label">Reason<span className="important">*</span> </Form.Label>
                                    <Form.Control as="textarea" rows={1} className="form-control" required />
                                </div>
                                <div className="mb-3 pt-2 me-2">
                                    <Form.Label className="form-label">Approved By<span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select status" name="cat" aria-label="Default select example" required>
                                        <option value="0">002 - Faridoon Ahmed</option>
                                        <option value="1">003 - Nadir Rahim</option>
                                        <option value="2">004 - Mirza Naveed Hameed</option>
                                        <option value="3">005 - Zeeshan Rauf</option>
                                        <option value="4">006 - Awais Yousaf Chughtai</option>
                                    </Form.Select>
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={6} xs={12}>
                                <div className="mb-3 pt-2 me-2">
                                    <Form.Label className="form-label">Distributed Date<span className="important">*</span> </Form.Label>
                                    <Form.Control type="date" className="form-control" required />
                                </div>
                                <div className="mb-3 pt-2 me-2">
                                    <Form.Label className="form-label">Available Amount<span className="important">*</span> </Form.Label>
                                    <Form.Control type="text" className="form-control" required />
                                </div>                                
                                <div className="mb-3 pt-2 me-2">
                                    <Form.Label className="form-label">Available Amount<span className="important">*</span> </Form.Label>
                                    <Form.Control type="file" className="form-control" required />
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

export default WFD
