import React, { useState } from 'react'
import { Container, Row, Col, Form, Accordion } from 'react-bootstrap';
import NavLinks from './NavLinks';

const Experience = () => {
    //Set up state to capture form data of Add Employement Experience
    const [formeExperience, setFormeExperience] = useState([]);
    const [currenteExperience, setCurrenteExperience] = useState({
        Organization: '',
        Designation: '',
        StartDate: '',
        EndDate: '',
        Responsbility: '',
        eDocument: '',
    });
    //Set up state to capture form data of Add Trainings
    const [PExperience, setPExperience] = useState([]);
    const [currentPExperience, setCurrentPExperience] = useState({
        Employer: '',
        Customer: '',
        Industry: '',
        ProjectName: '',
        Location: '',
        TechinalDetails: '',
        PResponsbility: '',
        PStartDate: '',
        PEndDate: '',
    });
    // Event handler to update current form data of Employement Experience
    const handleEmployeeChange = (event) => {
        const { name, value } = event.target;
        setCurrenteExperience({
            ...currenteExperience,
            [name]: value,
        });
    };
    // Event handler to update current form data of Project Experiences
    const handleProjectChange = (event) => {
        const { name, value } = event.target;
        setCurrentPExperience({
            ...currentPExperience,
            [name]: value,
        });
    };
    // Event handler for submitting the form Project Experiences
    const handleEmployeeSubmit = (event) => {
        event.preventDefault();
        setFormeExperience([...formeExperience, currenteExperience]);
        setCurrenteExperience({
            Organization: '',
            Designation: '',
            StartDate: '',
            EndDate: '',
            Responsbility: '',
            eDocument: '',
        });
    };
    // Event handler for submitting the form Add Training
    const handleProjectESubmit = (event) => {
        event.preventDefault();
        setPExperience([...PExperience, currentPExperience]);
        setCurrentPExperience({
            Employer: '',
            Customer: '',
            Industry: '',
            ProjectName: '',
            Location: '',
            TechinalDetails: '',
            PResponsbility: '',
            PStartDate: '',
            PEndDate: '',
        });
    };
    return (
        <>
           <NavLinks />
            <Container fluid className='MainCont'>
                <Row className="personalInfo">
                    <Col>
                        <Accordion className="accordion mt-4" defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header >Employment Experience</Accordion.Header>
                                <Accordion.Body className="accordion-body mb-4">
                                    <div className="edittable mt-2">
                                        <Form onSubmit={handleEmployeeSubmit}>
                                            <div className="table-responsive">
                                                <table className="table table-bordered tblX">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Organization</th>
                                                            <th scope="col">Designation</th>
                                                            <th scope="col">Start Date</th>
                                                            <th scope="col">End Date</th>
                                                            <th scope="col">Responsibilities</th>
                                                            <th scope="col">Document</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {formeExperience.map((formEEData, index) => (
                                                            <tr key={index}>
                                                                <td>{formEEData.Organization}</td>
                                                                <td>{formEEData.Designation}</td>
                                                                <td>{formEEData.StartDate}</td>
                                                                <td>{formEEData.EndDate}</td>
                                                                <td>{formEEData.Responsbility}</td>
                                                                <td>{formEEData.eDocument}</td>
                                                            </tr>
                                                        ))}
                                                        <tr>
                                                            <td><Form.Control type="text" name="Organization"
                                                                value={currenteExperience.Organization}
                                                                onChange={handleEmployeeChange}
                                                                className="form-control" required
                                                                autocomplete="off" />
                                                            </td>
                                                            <td><Form.Control type="text" name="Designation"
                                                                value={currenteExperience.Designation}
                                                                onChange={handleEmployeeChange}
                                                                className="form-control" required
                                                                autocomplete="off" />
                                                            </td>
                                                            <td><Form.Control type="date" name="StartDate"
                                                                value={currenteExperience.StartDate}
                                                                onChange={handleEmployeeChange}
                                                                className="form-control" required autocomplete="off" /></td>
                                                            <td><Form.Control type="date" name="EndDate"
                                                                value={currenteExperience.EndDate}
                                                                onChange={handleEmployeeChange}
                                                                className="form-control" required autocomplete="off" />
                                                            </td>
                                                            <td><Form.Control type="text" name="Responsbility"
                                                                value={currenteExperience.Responsbility}
                                                                onChange={handleEmployeeChange}
                                                                className="form-control" required
                                                                autocomplete="off" />
                                                            </td>
                                                            <td><Form.Control type="file" name="eDocument"
                                                                value={currenteExperience.eDocument}
                                                                onChange={handleEmployeeChange} id="file" className="form-control" />
                                                                <label for="file" id="label">Attach file</label>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="d-flex flex-row-reverse">
                                                <button type="button" className="btn">SAVE</button>
                                                <button type="submit" className="btn mr-2">ADD</button>
                                            </div>
                                        </Form>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header >Project Experience</Accordion.Header>
                                <Accordion.Body className="accordion-body mb-4">
                                    <div className="edittable mt-4">
                                        <Form onSubmit={handleProjectESubmit}>
                                            <div className="table-responsive">
                                                <table className="table table-bordered tblX">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Employer</th>
                                                            <th scope="col">Customer</th>
                                                            <th scope="col">Industry</th>
                                                            <th scope="col">Project Name</th>
                                                            <th scope="col">Location</th>
                                                            <th scope="col">Technical Details</th>
                                                            <th scope="col">Responsibilities</th>
                                                            <th scope="col">Start Date</th>
                                                            <th scope="col">End Date</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {PExperience.map((formPEData, index) => (
                                                            <tr key={index}>
                                                                <td>{formPEData.Employer}</td>
                                                                <td>{formPEData.Customer}</td>
                                                                <td>{formPEData.Industry}</td>
                                                                <td>{formPEData.ProjectName}</td>
                                                                <td>{formPEData.Location}</td>
                                                                <td>{formPEData.TechinalDetails}</td>
                                                                <td>{formPEData.PResponsbility}</td>
                                                                <td>{formPEData.PStartDate}</td>
                                                                <td>{formPEData.PEndDate}</td>
                                                            </tr>
                                                        ))}

                                                        <tr>
                                                            <td><Form.Control type="text" name="Employer"
                                                                value={currentPExperience.Employer}
                                                                onChange={handleProjectChange} className="form-control" />
                                                            </td>
                                                            <td><Form.Control type="text" name="Customer"
                                                                value={currentPExperience.Customer}
                                                                onChange={handleProjectChange} className="form-control" />
                                                            </td>
                                                            <td><Form.Control type="text" name="Industry"
                                                                value={currentPExperience.Industry}
                                                                onChange={handleProjectChange} className="form-control" />
                                                            </td>
                                                            <td><Form.Control type="text" name="ProjectName"
                                                                value={currentPExperience.ProjectName}
                                                                onChange={handleProjectChange} className="form-control" />
                                                            </td>
                                                            <td><Form.Control type="text" name="Location"
                                                                value={currentPExperience.Location}
                                                                onChange={handleProjectChange} className="form-control" />
                                                            </td>
                                                            <td><Form.Control type="text" name="TechinalDetails"
                                                                value={currentPExperience.TechinalDetails}
                                                                onChange={handleProjectChange} className="form-control" />
                                                            </td>
                                                            <td><Form.Control type="text" name="PResponsbility"
                                                                value={currentPExperience.PResponsbility}
                                                                onChange={handleProjectChange} className="form-control" />
                                                            </td>
                                                            <td><Form.Control type="date" name="PStartDate"
                                                                value={currentPExperience.PStartDate}
                                                                onChange={handleProjectChange}
                                                                className="form-control" />
                                                            </td>
                                                            <td><Form.Control type="date" name="PEndDate"
                                                                value={currentPExperience.PEndDate}
                                                                onChange={handleProjectChange}
                                                                className="form-control" />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="d-flex flex-row-reverse">
                                                <button type="button" className="btn">SAVE</button>
                                                <button type="submit" className="btn mr-2">ADD</button>
                                            </div>
                                        </Form>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container >
        </>
    )
}

export default Experience
