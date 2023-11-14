import Profile from './images/profile.jpg';
import { Container, Row, Col, Form, Card } from 'react-bootstrap';
import NavLinks from './NavLinks';


const Personal = () => {
    return (
        <>
            <NavLinks />
            <Container fluid className='MainCont'>
                <Row className="personalInfo">
                    <Col lg={3} md={3} sm={12} xs={12}>
                        <Card className="card mt-4 text-center">
                            <Card.Img src={Profile} className="card-img-top card-img" alt="..." />
                            <Card.Body className="card-body">
                                <Card.Title className="card-title">Abdul Bari</Card.Title>
                                <Card.Text className="card-text">VP Human Resources & Administration</Card.Text>
                                <Card.Text className="card-text">abari@ahamson.com</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={9} md={9} sm={12} xs={12}>
                        <Form className="form mt-4 ms-2">
                            <Row className="textfield">
                                <Col lg={4} md={4} sm={4} xs={12}>
                                    <div className="mb-3">
                                        <Form.Label className="form-label">Employee Code</Form.Label>
                                        <Form.Control type="text" className="form-control" id="Code" />
                                    </div>
                                    <div className="mb-3">
                                        <Form.Label className="form-label">Supervisor</Form.Label>
                                        <Form.Control type="text" className="form-control" id="Supervisor" />
                                    </div>
                                    <div className="mb-3">
                                        <Form.Label className="form-label">CNIC</Form.Label>
                                        <Form.Control type="text" className="form-control" id="cnic" />
                                    </div>
                                    <div className="mb-3">
                                        <Form.Label className="form-label">Date Of Birth</Form.Label>
                                        <Form.Control type="text" className="form-control" id="dob" />
                                    </div>
                                    <div className="mb-3">
                                        <Form.Label className="form-label">Personal Email</Form.Label>
                                        <Form.Control type="email" className="form-control" id="email" />
                                    </div>
                                </Col>
                                <Col lg={4} md={4} sm={4} xs={12}>
                                    <div className="mb-3">
                                        <Form.Label className="form-label">Employee Name</Form.Label>
                                        <Form.Control type="text" className="form-control" id="name" />
                                    </div>
                                    <div className="mb-3">
                                        <Form.Label className="form-label">Grade</Form.Label>
                                        <Form.Control type="text" className="form-control" id="grade" />
                                    </div>
                                    <div className="mb-3">
                                        <Form.Label className="form-label">CNIC Expiry</Form.Label>
                                        <Form.Control type="text" className="form-control" id="cnicexpiry" />
                                    </div>
                                    <div className="mb-3">
                                        <Form.Label className="form-label">Cell Number(s)</Form.Label>
                                        <Form.Control type="tel" className="form-control" id="number" />
                                    </div>
                                    <div className="mb-3">
                                        <Form.Label className="form-label">permanent Address</Form.Label>
                                        <Form.Control type="text" className="form-control" id="paddress" />
                                    </div>
                                </Col>
                                <Col lg={4} md={4} sm={4} xs={12}>
                                    <div className="mb-3">
                                        <Form.Label className="form-label">Father/Husband Name</Form.Label>
                                        <Form.Control type="text" className="form-control" id="name" />
                                    </div>
                                    <div className="mb-3">
                                        <Form.Label className="form-label">Date of joining</Form.Label>
                                        <Form.Control type="text" className="form-control" id="joindate" />
                                    </div>
                                    <div className="mb-3">
                                        <Form.Label className="form-label">gender</Form.Label>
                                        <Form.Control type="text" className="form-control" id="gender" />
                                    </div>
                                    <div className="mb-3">
                                        <Form.Label className="form-label">Residence Phone#</Form.Label>
                                        <Form.Control type="tel" className="form-control" id="phone" />
                                    </div>
                                    <div className="mb-3">
                                        <Form.Label className="form-label">present Address</Form.Label>
                                        <Form.Control type="text" className="form-control" id="address2" />
                                    </div>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Personal
