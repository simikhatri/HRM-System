import React from 'react'
import PCard from '../PCard'
import PHeading from '../PHeading'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Benefits = () => {
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
                                                <Link to="./Unit" className='Link'>Unit</Link>
                                            </li>
                                        </div>
                                        <div className="mb-4">
                                            <li className="mb-3">
                                                <Link to="./BPolicy" className='Link'>Benefit Policy</Link>
                                            </li>
                                        </div>
                                        <div className="mb-4">
                                            <li className="mb-3">
                                                <Link to="./EBApproval" className='Link'>Employee Benefit Approval</Link>
                                            </li>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={6} sm={6} xs={12}>
                                    <div className="mb-4">
                                            <li className="mb-3">
                                                <Link to="./UnitRate" className='Link'>Unit Rate</Link>
                                            </li>
                                        </div>
                                        <div className="mb-4">
                                            <li className="mb-3">
                                                <Link to="./EBenefit" className='Link'>Employee Benefit</Link>
                                            </li>
                                        </div>
                                        <div className="mb-4">
                                            <li className="mb-3">
                                                <Link to="./EBActual" className='Link'>Employee Benefit Actual</Link>
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

export default Benefits
