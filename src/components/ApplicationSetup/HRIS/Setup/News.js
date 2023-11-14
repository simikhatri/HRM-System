import React, { useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap';
import HRIS from '../../../images/hrm-removebg-preview.png'
import { Link, useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const News = () => {
    const navigate = useNavigate();
    const [editorContent, setEditorContent] = useState('');

    const handleEditorChange = content => {
        setEditorContent(content);
    };

    const handleClick = () => {
        // Redirect to the home page
        navigate('/HRIS');
    };

    return (
        <>
            <Container>
                <div className="line HRISLine">
                    Human Resource Information System
                </div>
                <div className="MainContent">
                    <Form className="form SetupForm mt-4 ms-2">
                        <Row className="textfield">
                            <div className="Heading pb-2 ps-1">
                                <Row>
                                    <Col lg={10} md={10} sm={10} xs={10}>
                                        <h5>News - Add New</h5>
                                    </Col>
                                    <Col lg={2} md={2} sm={2} xs={2}>
                                        <div className="hrmImage">
                                            <Link to="/HRIS">
                                                <img src={HRIS} className="card-img-top card-img" alt="..." />
                                            </Link>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <Col lg={6} md={6} sm={6} xs={12}>
                                <div className="mb-3 pt-2 me-2">
                                    <Form.Label className="form-label">News Date<span className="important">*</span> </Form.Label>
                                    <Form.Control type="date" className="form-control" required />
                                </div>
                                <div className="mb-4 me-2 pt-2">
                                    <Form.Label className="form-label">Visible for Company<span className="important">*</span> </Form.Label>
                                    <Form.Select className="form-select VisibleCompany" multiple required>
                                        <option value="o1">O1-A Hamson (Pvt) Limited</option>
                                        <option value="o2">O2-A Hamson Middle East</option>
                                        <option value="o3"></option>
                                        <option value="o4"></option>
                                    </Form.Select>
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={6} xs={12}>
                                <div className="mb-3 pt-2 me-2">
                                    <Form.Label className="form-label">News Subject<span className="important">*</span> </Form.Label>
                                    <Form.Control type="text" className="form-control" required />
                                </div>
                            </Col>
                            <div className="mb-3 pt-2 me-2">
                                <Form.Label className="form-label">News Details<span className="important">*</span> </Form.Label>
                               <div className="quill-editor">
                                <ReactQuill
                                    value={editorContent}
                                    onChange={handleEditorChange}
                                    modules={{
                                        toolbar: [
                                            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                                            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                            ['bold', 'italic', 'underline'],
                                            ['link'],
                                            ['image'],
                                            ['clean']
                                        ],
                                    }}
                                />
                                </div>
                            </div>
                            <div className="d-flex flex-row-reverse">
                                <button type="button" onClick={handleClick} className="btn">Cancel</button>
                                <button type="button" className="btn mr-2">SAVE</button>
                            </div>
                        </Row>
                    </Form>
                </div>
            </Container>
        </>
    )
}

export default News
