import React from 'react'
import Others from '../../ApplicationSetup/Payroll/POthers/Others';
import ExpenseH from '../../ApplicationSetup/Payroll/POthers/ExpenseH';
import EType from '../../ApplicationSetup/Payroll/POthers/EType';
import ECPolicy from '../../ApplicationSetup/Payroll/POthers/ECPolicy';

const OtherRoutes = [
    { path: '/Others/*', element: <Others /> },
    { path: '/Others/ExpenseH', element: <ExpenseH /> },
    { path: '/Others/EType', element: <EType /> },
    { path: '/Others/ECPolicy', element: <ECPolicy /> },
]

export default OtherRoutes
