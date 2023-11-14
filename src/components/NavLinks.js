import React from 'react'
import { Link} from 'react-router-dom';
import { Container } from 'react-bootstrap';

const NavLinks = () => {
    return (
        <>
            <Container>
                <div className="line">
                    My Profile
                </div>
                    {/* Navbar */}
                    <div className="profile">
                        <div className="button-list">
                            <button className="btn"> <Link to="/">Personal</Link> </button>
                            <button className="btn"> <Link to="/Qualification">Qualifications</Link> </button>
                            <button className="btn"> <Link to="/Experience">Experiences</Link> </button>
                            <button className="btn"> <Link to="/FamilyDetails">Family detail</Link> </button>
                            <button className="btn"> <Link to="/References">References</Link> </button>
                        </div>
                    </div>
            </Container>
        </>
    )
}

export default NavLinks
