import React, { useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap';
import NavLinks from './NavLinks';

const FamilyDetails = () => {
    //Set up state to capture form data of Add Family Details
    const [familydata, setfamilydata] = useState([]);
    const [currentfamilydata, setCurrentFamilydata] = useState({
        FMemberName: '',
        Relation: '',
        CNIC: '',
        DateOfBirth: '',
        PhoneNo: '',
    });
    // Event handler to update current form data of Add Family Details
    const handleFChange = (event) => {
        const { name, value } = event.target;
        setCurrentFamilydata({
            ...currentfamilydata,
            [name]: value,
        });
    };
    // Event handler for submitting the form Add Family Details
    const handleFSubmit = (event) => {
        event.preventDefault();
        setfamilydata([...familydata, currentfamilydata]);
        setCurrentFamilydata({
            FMemberName: '',
            Relation: '',
            CNIC: '',
            DateOfBirth: '',
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
                            <h5>Add Family Details</h5>
                        </div>
                        <div className="edittable mt-2">
                            <Form onSubmit={handleFSubmit}>
                                <div className="table-responsive">
                                    <table className="table table-bordered ref-table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Family Member Name</th>
                                                <th scope="col"> Relation </th>
                                                <th scope="col">CNIC</th>
                                                <th scope="col"> Date of Birth </th>
                                                <th scope="col">Phone/Contact No.</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {familydata.map((FamilyForm, index) => (
                                                <tr key={index}>
                                                    <td>{FamilyForm.FMemberName}</td>
                                                    <td>{FamilyForm.Relation}</td>
                                                    <td>{FamilyForm.CNIC}</td>
                                                    <td>{FamilyForm.DateOfBirth}</td>
                                                    <td>{FamilyForm.PhoneNo}</td>
                                                </tr>
                                            ))}
                                            <tr>
                                                <td><Form.Control type="text" name="FMemberName"
                                                    value={currentfamilydata.FMemberName}
                                                    onChange={handleFChange}
                                                    className="form-control" required autocomplete="off" />
                                                </td>
                                                <td><Form.Control type="text" name="Relation"
                                                    value={currentfamilydata.Relation}
                                                    onChange={handleFChange} className="form-control" required autocomplete="off" /></td>
                                                <td><Form.Control type="text" name="CNIC"
                                                    value={currentfamilydata.CNIC}
                                                    onChange={handleFChange}
                                                    className="form-control" required autocomplete="off" />
                                                </td>
                                                <td><Form.Control type="text" name="DateOfBirth"
                                                    value={currentfamilydata.DateOfBirth}
                                                    onChange={handleFChange} className="form-control" required autocomplete="off" />
                                                </td>
                                                <td><Form.Control type="tel" name="PhoneNo"
                                                    value={currentfamilydata.PhoneNo}
                                                    onChange={handleFChange} className="form-control" required
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

export default FamilyDetails
