import React from 'react'
import Loan from '../../ApplicationSetup/Loan/Loan'
import LoanType from '../../ApplicationSetup/Loan/Setup/LoanType'
import LoanPolicy from '../../ApplicationSetup/Loan/Setup/LoanPolicy'

const LoanRoutes = [
    { path: '/Loan/*', element: <Loan /> },
    { path: '/Loan/LoanType', element: <LoanType /> },
    { path: '/Loan/LoanPolicy', element: <LoanPolicy /> },
]

export default LoanRoutes
