import React from 'react'
import LTranstion from '../../ApplicationSetup/Loan/LTransaction/LTranstion';
import Loan from '../../ApplicationSetup/Loan/LTransaction/Loan';
import LInstallment from '../../ApplicationSetup/Loan/LTransaction/LInstallment';
import LAdjustment from '../../ApplicationSetup/Loan/LTransaction/LAdjustment';
import LRepayment from '../../ApplicationSetup/Loan/LTransaction/LRepayment';
import LApproval from '../../ApplicationSetup/Loan/LTransaction/LApproval';
import LIGA from '../../ApplicationSetup/Loan/LTransaction/LIGA';
import LAA from '../../ApplicationSetup/Loan/LTransaction/LAA';
import LRA from '../../ApplicationSetup/Loan/LTransaction/LRA';

const LTRoutes = [
    { path: '/LTranstion/*', element: <LTranstion /> },
    { path: '/LTranstion/Loan', element: <Loan /> },
    { path: '/LTranstion/LoanInstallmentGeneration', element: <LInstallment /> },
    { path: '/LTranstion/LoanAdjustmentsentforApproval', element: <LAdjustment /> },
    { path: '/LTranstion/LoanRepayment', element: <LRepayment/> },
    { path: '/LTranstion/LoanApproval', element: <LApproval/> },
    { path: '/LTranstion/LoanInstallmentGenerationApproval', element: <LIGA/> },
    { path: '/LTranstion/LoanAjustmentApproval', element: <LAA/> },
    { path: '/LTranstion/LoanRepaymentApproval', element: <LRA/> },
]

export default LTRoutes
