import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap';
import payroll from '../../../images/proll-removebg-preview (1).png'
import { Link, useNavigate } from 'react-router-dom';

const PayrollPolicy = () => {
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
                                        <h5>Payroll Policy</h5>
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
                                <div className="mb-4 me-2 pt-2">
                                    <Form.Label className="form-label">Employee Status<span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select status" name="cat" aria-label="Default select example" required>
                                        <option selected>--All--</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                                <div className="mb-3 pt-2 me-2">
                                    <Form.Label className="form-label">Effective From<span className="important">*</span> </Form.Label>
                                    <Form.Control type="date" className="form-control" required />
                                </div>
                                <div className="mb-3 pt-2 me-2">
                                    <Form.Label className="form-label">Description<span className="important">*</span> </Form.Label>
                                    <Form.Control as="textarea" rows={1} />
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={6} xs={12}>
                                <div className="mb-3 pt-2 me-2">
                                    <Form.Label className="form-label"> Name<span className="important">*</span> </Form.Label>
                                    <Form.Control type="text" className="form-control" required />
                                </div>
                                <div className="mb-3 pt-3 me-2">
                                    <Form.Label className="form-label">Effective To<span className="important">*</span> </Form.Label>
                                    <Form.Control type="text" className="form-control" required />
                                </div>
                                <div className="mb-4 me-2 pt-2">
                                    <Form.Label className="form-label">Use Disbursement<span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select status" name="cat" aria-label="Default select example" required>
                                        <option selected>--Please Select--</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                            </Col>
                            <div className="PPHead">
                                <h5>
                                    Advance Salary Deduction from Current Month
                                </h5>
                                <Row>
                                    <Col lg={6} md={6} sm={6} xs={12}>
                                        <div className="mt-4 PPdiv">
                                            <Form.Check inline label="If approve days" type="radio" id="days" name="days" />
                                            <Form.Control type="text" className="form-control mx-1" required />
                                            before month end
                                        </div>
                                        <div className="mt-4">
                                        <Form.Check inline label="Manual" type="radio" id="day" name="radioGroup" />
                                        </div>
                                    </Col>
                                    <Col lg={6} md={6} sm={6} xs={12}>
                                        <div className="mt-4 PPdiv">
                                        <Form.Check inline label="If approve date before" type="radio" id="dys" name="days" />
                                            <Form.Control type="text" className="form-control mx-1" required />
                                            of month
                                        </div>
                                        <div className="mt-4">
                                        <Form.Check type="checkbox" id="checkboxId" inline />
                                            Advance Salary Allowed
                                        </div>
                                    </Col>
                                    <div className="mt-4 PPdiv">
                                        Percentage of Gross Salary
                                        <Form.Control type="text" className="form-control mx-1" required />%
                                        and Number of Advance Salary in a month
                                        <Form.Control type="text" className="form-control mx-1" required />
                                    </div>
                                </Row>
                            </div>
                            <div className="PPHead mt-4">
                                <h5>
                                    Re - Imbursement Addition to Current Month
                                </h5>
                                <Row>
                                    <Col lg={6} md={6} sm={6} xs={12}>
                                        <div className="mt-3 PPdiv">
                                        <Form.Check inline label="If approve days" type="radio" id="Imbursement" name="Imbursement" />
                                            <Form.Control type="text" className="form-control mx-1" required />
                                            before month end
                                        </div>
                                    </Col>
                                    <Col lg={6} md={6} sm={6} xs={12}>
                                        <div className="mt-3 PPdiv">
                                        <Form.Check inline label="If approve date before" type="radio" id="Imbursement" name="Imbursement" />
                                            <Form.Control type="text" className="form-control mx-1" required />
                                            of month
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="PPHead mt-4">
                                <h5>
                                    Loan Installment Deduction Start From Current Month
                                </h5>
                                <Row>
                                    <Col lg={6} md={6} sm={6} xs={12}>
                                        <div className="mt-3 PPdiv">
                                        <Form.Check inline label="If approve days" type="radio" id="Loan" name="Loan" />
                                            <Form.Control type="text" className="form-control mx-1" required />
                                            before month end
                                        </div>
                                    </Col>
                                    <Col lg={6} md={6} sm={6} xs={12}>
                                        <div className="mt-3 PPdiv">
                                            <Form.Check inline label=" If approve date before" type="radio" id="Loan" name="Loan" />
                                            <Form.Control type="text" className="form-control mx-1" required />
                                            of month
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="PPHead mt-4">
                                <h5>
                                    Welfare Fund Contribution Start From Current Month
                                </h5>
                                <Row>
                                    <Col lg={6} md={6} sm={6} xs={12}>
                                        <div className="mt-3 PPdiv">
                                        <Form.Check inline label=" If approve days" type="radio" id="fund" name="fund" />
                                            <Form.Control type="text" className="form-control mx-1" required />
                                            before month end
                                        </div>
                                    </Col>
                                    <Col lg={6} md={6} sm={6} xs={12}>
                                        <div className="mt-3 PPdiv">
                                        <Form.Check inline label="If approve date before" type="radio" id="fund" name="fund" />
                                            <Form.Control type="text" className="form-control mx-1" required />
                                            of month
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="PPHead mt-4">
                                <h5>
                                    Leave Encashment
                                </h5>
                                <Row>
                                    <Col lg={6} md={6} sm={6} xs={12}>
                                        <div className="mt-3">
                                            <Form.Label className="form-label">Via </Form.Label>
                                            <Form.Select className="form-select status" name="cat"
                                                aria-label="Default select example" required>
                                                <option value="0">Salary</option>
                                                <option value="1">A</option>
                                                <option value="2">B</option>
                                                <option value="3">C</option>
                                            </Form.Select>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={6} sm={6} xs={12}>
                                        <div className="mt-3">
                                            <Form.Label className="form-label">If greater than amount<span className="important">*</span> </Form.Label>
                                            <Form.Control type="text" className="form-control" required />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="PPHead mt-4">
                                <h5>
                                    Travel Expense
                                </h5>
                                <Row>
                                    <Col lg={6} md={6} sm={6} xs={12}>
                                        <div className="mt-3">
                                            <Form.Label className="form-label">Via </Form.Label>
                                            <Form.Select className="form-select status" name="cat"
                                                aria-label="Default select example" required>
                                                <option value="0">Salary</option>
                                                <option value="1">A</option>
                                                <option value="2">B</option>
                                                <option value="3">C</option>
                                            </Form.Select>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={6} sm={6} xs={12}>
                                        <div className="mt-3">
                                            <Form.Label className="form-label">If greater than amount<span className="important">*</span> </Form.Label>
                                            <Form.Control type="text" className="form-control" required />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="PPHead mt-4">
                                <h5>
                                    Expense Claim
                                </h5>
                                <Row>
                                    <Col lg={6} md={6} sm={6} xs={12}>
                                        <div className="mt-3">
                                            <Form.Label className="form-label">Via </Form.Label>
                                            <Form.Select className="form-select status" name="cat"
                                                aria-label="Default select example" required>
                                                <option value="0">Salary</option>
                                                <option value="1">A</option>
                                                <option value="2">B</option>
                                                <option value="3">C</option>
                                            </Form.Select>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={6} sm={6} xs={12}>
                                        <div className="mt-3">
                                            <Form.Label className="form-label">If greater than amount<span className="important">*</span> </Form.Label>
                                            <Form.Control type="text" className="form-control" required />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
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

export default PayrollPolicy
