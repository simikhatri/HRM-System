import React from 'react'
import HRIS from "../../images/hrm-removebg-preview.png"
import { Card} from 'react-bootstrap';

const HRISCard = () => {
    return (
        <>
            <Card className="card mt-4 HRIS text-center">
                <Card.Img src={HRIS} className="card-img-top card-img"
                    alt="..." />
                <Card.Body>
                    <Card.Title className="card-title">Human Resource Information System</Card.Title>
                </Card.Body>
            </Card>
        </>
    )
}

export default HRISCard
