import React from 'react'
import Payroll from '../../ApplicationSetup/Payroll/Payroll'
import TaxPlan from '../../ApplicationSetup/Payroll/Setup/TaxPlan'
import OTPUB from '../../ApplicationSetup/Payroll/Setup/OTPUB'
import PayrollPolicy from '../../ApplicationSetup/Payroll/Setup/PayrollPolicy'

const PayrollRoutes = [
    { path: '/Payroll/*', element: <Payroll /> },
    { path: '/Payroll/TaxPlan', element: <TaxPlan /> },
    { path: '/Payroll/OTPUB', element: <OTPUB /> },
    { path: '/Payroll/PayrollPolicy', element: <PayrollPolicy /> },
]

export default PayrollRoutes
