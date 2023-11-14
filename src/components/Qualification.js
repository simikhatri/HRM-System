import React, { useState } from 'react'
import { Container, Row, Col, Form, Accordion } from 'react-bootstrap';
import NavLinks from './NavLinks';

const Qualification = () => {
    //Set up state to capture form data of Add Education
    const [formDataList, setFormDataList] = useState([]);
    const [currentFormData, setCurrentFormData] = useState({
        Education: '',
        Major: '',
        Institute: '',
        Year: '',
        Grade: '',
    });
    //Set up state to capture form data of Add Trainings
    const [Trainingdata, setTrainingData] = useState([]);
    const [currentTrainingData, setCurrentTrainingData] = useState({
        Category: '',
        Type: '',
        Name: '',
        StartDate: '',
        EndDate: '',
        Details: '',
        Document: '',
    });
    //Set up state to capture form data of Add Certification
    const [Certificatedata, setCertificateData] = useState([]);
    const [currentCertificateData, setCurrentCertificateData] = useState({
        cType: '',
        Certification: '',
        CompletionDate: '',
        Valid: '',
        Remarks: '',
        cDocument: '',
    });
    // Event handler to update current form data of Add Education
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCurrentFormData({
            ...currentFormData,
            [name]: value,
        });
    };
    // Event handler to update current form data of Add Tainings
    const handleChange = (event) => {
        const { name, value } = event.target;
        setCurrentTrainingData({
            ...currentTrainingData,
            [name]: value,
        });
    };
    // Event handler to update current form data of Add Certification
    const handleCerticateChange = (event) => {
        const { name, value } = event.target;
        setCurrentCertificateData({
            ...currentCertificateData,
            [name]: value,
        });
    };
    // Event handler for submitting the form Add Education
    const handleSubmit = (event) => {
        event.preventDefault();
        setFormDataList([...formDataList, currentFormData]);
        setCurrentFormData({
            Education: '',
            Major: '',
            Institute: '',
            Year: '',
            Grade: '',
        });
    };
    // Event handler for submitting the form Add Training
    const handleTainingSubmit = (event) => {
        event.preventDefault();
        setTrainingData([...Trainingdata, currentTrainingData]);
        setCurrentTrainingData({
            Category: '',
            Type: '',
            Name: '',
            StartDate: '',
            EndDate: '',
            Details: '',
            Document: '',
        });
    };
    // Event handler for submitting the form Add Certification
    const handleCertificateSubmit = (event) => {
        event.preventDefault();
        setCertificateData([...Certificatedata, currentCertificateData]);
        setCurrentCertificateData({
            cType: '',
            Certification: '',
            CompletionDate: '',
            Valid: '',
            Remarks: '',
            cDocument: '',
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
                                <Accordion.Header >Add Education</Accordion.Header>
                                <Accordion.Body className="accordion-body mb-4">
                                    <div className="edittable mt-2">
                                        <Form onSubmit={handleSubmit}>
                                            <div className="table-responsive">
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Education</th>
                                                            <th scope="col">Major</th>
                                                            <th scope="col">Institute</th>
                                                            <th scope="col">Year</th>
                                                            <th scope="col">Grade/GPA</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {formDataList.map((formData, index) => (
                                                            <tr key={index}>
                                                                <td>{formData.Education}</td>
                                                                <td>{formData.Major}</td>
                                                                <td>{formData.Institute}</td>
                                                                <td>{formData.Year}</td>
                                                                <td>{formData.Grade}</td>
                                                            </tr>
                                                        ))}
                                                        <tr>
                                                            <td>
                                                                <Form.Select className="form-select form-control" name="Education"
                                                                    value={currentFormData.Education}
                                                                    onChange={handleInputChange}
                                                                    aria-label="Default select example" required>
                                                                    <option selected> </option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </Form.Select>
                                                            </td>
                                                            <td><Form.Control type="text" name="Major"
                                                                value={currentFormData.Major}
                                                                onChange={handleInputChange} className="form-control"
                                                                required />
                                                            </td>
                                                            <td><Form.Control type="text" name="Institute"
                                                                value={currentFormData.Institute}
                                                                onChange={handleInputChange} className="form-control" required /></td>
                                                            <td><Form.Control type="text" name="Year"
                                                                value={currentFormData.Year}
                                                                onChange={handleInputChange} className="form-control"
                                                                required />
                                                            </td>
                                                            <td><Form.Control type="text" name="Grade"
                                                                value={currentFormData.Grade}
                                                                onChange={handleInputChange} className="form-control"
                                                                required />
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
                                <Accordion.Header >Add Trainings</Accordion.Header>
                                <Accordion.Body className="accordion-body mb-4">
                                    <div className="edittable mt-4">
                                        <Form onSubmit={handleTainingSubmit}>
                                            <div className="table-responsive">
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Category</th>
                                                            <th scope="col">Type</th>
                                                            <th scope="col">Name </th>
                                                            <th scope="col">Start Date</th>
                                                            <th scope="col">End Date</th>
                                                            <th scope="col">Details</th>
                                                            <th scope="col">Document </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {Trainingdata.map((TrainsData, index) => (
                                                            <tr key={index}>
                                                                <td>{TrainsData.Category}</td>
                                                                <td>{TrainsData.Type}</td>
                                                                <td>{TrainsData.Name}</td>
                                                                <td>{TrainsData.StartDate}</td>
                                                                <td>{TrainsData.EndDate}</td>
                                                                <td>{TrainsData.Details}</td>
                                                                <td>{TrainsData.Document}</td>
                                                            </tr>
                                                        ))}
                                                        <tr>
                                                            <td>
                                                                <Form.Select className="form-select" name="Category"
                                                                    value={currentTrainingData.Category}
                                                                    onChange={handleChange} aria-label="Default select example">
                                                                    <option selected> </option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </Form.Select>
                                                            </td>
                                                            <td>
                                                                <Form.Select className="form-select" name="Type"
                                                                    value={currentTrainingData.Type}
                                                                    onChange={handleChange} aria-label="Default select example">
                                                                    <option selected> </option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </Form.Select>
                                                            </td>
                                                            <td><Form.Control type="text" name="Name" value={currentTrainingData.Name}
                                                                onChange={handleChange} className="form-control" />
                                                            </td>
                                                            <td><Form.Control type="date" name="StartDate"
                                                                value={currentTrainingData.StartDate}
                                                                onChange={handleChange} className="form-control" />
                                                            </td>
                                                            <td><Form.Control type="date" name="EndDate"
                                                                value={currentTrainingData.EndDate}
                                                                onChange={handleChange} className="form-control" />
                                                            </td>
                                                            <td><Form.Control type="text" name="Details"
                                                                value={currentTrainingData.Details}
                                                                onChange={handleChange} className="form-control" />
                                                            </td>
                                                            <td><Form.Control type="file" id="file" name="Document"
                                                                value={currentTrainingData.Document}
                                                                onChange={handleChange} className="form-control" />
                                                                <label htmlFor="file" id="label">Attach file</label>
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
                            <Accordion.Item eventKey="2">
                                <Accordion.Header >Add Certification</Accordion.Header>
                                <Accordion.Body className="accordion-body">
                                    <div className="edittable mt-4">
                                        <Form onSubmit={handleCertificateSubmit}>
                                            <div className="table-responsive">
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Type</th>
                                                            <th scope="col">Certification </th>
                                                            <th scope="col">Completion Date</th>
                                                            <th scope="col">Valid</th>
                                                            <th scope="col">Remarks</th>
                                                            <th scope="col">Document </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {Certificatedata.map((formCertificate, index) => (
                                                            <tr key={index}>
                                                                <td>{formCertificate.cType}</td>
                                                                <td>{formCertificate.Certification}</td>
                                                                <td>{formCertificate.CompletionDate}</td>
                                                                <td>{formCertificate.Valid}</td>
                                                                <td>{formCertificate.Remarks}</td>
                                                                <td>{formCertificate.cDocument}</td>
                                                            </tr>
                                                        ))}
                                                        <tr>
                                                            <td>
                                                                <Form.Select className="form-select" name="cType"
                                                                    value={currentCertificateData.cType}
                                                                    onChange={handleCerticateChange}
                                                                    aria-label="Default select example">
                                                                    <option selected> </option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </Form.Select>
                                                            </td>
                                                            <td>
                                                                <Form.Select className="form-select" name="Certification"
                                                                    value={currentCertificateData.Certification}
                                                                    onChange={handleCerticateChange}
                                                                    aria-label="Default select example">
                                                                    <option selected> </option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </Form.Select>
                                                            </td>
                                                            <td><Form.Control type="date" name="CompletionDate"
                                                                value={currentCertificateData.CompletionDate}
                                                                onChange={handleCerticateChange}
                                                                className="form-control" /></td>
                                                            <td>
                                                                <select className="form-select" name="Valid"
                                                                    value={currentCertificateData.Valid}
                                                                    onChange={handleCerticateChange}
                                                                    aria-label="Default select example">
                                                                    <option selected> </option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </select>
                                                            </td>
                                                            <td><Form.Control type="text" name="Remarks"
                                                                value={currentCertificateData.Remarks}
                                                                onChange={handleCerticateChange}
                                                                className="form-control" /></td>
                                                            <td><Form.Control type="file" name="cDocument"
                                                                value={currentCertificateData.cDocument}
                                                                onChange={handleCerticateChange}
                                                                id="file" className="form-control" />
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
                        </Accordion>
                    </Col>
                </Row>
            </Container >
        </>
    )
}

export default Qualification
