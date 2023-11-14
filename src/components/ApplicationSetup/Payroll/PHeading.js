import React from 'react'
import { Link } from 'react-router-dom';

const PHeading = () => {
    return (
        <>
            <div className="button-list">
                <button className="btn"> <Link to="/Payroll" className="active">Setup</Link></button>
                <button className="btn"> <Link to="/PTransaction">Transaction</Link> </button>
                <button className="btn"> <Link to="/Others">Others</Link> </button>
                <button className="btn"> <Link to="/Benefits">Benefits</Link> </button>
                <button className="btn"> <Link to="/Report">Reports</Link> </button>
            </div>
        </>
    )
}

export default PHeading
