import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import UAM from '../images/user-removebg-preview.png';
import SelfService from '../images/self-removebg-preview.png';
import MenPower from '../images/men-removebg-preview.png';
import HIRS from '../images/hrm-removebg-preview.png';
import Recruitment from '../images/rect-removebg-preview.png';
import Attendance from '../images/attend-removebg-preview.png';
import Payroll from '../images/proll-removebg-preview (1).png';
import Loan from '../images/eloan-removebg-preview.png';
import AManagement from '../images/businessman_318-863386-removebg-preview.png'
import Performance from '../images/images-removebg-preview.png'

const ApplicationSetup = () => {
    return (
        <>
            <Container>
                <div className="line">
                    Application Setup
                </div>

                <div className="slider-container">
                    <Container>
                        <div className="AllPages">
                            <Row>
                                <Col lg={3} md={4} sm={4} xs={12}>
                                    <div className="slide">
                                        <div className="contain">
                                            <img className="Images" src={UAM} width="90px"
                                                alt="" />
                                        </div>
                                        <Link className="Link" to="../UAM/UserAc">User Access Management</Link>
                                    </div>
                                </Col>
                                <Col lg={2} md={4} sm={4} xs={12}>
                                    <div className="slide">
                                        <div className="contain">
                                            <img className="Images" src={SelfService} width="90px"
                                                alt="" />
                                        </div>
                                        <Link className="Link" to="/">Self Service</Link>
                                    </div>
                                </Col>
                                <Col lg={2} md={4} sm={4} xs={12}>
                                    <div className="slide">
                                        <div className="contain">
                                            <img className="Images" src={MenPower} width="100px"
                                                alt="" />
                                        </div>
                                        <Link className="Link" to="/">ManPower Planning</Link>
                                    </div>
                                </Col>
                                <Col lg={3} md={4} sm={7} xs={12}>
                                    <div className="slide">
                                        <div className="contain">
                                            <img className="Images" src={HIRS} width="110px"
                                                alt="" />
                                        </div>
                                        <Link className="Link" to="/HRIS"> Human Resource Information System</Link>
                                    </div>
                                </Col>
                                <Col lg={2} md={4} sm={4} xs={12}>
                                    <div className="slide">
                                        <div className="contain">
                                            <img className="Images" src={Recruitment} width="100px"
                                                alt="" />
                                        </div>
                                        <Link className="Link" to="/">Recruitment</Link>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={2} md={4} sm={4} xs={12}>
                                    <div className="slide">
                                        <div className="contain">
                                            <img className="Images" src={Attendance} width="105px"
                                                alt="" />
                                        </div>
                                        <Link className="Link" to="/Attendance"> Leave & Attendance</Link>
                                    </div>
                                </Col>
                                <Col lg={2} md={4} sm={3} xs={12}>
                                    <div className="slide">
                                        <div className="contain">
                                            <img className="Images" src={Payroll} width="110px"
                                                alt="" />
                                        </div>
                                        <Link className="Link" to="/Payroll"> Payroll</Link>
                                    </div>
                                </Col>
                                <Col lg={3} md={4} sm={5} xs={12}>
                                    <div className="slide">
                                        <div className="contain">
                                            <img className="Images" src={Loan} width="110px"
                                                alt="" />
                                        </div>
                                        <Link className="Link" to="/Loan">Employee Loan Management</Link>
                                    </div>
                                </Col>
                                <Col lg={3} md={4} sm={7} xs={12}>
                                    <div className="slide">
                                        <div className="contain">
                                            <img className="Images" src={AManagement}
                                                width="100px" alt="" />
                                        </div>
                                        <Link className="Link" to="../EAM/AdvanceM.html"> Employee Advance Management</Link>
                                    </div>
                                </Col>
                                <Col lg={2} md={4} sm={4} xs={12}>
                                    <div className="slide">
                                        <div className="contain">
                                            <img className="Images" src={Performance} width="90px"
                                                alt="" />
                                        </div>
                                        <Link className="Link" to="/">Performance Management</Link>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </Container>
        </>
    )
}

export default ApplicationSetup
