import React from 'react'
import payroll from "../../../components/images/proll-removebg-preview (1).png"
import { Card} from 'react-bootstrap';

const PCard = () => {
  return (
    <>
      <Card className="card mt-4 HRIS text-center">
        <Card.Img src={payroll} className="card-img-top card-img"
          alt="Payroll" />
        <Card.Body>
          <Card.Title className="card-title">Leave & Attendance</Card.Title>
        </Card.Body>
      </Card>
    </>
  )
}

export default PCard
