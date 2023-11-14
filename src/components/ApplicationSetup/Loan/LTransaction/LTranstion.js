import React from 'react'
import LCard from '../LCard'
import LHeading from '../LHeading'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const LTranstion = () => {
  return (
    <>
        <Container>
        <div className="line HRISLine">
          Employee Loan Management
        </div>
        <div className="profile">
          <LHeading/>
          <Row className='ProContent'>
            <Col lg={3} md={4} sm={4} xs={12}>
              <LCard/>
            </Col>
            <Col lg={9} md={8} sm={8} xs={12}>
              <div className="forms mt-4 ms-2">
                <Row className="textfield">
                  <Col lg={6} md={6} sm={6} xs={12}>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./Loan" className='Link'>Loan</Link>
                      </li>
                    </div>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./LoanInstallmentGeneration" className='Link'>Loan Installment Generation</Link>
                      </li>
                    </div>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./LoanAdjustmentsentforApproval" className='Link'>Loan Adjustments to be sent for Approval</Link>
                      </li>
                    </div>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./LoanRepayment" className='Link'>Loan Repayment</Link>
                      </li>
                    </div>
                  </Col>
                  <Col lg={6} md={6} sm={6} xs={12}>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./LoanApproval" className='Link'>Loan Approval</Link>
                      </li>
                    </div>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./LoanInstallmentGenerationApproval" className='Link'>Loan Installment Generation Approval</Link>
                      </li>
                    </div>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./LoanAjustmentApproval" className='Link'>Loan Adjustments Approval</Link>
                      </li>
                    </div>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./LoanRepaymentApproval" className='Link'>Loan Repayment Approval</Link>
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

export default LTranstion
