import React from 'react'
import LoanM from "../../images/Creat-removebg-preview.png"
import { Card} from 'react-bootstrap';

const LCard = () => {
  return (
    <>
      <Card className="card mt-4 HRIS text-center">
        <Card.Img src={LoanM} className="card-img-top card-img"
          alt="Payroll" />
        <Card.Body>
          <Card.Title className="card-title">Employee Loan Management</Card.Title>
        </Card.Body>
      </Card>
    </>
  )
}

export default LCard
