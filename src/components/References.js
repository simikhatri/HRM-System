import React, { useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap';
import NavLinks from './NavLinks';

const References = () => {
    //Set up state to capture form data of Add Family Details
    const [Referencedata, setReferencesdata] = useState([]);
    const [currentReferencedata, setCurrentReferencedata] = useState({
        RName: '',
        Address: '',
        Email: '',
        Occupation: '',
        Relation: '',
        PhoneNo: '',
    });
    // Event handler to update current form data of Add Family Details
    const handleRChange = (event) => {
        const { name, value } = event.target;
        setCurrentReferencedata({
            ...currentReferencedata,
            [name]: value,
        });
    };
    // Event handler for submitting the form Add Family Details
    const handleRSubmit = (event) => {
        event.preventDefault();
        setReferencesdata([...Referencedata, currentReferencedata]);
        setCurrentReferencedata({
            RName: '',
            Address: '',
            Email: '',
            Occupation: '',
            Relation: '',
            PhoneNo: '',
        });
    };
    return (
        <>
          <NavLinks />
            <Container fluid className='MainCont'>
                <Row className="personalInfo">
                    <Col className="Family-info">
                        <div className="Heading pt-4 pb-1 ps-1">
                            <h5>Employee References</h5>
                        </div>
                        <div className="edittable mt-2">
                            <Form onSubmit={handleRSubmit}>
                                <div className="table-responsive">
                                    <table className="table table-bordered ref-table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Reference Name</th>
                                                <th scope="col">Address</th>
                                                <th scope="col"> Email </th>
                                                <th scope="col">Occupation</th>
                                                <th scope="col">Relation</th>
                                                <th scope="col">Phone No.</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Referencedata.map((ReferenceForm, index) => (
                                                <tr key={index}>
                                                    <td>{ReferenceForm.RName}</td>
                                                    <td>{ReferenceForm.Address}</td>
                                                    <td>{ReferenceForm.Email}</td>
                                                    <td>{ReferenceForm.Occupation}</td>
                                                    <td>{ReferenceForm.Relation}</td>
                                                    <td>{ReferenceForm.PhoneNo}</td>
                                                </tr>
                                            ))}
                                            <tr>
                                                <td><Form.Control type="text" name="RName"
                                                    value={currentReferencedata.RName}
                                                    onChange={handleRChange}
                                                    className="form-control" required autocomplete="off" />
                                                </td>
                                                <td><Form.Control type="text" name="Address"
                                                    value={currentReferencedata.Address}
                                                    onChange={handleRChange} className="form-control" required autocomplete="off" /></td>
                                                <td><Form.Control type="email" name="Email"
                                                    value={currentReferencedata.Email}
                                                    onChange={handleRChange}
                                                    className="form-control" required autocomplete="off" />
                                                </td>
                                                <td><Form.Control type="text" name="Occupation"
                                                    value={currentReferencedata.Occupation}
                                                    onChange={handleRChange} className="form-control" required autocomplete="off" />
                                                </td>
                                                <td><Form.Control type="text" name="Relation"
                                                    value={currentReferencedata.Relation}
                                                    onChange={handleRChange} className="form-control" required autocomplete="off" />
                                                </td>
                                                <td><Form.Control type="tel" name="PhoneNo"
                                                    value={currentReferencedata.PhoneNo}
                                                    onChange={handleRChange} className="form-control" required
                                                    autocomplete="off" /></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="d-flex flex-row-reverse pb-4">
                                    <button type="button" className="btn">SAVE</button>
                                    <button type="submit" className="btn mr-2">ADD</button>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container >
        </>
    )
}

export default References
