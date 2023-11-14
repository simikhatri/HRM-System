import React from 'react'
import { Container, Row, Col, Form, Accordion } from 'react-bootstrap';
import Attendance from '../../../images/attendance-removebg.png'
import { Link, useNavigate } from 'react-router-dom';

const Shift = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        // Redirect to the home page
        navigate('/Attendance');
    };
    return (
        <>
            <Container>
                <div className="line HRISLine">
                    Leave & Attendance
                </div>
                <div className="MainContent">
                    <Form className="form SetupForm mt-4 ms-2">
                        <Row className="textfield">
                            <div className="Heading pb-2 ps-3">
                                <Row>
                                    <Col lg={10} md={10} sm={10} xs={10}>
                                        <h5>Shift</h5>
                                    </Col>
                                    <Col lg={2} md={2} sm={2} xs={2}>
                                        <div className="hrmImage">
                                            <Link to="/HRIS">
                                                <img src={Attendance} className="card-img-top card-img" alt="..." />
                                            </Link>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <Accordion className="accordion mt-4" defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header >Shift - Add New</Accordion.Header>
                                    <Accordion.Body className="accordion-body mb-4">
                                        <Form>
                                            <Row className="textfield">
                                                <Col lg={6} md={6} sm={6} xs={12}>
                                                    <div className="mb-3 pt-2 me-2">
                                                        <Form.Label className="form-label"> Name<span className="important">*</span> </Form.Label>
                                                        <Form.Control type="text" className="form-control" required />
                                                    </div>
                                                    <div className="mb-4 me-2 pt-2">
                                                        <Form.Label className="form-label">Based On<span className="important">*</span> </Form.Label>
                                                        <Form.Select className="form-select status" name="cat" aria-label="Default select example" required>
                                                            <option selected>Time</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </Form.Select>
                                                    </div>
                                                    <div className='mt-3'>
                                                        <Form.Check type="checkbox" id="checkboxId" inline />
                                                        <Form.Label className="form-label ps-3">Default</Form.Label>
                                                    </div>
                                                </Col>
                                                <Col lg={6} md={6} sm={6} xs={12}>
                                                    <div className="mb-3 me-2 pt-2">
                                                        <Form.Label className="form-label">Description<span className="important">*</span> </Form.Label>
                                                        <Form.Control as="textarea" rows={1} className="form-control" required></Form.Control>
                                                    </div>
                                                    <div className="mb-4 me-2 pt-2">
                                                        <Form.Label className="form-label">Status  <span className="important">*</span> </Form.Label>
                                                        <Form.Select className="form-select status" name="cat" aria-label="Default select example" required>
                                                            <option selected>Active</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </Form.Select>
                                                    </div>
                                                </Col>
                                                <div className="d-flex flex-row-reverse">
                                                    <button type="button" onClick={handleClick} className="btn">Cancel</button>
                                                    <button type="button" className="btn mr-2">SAVE</button>
                                                </div>
                                            </Row>
                                        </Form>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header >Shift Details</Accordion.Header>
                                    <Accordion.Body className="accordion-body mb-4 Shift">
                                        <Form>
                                            <Row className="textfield">
                                                <div className="table-responsive">
                                                    <table className="table table-bordered">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col"></th>
                                                                <th scope="col">Day Type</th>
                                                                <th scope="col">Start Time</th>
                                                                <th scope="col">End Time</th>
                                                                <th scope="col">Working Hours</th>
                                                                <th scope="col">Break Start Time </th>
                                                                <th scope="col">Late On Time</th>
                                                                <th scope="col">Half Day On Time</th>
                                                                <th scope="col">Absent On Time </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row">Monday</th>
                                                                <td>
                                                                    <select className="form-select" name="cat"
                                                                        aria-label="Default select example">
                                                                        <option selected></option>
                                                                        <option value="1">One</option>
                                                                        <option value="2">Two</option>
                                                                        <option value="3">Three</option>
                                                                    </select>
                                                                </td>
                                                                <td><Form.Control type="text" name="name"
                                                                    className="form-control" />
                                                                </td>
                                                                <td><Form.Control type="text" name="name"
                                                                    className="form-control" />
                                                                </td>
                                                                <td><Form.Control type="text" name="name"
                                                                    className="form-control" />
                                                                </td>
                                                                <td><Form.Control type="text" name="name"
                                                                    className="form-control" />
                                                                </td>
                                                                <td><Form.Control type="text" name="name"
                                                                    className="form-control" />
                                                                </td>
                                                                <td><Form.Control type="text" name="name"
                                                                    className="form-control" />
                                                                </td>
                                                                <td><Form.Control type="text" name="name"
                                                                    className="form-control" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Tuesday</th>
                                                                <td>
                                                                    <select className="form-select" name="cat"
                                                                        aria-label="Default select example">
                                                                        <option selected> </option>
                                                                        <option value="1">One</option>
                                                                        <option value="2">Two</option>
                                                                        <option value="3">Three</option>
                                                                    </select>
                                                                </td>
                                                                <td><Form.Control type="text" name="name"
                                                                    className="form-control" />
                                                                </td>
                                                                <td><Form.Control type="text" name="name"
                                                                    className="form-control" />
                                                                </td>
                                                                <td><Form.Control type="text" name="name"
                                                                    className="form-control" />
                                                                </td>
                                                                <td><Form.Control type="text" name="name"
                                                                    className="form-control" />
                                                                </td>
                                                                <td><Form.Control type="text" name="name"
                                                                    className="form-control" />
                                                                </td>
                                                                <td><Form.Control type="text" name="name"
                                                                    className="form-control" />
                                                                </td>
                                                                <td><Form.Control type="text" name="name"
                                                                    className="form-control" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Wednesday</th>
                                                                <td>
                                                                    <Form.Select className="form-select" name="cat"
                                                                        aria-label="Default select example">
                                                                        <option selected> </option>
                                                                        <option value="1">One</option>
                                                                        <option value="2">Two</option>
                                                                        <option value="3">Three</option>
                                                                    </Form.Select>
                                                                </td>
                                                                <td><Form.Control type="text" name="name"
                                                                    className="form-control" />
                                                                </td>
                                                                <td><Form.Control type="text" name="name"
                                                                    className="form-control" />
                                                                </td>
                                                                <td><Form.Control type="text" name="name"
                                                                    className="form-control" />
                                                                </td>
                                                                <td><Form.Control type="text" name="name"
                                                                    className="form-control" />
                                                                </td>
                                                                <td><Form.Control type="text" name="name"
                                                                    className="form-control" />
                                                                </td>
                                                                <td><Form.Control type="text" name="name"
                                                                    className="form-control" />
                                                                </td>
                                                                <td><Form.Control type="text" name="name"
                                                                    className="form-control" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Thursday</th>
                                                                <td>
                                                                    <Form.Select className="form-select" name="cat"
                                                                        aria-label="Default select example">
                                                                        <option selected> </option>
                                                                        <option value="1">One</option>
                                                                        <option value="2">Two</option>
                                                                        <option value="3">Three</option>
                                                                    </Form.Select>
                                                                </td>
                                                                <td><Form.Control type="text" name="name"
                                                                    className="form-control" />
                                                                </td>
                                                                <td><Form.Control type="text" name="name"
                                                                    className="form-control" />
                                                                </td>
                                                                <td><Form.Control type="text" name="name"
                                                                    className="form-control" />
                                                                </td>
                                                                <td><Form.Control type="text" name="name"
                                                                    className="form-control" />
                                                                </td>
                                                                <td><Form.Control type="text" name="name"
                                                                    className="form-control" />
                                                                </td>
                                                                <td><Form.Control type="text" name="name"
                                                                    className="form-control" />
                                                                </td>
                                                                <td><Form.Control type="text" name="name"
                                                                    className="form-control" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Friday</th>
                                                                <td>
                                                                    <Form.Select className="form-select" name="cat"
                                                                        aria-label="Default select example">
                                                                        <option selected> </option>
                                                                        <option value="1">One</option>
                                                                        <option value="2">Two</option>
                                                                        <option value="3">Three</option>
                                                                    </Form.Select>
                                                                </td>
                                                                <td><Form.Control type="text" name="name"
                                                                    className="form-control" />
                                                                </td>
                                                                <td><Form.Control type="text" name="name"
                                                                    className="form-control" />
                                                                </td>
                                                                <td><Form.Control type="text" name="name"
                                                                    className="form-control" />
                                                                </td>
                                                                <td><Form.Control type="text" name="name"
                                                                    className="form-control" />
                                                                </td>
                                                                <td><Form.Control type="text" name="name"
                                                                    className="form-control" />
                                                                </td>
                                                                <td><Form.Control type="text" name="name"
                                                                    className="form-control" />
                                                                </td>
                                                                <td><Form.Control type="text" name="name"
                                                                    className="form-control" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Saturday</th>
                                                                <td>
                                                                    <Form.Select className="form-select" name="cat"
                                                                        aria-label="Default select example">
                                                                        <option selected> </option>
                                                                        <option value="1">One</option>
                                                                        <option value="2">Two</option>
                                                                        <option value="3">Three</option>
                                                                    </Form.Select>
                                                                </td>
                                                                <td><Form.Control type="text" name="name"
                                                                    className="form-control" />
                                                                </td>
                                                                <td><Form.Control type="text" name="name"
                                                                    className="form-control" />
                                                                </td>
                                                                <td><Form.Control type="text" name="name"
                                                                    className="form-control" />
                                                                </td>
                                                                <td><Form.Control type="text" name="name"
                                                                    className="form-control" />
                                                                </td>
                                                                <td><Form.Control type="text" name="name"
                                                                    className="form-control" />
                                                                </td>
                                                                <td><Form.Control type="text" name="name"
                                                                    className="form-control" />
                                                                </td>
                                                                <td><Form.Control type="text" name="name"
                                                                    className="form-control" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Sunday</th>
                                                                <td>
                                                                    <Form.Select className="form-select" name="cat"
                                                                        aria-label="Default select example">
                                                                        <option selected> </option>
                                                                        <option value="1">One</option>
                                                                        <option value="2">Two</option>
                                                                        <option value="3">Three</option>
                                                                    </Form.Select>
                                                                </td>
                                                                <td><Form.Control type="text" name="name"
                                                                    className="form-control" />
                                                                </td>
                                                                <td><Form.Control type="text" name="name"
                                                                    className="form-control" />
                                                                </td>
                                                                <td><Form.Control type="text" name="name"
                                                                    className="form-control" />
                                                                </td>
                                                                <td><Form.Control type="text" name="name"
                                                                    className="form-control" />
                                                                </td>
                                                                <td><Form.Control type="text" name="name"
                                                                    className="form-control" />
                                                                </td>
                                                                <td><Form.Control type="text" name="name"
                                                                    className="form-control" />
                                                                </td>
                                                                <td><Form.Control type="text" name="name"
                                                                    className="form-control" />
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="d-flex flex-row-reverse">
                                                    <button type="button" onClick={handleClick} className="btn">Cancel</button>
                                                    <button type="button" className="btn mr-2">SAVE</button>
                                                </div>
                                            </Row>
                                        </Form>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Row>
                    </Form>
                </div>
            </Container >
        </>
    )
}

export default Shift
