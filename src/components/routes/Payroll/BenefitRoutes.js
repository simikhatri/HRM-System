import React from 'react'
import Benefits from '../../ApplicationSetup/Payroll/Benefits/Benefits';
import Unit from '../../ApplicationSetup/Payroll/Benefits/Unit';
import UnitRate from '../../ApplicationSetup/Payroll/Benefits/UnitRate';
import BPolicy from '../../ApplicationSetup/Payroll/Benefits/BPolicy';
import EBApproval from '../../ApplicationSetup/Payroll/Benefits/EBApproval';
import EBenefit from '../../ApplicationSetup/Payroll/Benefits/EBenefit';
import EBActual from '../../ApplicationSetup/Payroll/Benefits/EBActual';

const BenefitRoutes = [
    { path: '/Benefits/*', element: <Benefits /> },
    { path: '/Benefits/Unit', element: <Unit /> },
    { path: '/Benefits/UnitRate', element: <UnitRate /> },
    { path: '/Benefits/BPolicy', element: <BPolicy /> },
    { path: '/Benefits/EBApproval', element: <EBApproval /> },
    { path: '/Benefits/EBenefit', element: <EBenefit /> },
    { path: '/Benefits/EBActual', element: <EBActual /> },
]

export default BenefitRoutes
