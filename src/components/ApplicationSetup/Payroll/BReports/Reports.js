import React from 'react'
import PCard from '../PCard'
import PHeading from '../PHeading'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Reports = () => {
    const showAlert = () => {
        alert('Page Not Opened!');
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
                                                <Link to="./Payroll Information Report" className='Link'>Payroll Information Report</Link>
                                            </li>
                                        </div>
                                        <div className="mb-4">
                                            <li className="mb-3">
                                                <Link to="./Employee Pay-Slip Report" className='Link'>Employee Pay-Slip Report</Link>
                                            </li>
                                        </div>
                                        <div className="mb-4">
                                            <li className="mb-3">
                                                <Link to="./Employee Clearance" className='Link'>Employee Clearance</Link>
                                            </li>
                                        </div>
                                        <div className="mb-4">
                                            <li className="mb-3">
                                                <Link to="./PayrollReconciliation-CurrentReport" className='Link'>Payroll Reconciliation - current Report</Link>
                                            </li>
                                        </div>
                                        <div className="mb-4">
                                            <li className="mb-3">
                                                <Link to="./Employee Salary Paid Through" className='Link'>Employee Salary Paid Through</Link>
                                            </li>
                                        </div>
                                        <div className="mb-4">
                                            <li className="mb-3">
                                                <Link to="./ContributionDetailReport" className='Link'>Contribution Detail Report</Link>
                                            </li>
                                        </div>
                                          <div className="mb-4">
                                            <li className="mb-3">
                                                <Link to="./EmployeeSalaryCertificateReport" className='Link'>Employee Salary Certificate Report</Link>
                                            </li>
                                        </div>
                                        <div className="mb-4">
                                            <li className="mb-3">
                                                <Link to="./EmployeeIncrementLetterReport" className='Link'>Employee Increment Letter Report</Link>
                                            </li>
                                        </div>
                                        <div className="mb-4">
                                            <li className="mb-3">
                                                <Link to="./SalaryTransferReport" className='Link'>Salary Transfer Letter</Link>
                                            </li>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={6} sm={6} xs={12}>
                                        <div className="mb-4">
                                            <li className="mb-3">
                                                <Link to="./MonthlyPayrollSheet" className='Link'>Monthly Payroll Sheet</Link>
                                            </li>
                                        </div>
                                        <div className="mb-4">
                                            <li className="mb-3">
                                                <Link to="./Full&FinalSattlement" className='Link'>Full and Final Sattlement</Link>
                                            </li>
                                        </div>
                                        <div className="mb-4">
                                            <li className="mb-3">
                                                <Link to="./PayrollReconciliation-ComparativeReport" className='Link'>Payroll Reconciliation - Comparative Report</Link>
                                            </li>
                                        </div>
                                        <div className="mb-4">
                                            <li className="mb-3">
                                                <Link to="./LocationWiseAverageSalary" className='Link'>BU/Location Wise Average Salary</Link>
                                            </li>
                                        </div>
                                        <div className="mb-4">
                                            <li className="mb-3">
                                                <Link to="./EmployeeProvidentFundDetail" className='Link'>Employee Provident Fund Detail</Link>
                                            </li>
                                        </div>
                                        <div className="mb-4">
                                            <li className="mb-3">
                                                <Link to="/Report" className='Link' onClick={showAlert}>Vouchar Summary</Link>
                                            </li>
                                        </div>
                                          <div className="mb-4">
                                            <li className="mb-3">
                                                <Link to="./EmployeeIncrementDetailByBU" className='Link'>Employee Increment Detail By BU</Link>
                                            </li>
                                        </div>
                                        <div className="mb-4">
                                            <li className="mb-3">
                                                <Link to="./MonthlyTaxReport" className='Link'>Monthly Tax Report</Link>
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

export default Reports
