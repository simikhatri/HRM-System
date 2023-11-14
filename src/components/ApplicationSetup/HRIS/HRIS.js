import React from 'react'
import HRISHeading from './HRISHeading'
import { Container, Row, Col } from 'react-bootstrap';
import HRISCard from './HRISCard';
import { Link } from 'react-router-dom';

const HRIS = () => {
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
                  <Col lg={4} md={6} sm={6} xs={12}>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./FisalYears" className='Link'>Fiscal-Years</Link>
                      </li>
                    </div>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./Certificatetype" className='Link'>Certification Type </Link>
                      </li>
                    </div>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./Language" className='Link'>Language</Link>
                      </li>
                    </div>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./Allowance" className='Link'>Allowance</Link>
                      </li>
                    </div>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./LeavingReason" className='Link'>Leaving Reason</Link>
                      </li>
                    </div>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./HRDoc" className='Link'>HR Documents</Link>
                      </li>
                    </div>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./PItem" className='Link'>Possession Item</Link>
                      </li>
                    </div>
                  </Col>
                  <Col lg={4} md={6} sm={6} xs={12}>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./Designation" className='Link'>Designation</Link>
                      </li>
                    </div>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./Certification" className='Link'>Certification </Link>
                      </li>
                    </div>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./Bank" className='Link'>Bank</Link>
                      </li>
                    </div>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./CheckList" className='Link'>Checklist Item</Link>
                      </li>
                    </div>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./Compensation" className='Link'>Compensation Plan</Link>
                      </li>
                    </div>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./ITraining" className='Link'>International Training </Link>
                      </li>
                    </div>
                  </Col>
                  <Col lg={4} md={6} sm={6} xs={12}>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./Grade" className='Link'>Grade</Link>
                      </li>
                    </div>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./Religion" className='Link'>Religion</Link>
                      </li>
                    </div>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./Branch" className='Link'>Branch</Link>
                      </li>
                    </div>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./DCType" className='Link'>Document Type</Link>
                      </li>
                    </div>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./Possession" className='Link'>Possession Type</Link>
                      </li>
                    </div>
                    <div className="mb-4">
                      <li className="mb-3">
                        <Link to="./News" className='Link'>News</Link>
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

export default HRIS
