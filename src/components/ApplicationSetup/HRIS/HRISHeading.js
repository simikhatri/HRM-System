import React from 'react'
import { Link } from 'react-router-dom';

const HRISHeading = () => {
    return (
        <>
            <div className="button-list">
                <button className="btn"> <Link to="/HRIS" className="active">Setup</Link> </button>
                <button className="btn"> <Link to="/Transaction">Transaction</Link> </button>
                <button className="btn"> <Link to="/Skills">Skills Set</Link> </button>
                <button className="btn"> <Link to="/Timesheet">Time Sheet</Link> </button>
                <button className="btn"> <Link to="/ThirdP">Third Party</Link> </button>
            </div>
        </>
    )
}

export default HRISHeading
