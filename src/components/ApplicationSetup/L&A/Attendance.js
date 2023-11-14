import React from 'react'
import LAHeading from './LAHeading'
import { Container, Row, Col } from 'react-bootstrap';
import LACard from './LACard'
import { Link } from 'react-router-dom';

const Attendance = () => {
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
                        <Link to="./Shift" className='Link'>Shift</Link>
                      </li>
                    </div>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./HCalender" className='Link'>Holiday Calender </Link>
                      </li>
                    </div>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./OverTime" className='Link'>OverTime Type</Link>
                      </li>
                    </div>
                  </Col>
                  <Col lg={6} md={6} sm={6} xs={12}>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./Holiday" className='Link'>Holiday</Link>
                      </li>
                    </div>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./LeaveType" className='Link'>Leave Type</Link>
                      </li>
                    </div>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./OTPlan" className='Link'>OverTime Plan</Link>
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

export default Attendance
