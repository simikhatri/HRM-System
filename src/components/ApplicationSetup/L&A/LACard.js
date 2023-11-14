import React from 'react'
import Attendance from "../../images/attendance-removebg.png"
import { Card } from 'react-bootstrap';

const LACard = () => {
  return (
    <>
      <Card className="card mt-4 HRIS text-center">
        <Card.Img src={Attendance} className="card-img-top card-img"
          alt="..." />
        <Card.Body>
          <Card.Title className="card-title">Leave & Attendance</Card.Title>
        </Card.Body>
      </Card>
    </>
  )
}

export default LACard
