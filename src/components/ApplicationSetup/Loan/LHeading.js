import React from 'react'
import { Link } from 'react-router-dom';

const LHeading = () => {
  return (
    <>
    <div className="button-list">
        <button className="btn"> <Link to="/Loan" className="active">Setup</Link></button>
        <button className="btn"> <Link to="/LTranstion">Transaction</Link> </button>
        <button className="btn"> <Link to="/LReports">Reports</Link> </button>

    </div>
</>
  )
}

export default LHeading
