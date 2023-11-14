
import Personal from './components/Personal';
import Qualification from './components/Qualification';
import Experience from './components/Experience';
import FamilyDetails from './components/FamilyDetails';
import References from './components/References';
import ApplicationSetup from './components/ApplicationSetup/ApplicationSetup';
import HrisRoutes from './components/routes/HrisRoutes';
import TransactionRoutes from './components/routes/TransactionRoutes';
import SkillsRoutes from './components/routes/SkillsRoutes';
import TimesheetRoutes from './components/routes/TimesheetRoutes';
import ThirdPRoutes from './components/routes/ThirdPRoutes';
import LAARoutes from './components/routes/L&A/LAARoutes';
import ATransactionRoutes from './components/routes/L&A/ATransactionRoutes';
import ReportRoutes from './components/routes/L&A/ReportRoutes';
import PayrollRoutes from './components/routes/Payroll/PayrollRoutes'
import PTRoutes from './components/routes/Payroll/PTRoutes';
import OtherRoutes from './components/routes/Payroll/OtherRoutes';
import BenefitRoutes from './components/routes/Payroll/BenefitRoutes';
import BRRoutes from './components/routes/Payroll/BRRoutes';
import LoanRoutes from './components/routes/Loan/LoanRoutes';
import LTRoutes from './components/routes/Loan/LTRoutes';
import LRRoutes from './components/routes/Loan/LRRoutes';

const routes = [
    { path: '/', element: <Personal /> },
    { path: '/Qualification', element: <Qualification /> },
    { path: '/Experience', element: <Experience /> },
    { path: '/FamilyDetails', element: <FamilyDetails /> },
    { path: '/References', element: <References /> },
    { path: '/ApplicationSetup', element: <ApplicationSetup /> },
    // HRIS FORMS
    ...HrisRoutes,
    ...TransactionRoutes,
    ...SkillsRoutes,
    ...TimesheetRoutes,
    ...ThirdPRoutes,
    // Leave & Attendance Routes
    ...LAARoutes,
    ...ATransactionRoutes,
    ...ReportRoutes,
    // Payroll Routes
    ...PayrollRoutes,
    ...PTRoutes,
    ...OtherRoutes,
    ...BenefitRoutes,
    ...BRRoutes,
    // Employee Loan Management Routes
    ...LoanRoutes,
    ...LTRoutes,
    ...LRRoutes,
];

export default routes;


