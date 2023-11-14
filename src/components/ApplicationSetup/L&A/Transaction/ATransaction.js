import React from 'react'
import LAHeading from '../LAHeading'
import { Container, Row, Col } from 'react-bootstrap';
import LACard from '../LACard';
import { Link } from 'react-router-dom';

const ATransaction = () => {
  return (
    <>
       <Container>
        <div className="line HRISLine">
          Leave & Attendance
        </div>
        <div className="profile">
          <LAHeading />
          <Row className='ProContent'>
            <Col lg={3} md={4} sm={4} xs={12}>
              <LACard />
            </Col>
            <Col lg={9} md={8} sm={8} xs={12}>
              <div className="forms mt-4 ms-2">
                <Row className="textfield">
                  <Col lg={6} md={6} sm={6} xs={12}>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./EShift" className='Link'>Employee Shift</Link>
                      </li>
                    </div>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./LAttendance" className='Link'>Attendance</Link>
                      </li>
                    </div>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./MonthlyL" className='Link'>Monthly Leave</Link>
                      </li>
                    </div>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./OTClaim" className='Link'>OverTime Claim</Link>
                      </li>
                    </div>
                  </Col>
                  <Col lg={6} md={6} sm={6} xs={12}>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./AFile" className='Link'>Attendance File Upload</Link>
                      </li>
                    </div>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./AAA" className='Link'>Attendance Adjustment Approval</Link>
                      </li>
                    </div>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./MAttendance" className='Link'>Mark Attendance</Link>
                      </li>
                    </div>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./EYLB" className='Link'>Employee Yearly Leave Breakup</Link>
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

export default ATransaction
