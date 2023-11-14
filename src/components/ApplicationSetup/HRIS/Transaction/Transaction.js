import React from 'react'
import HRISHeading from '../HRISHeading'
import { Container, Row, Col } from 'react-bootstrap';
import HRISCard from '../HRISCard';
import { Link } from 'react-router-dom';

const Transaction = () => {
  return (
    <>
      <Container>
        <div className="line HRISLine">
          Human Resource Information System
        </div>
        <div className="profile">
          <HRISHeading />
          <Row className='ProContent'>
            <Col lg={3} md={4} sm={4} xs={12}>
              <HRISCard />
            </Col>
            <Col lg={9} md={8} sm={8} xs={12}>
              <div className="forms mt-4 ms-2">
                <Row className="textfield">
                  <Col lg={6} md={6} sm={6} xs={12}>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./EProfile" className='Link'>Employee Profile</Link>
                      </li>
                    </div>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./ECNRProcess" className='Link'>Employee Confirmation Mid Review Process</Link>
                      </li>
                    </div>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./EAdesignation" className='Link'>Employee Acting Designation </Link>
                      </li>
                    </div>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./ResourceInfo" className='Link'>Resource Info </Link>
                      </li>
                    </div>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./EPEmail" className='Link'>Employee Profile Email </Link>
                      </li>
                    </div>
                  </Col>
                  <Col lg={6} md={6} sm={6} xs={12}>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./EAPD" className='Link'>Employee and Project Distribution </Link>
                      </li>
                    </div>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./EDelegation" className='Link'>Employee Delegation </Link>
                      </li>
                    </div>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./EOValues" className='Link'>Employee Opening Values</Link>
                      </li>
                    </div>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./CProcess" className='Link'>Confirmation Process </Link>
                      </li>
                    </div>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./EStatus" className='Link'>Employee Status </Link>
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

export default Transaction
