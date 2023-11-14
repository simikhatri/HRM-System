import React from 'react';
import LReports from '../../ApplicationSetup/Loan/LReports/LReports';
import LBReport from '../../ApplicationSetup/Loan/LReports/LBReport';
import ELBBBU from '../../ApplicationSetup/Loan/LReports/ELBBBU';
import ELDR from '../../ApplicationSetup/Loan/LReports/ELDR';

const LRRoutes = [
    { path: '/LReports/*', element: <LReports/> },
    { path: '/LReports/LoanBalanceReport', element: <LBReport/> },
    { path: '/LReports/EmployeeLoanBalanceByBusinessUnit', element: <ELBBBU/> },
    { path: '/LReports/EmployeeLoanDetailReport', element: <ELDR/> },
]

export default LRRoutes
