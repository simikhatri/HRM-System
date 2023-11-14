import React from 'react'
import { Link } from 'react-router-dom';

const LAHeading = () => {
  return (
    <div>
       <div className="button-list">
                <button className="btn"> <Link to="/Attendance" className="active">Setup</Link></button>
                <button className="btn"> <Link to="/ATransaction">Transaction</Link> </button>
                <button className="btn"> <Link to="/Reports">Reports</Link> </button>
            </div>
    </div>
  )
}

export default LAHeading
