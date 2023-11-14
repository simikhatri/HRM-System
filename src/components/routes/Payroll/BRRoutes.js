import React from 'react'
import Reports from '../../ApplicationSetup/Payroll/BReports/Reports';
import PIR from '../../ApplicationSetup/Payroll/BReports/PIR';
import EPSR from '../../ApplicationSetup/Payroll/BReports/EPSR';
import EClearance from '../../ApplicationSetup/Payroll/BReports/EClearance';
import PRCR from '../../ApplicationSetup/Payroll/BReports/PRCR';
import ESPT from '../../ApplicationSetup/Payroll/BReports/ESPT';
import CDReport from '../../ApplicationSetup/Payroll/BReports/CDReport';
import ESCReport from '../../ApplicationSetup/Payroll/BReports/ESCReport';
import EILetter from '../../ApplicationSetup/Payroll/BReports/EILetter';
import STransfer from '../../ApplicationSetup/Payroll/BReports/STransfer';
import ERSheet from '../../ApplicationSetup/Payroll/BReports/ERSheet';
import FaFS from '../../ApplicationSetup/Payroll/BReports/FaFS';
import Comparative from '../../ApplicationSetup/Payroll/BReports/Comparative';
import BUSalary from '../../ApplicationSetup/Payroll/BReports/BUSalary';
import EProvident from '../../ApplicationSetup/Payroll/BReports/EProvident';
import IncByBU from '../../ApplicationSetup/Payroll/BReports/IncByBU';
import TaxReport from '../../ApplicationSetup/Payroll/BReports/TaxReport';

const BRRoutes = [
    { path: '/Report/*', element: <Reports /> },
    { path: '/Report/Payroll Information Report', element: <PIR /> },
    { path: '/Report/Employee Pay-Slip Report', element: <EPSR /> },
    { path: '/Report/Employee Clearance', element: <EClearance/> },
    { path: '/Report/PayrollReconciliation-CurrentReport', element: <PRCR/> },
    { path: '/Report/Employee Salary Paid Through', element: <ESPT/> },
    { path: '/Report/ContributionDetailReport', element: <CDReport/> },
    { path: '/Report/EmployeeSalaryCertificateReport', element: <ESCReport/> },
    { path: '/Report/EmployeeIncrementLetterReport', element: <EILetter/> },
    { path: '/Report/SalaryTransferReport', element: <STransfer/> },
    { path: '/Report/MonthlyPayrollSheet', element: <ERSheet/> },
    { path: '/Report/Full&FinalSattlement', element: <FaFS/> },
    { path: '/Report/PayrollReconciliation-ComparativeReport', element: <Comparative/> },
    { path: '/Report/LocationWiseAverageSalary', element: <BUSalary/> },
    { path: '/Report/EmployeeProvidentFundDetail', element: <EProvident/> },
    { path: '/Report/EmployeeIncrementDetailByBU', element: <IncByBU/> },
    { path: '/Report/MonthlyTaxReport', element: <TaxReport/> },
]

export default BRRoutes
