import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from './images/logo.png'
import logo2 from './images/logo2.png'

// Images List Variable For Background
const images = [
    "url('https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg')",
    "url('https://img.freepik.com/premium-photo/color-gradient-background-blur-glow-yellow-blue_279525-29150.jpg')",
    "url('https://wallpaperaccess.com/full/1155007.jpg')",
    "url('https://img.freepik.com/free-vector/vibrant-summer-ombre-background-vector_53876-105765.jpg')",
    "url('https://img.freepik.com/premium-photo/studio-background-dark-gradient-blue_1258-49135.jpg')",
    "url('https://images.unsplash.com/photo-1611325058416-db7794e8e32c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMGdyYWRpZW50fGVufDB8fDB8fHww&w=1000&q=80')",
    "url('https://media.istockphoto.com/id/675719502/photo/abstract-luxury-brown-background-border-frame-with-copy-space-blank-web-or-template-brochure.jpg?s=612x612&w=0&k=20&c=nP7A1JiiFLX65eLjdkfHZdJpc0wFoC2zE2ht7IBfVW4=')"
];

const Header = (props) => {
    const [currentDate, setCurrentDate] = useState('');
    const [index, setIndex] = useState(0);
    const [ASVisibility, setASVisibility] = useState(true);

    // Logic for changing background on click icon
    const changeBackground = () => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
        document.body.style.backgroundImage = images[index];

    };
    // Logic for get current Date in format
    useEffect(() => {
        const date = new Date();
        const day = date.toLocaleDateString('en-US', { weekday: 'long' });
        const month = date.toLocaleString('en-US', { month: 'short' });
        const d = date.getDate();
        const year = date.getFullYear();
        const formattedDate = `${day}, ${month} ${d}, ${year}`;
        setCurrentDate(formattedDate);
    }, []);

    return (
        <>
            {/* image Icon For change Background */}
            <div className="bgimage" id="mybg">
                <i className="fa-solid fa-image" onClick={changeBackground}></i>
            </div>
            {/* Header  */}
            <Container>
                <Row>
                    <Col className="col-6">
                        <div className="Clogo">
                            <img src={logo} alt="" className="img-fluid logo mb-4" />
                            {ASVisibility && <h6> <Link className="head mb-4" to="./ApplicationSetup"
                            onClick={() => setASVisibility(false)}>Application Setup</Link></h6>}
                        </div>
                    </Col>
                    <Col className="col-6 row2">
                        <p id="fulldate">{currentDate}</p>
                        <p>Adbul Bari</p>
                        <Link to="/" className="link"> <img src={logo2} alt="" className="logo2" /> Home
                        </Link>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Header
