import React from 'react'
import PCard from './PCard'
import PHeading from './PHeading'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Payroll = () => {
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
          <PHeading/>
          <Row className='ProContent'>
            <Col lg={3} md={4} sm={4} xs={12}>
              <PCard/>
            </Col>
            <Col lg={9} md={8} sm={8} xs={12}>
              <div className="forms mt-4 ms-2">
                <Row className="textfield">
                  <Col lg={6} md={6} sm={6} xs={12}>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./TaxPlan" className='Link'>Tax Plan</Link>
                      </li>
                    </div>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./OTPUB" className='Link'>One Time Payment Upload By</Link>
                      </li>
                    </div>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="/Payroll" className='Link' onClick={showAlert}>Provident Policy</Link>
                      </li>
                    </div>
                  </Col>
                  <Col lg={6} md={6} sm={6} xs={12}>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./PayrollPolicy" className='Link'>Payroll Policy</Link>
                      </li>
                    </div>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./LeaveType" className='Link' onClick={showAlert}>Gratuity Policy</Link>
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

export default Payroll
