import React from 'react'
import PCard from '../PCard'
import PHeading from '../PHeading'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PTransaction = () => {
    const showAlert = () => {
        alert('Not Opened!');
      };
    return (
        <>
            <Container>
                <div className="line HRISLine">
                    Payroll
                </div>
                <div className="profile">
                    <PHeading />
                    <Row className='ProContent'>
                        <Col lg={3} md={4} sm={4} xs={12}>
                            <PCard />
                        </Col>
                        <Col lg={9} md={8} sm={8} xs={12}>
                            <div className="forms mt-4 ms-2">
                                <Row className="textfield">
                                    <Col lg={6} md={6} sm={6} xs={12}>
                                        <div className="mb-4">
                                            <li className="mb-3">
                                                <Link to="/PTransaction" className='Link' onClick={showAlert}>Advance Salary Disbursement</Link>
                                            </li>
                                        </div>
                                        <div className="mb-4">
                                            <li className="mb-3">
                                                <Link to="./Increment" className='Link'>Increment</Link>
                                            </li>
                                        </div>
                                        <div className="mb-4">
                                            <li className="mb-3">
                                                <Link to="./PSalary" className='Link'>Payroll Salary</Link>
                                            </li>
                                        </div>
                                        <div className="mb-4">
                                            <li className="mb-3">
                                                <Link to="./PChecker" className='Link'>Payroll Checker</Link>
                                            </li>
                                        </div>
                                        <div className="mb-4">
                                            <li className="mb-3">
                                                <Link to="./OverTime" className='Link'>Overtime</Link>
                                            </li>
                                        </div>
                                        <div className="mb-4">
                                            <li className="mb-3">
                                                <Link to="./BDAL" className='Link'>Bonus Disbursement Approval List</Link>
                                            </li>
                                        </div>
                                        <div className="mb-4">
                                            <li className="mb-3">
                                                <Link to="./FFA" className='Link'>Full and Final Adjustment</Link>
                                            </li>
                                        </div>
                                        <div className="mb-4">
                                            <li className="mb-3">
                                                <Link to="./SalaryD" className='Link'>Salary Disbursement</Link>
                                            </li>
                                        </div>
                                        <div className="mb-4">
                                            <li className="mb-3">
                                                <Link to="./WFD" className='Link'>Welfare Fund Distribution</Link>
                                            </li>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={6} sm={6} xs={12}>
                                        <div className="mb-4">
                                            <li className="mb-3">
                                                <Link to="./OTPayment" className='Link'>One Time Payment</Link>
                                            </li>
                                        </div>
                                        <div className="mb-4">
                                            <li className="mb-3">
                                                <Link to="./IApproval" className='Link'>Increment Approval</Link>
                                            </li>
                                        </div>
                                        <div className="mb-4">
                                            <li className="mb-3">
                                                <Link to="./PView" className='Link'>Payroll View</Link>
                                            </li>
                                        </div>
                                        <div className="mb-4">
                                            <li className="mb-3">
                                                <Link to="./PayrollApp" className='Link'>Payroll Approval</Link>
                                            </li>
                                        </div>
                                        <div className="mb-4">
                                            <li className="mb-3">
                                                <Link to="./BDList" className='Link'>Bonus Disbursement List</Link>
                                            </li>
                                        </div>
                                        <div className="mb-4">
                                            <li className="mb-3">
                                                <Link to="./FFS" className='Link'>Full and Final Sattlement</Link>
                                            </li>
                                        </div>
                                        <div className="mb-4">
                                            <li className="mb-3">
                                                <Link to="./FAFApproval" className='Link'>Full and Final Approval</Link>
                                            </li>
                                        </div>
                                        <div className="mb-4">
                                            <li className="mb-3">
                                                <Link to="./SDD" className='Link'>Salary Disbursement Detail</Link>
                                            </li>
                                        </div>
                                        <div className="mb-4">
                                            <li className="mb-3">
                                                <Link to="./PFWithdrawal" className='Link'>PF Withdrawal</Link>
                                            </li>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default PTransaction
