import React from 'react'
import HRISHeading from '../HRISHeading'
import { Container, Row, Col } from 'react-bootstrap';
import HRISCard from '../HRISCard';
import { Link } from 'react-router-dom';

const Skills = () => {
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
                                                <Link to="./Domain" className='Link'>Domain</Link>
                                            </li>
                                        </div>
                                        <div className="mb-4">
                                            <li className="mb-3">
                                                <Link to="./AOExpertise" className='Link'>Area Of Expertis</Link>
                                            </li>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={6} sm={6} xs={12}>
                                        <div className="mb-4">
                                            <li className="mb-3">
                                                <Link to="./Category" className='Link'>Category</Link>
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

export default Skills
