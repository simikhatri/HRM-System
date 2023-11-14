import React from 'react'
import PTransaction from '../../ApplicationSetup/Payroll/PTransaction/PTransaction';
import Increment from '../../ApplicationSetup/Payroll/PTransaction/Increment';
import PSalary from '../../ApplicationSetup/Payroll/PTransaction/PSalary';
import PChecker from '../../ApplicationSetup/Payroll/PTransaction/PChecker';
import OverTime from '../../ApplicationSetup/Payroll/PTransaction/OverTime';
import BDAL from '../../ApplicationSetup/Payroll/PTransaction/BDAL';
import FFA from '../../ApplicationSetup/Payroll/PTransaction/FFA';
import SalaryD from '../../ApplicationSetup/Payroll/PTransaction/SalaryD';
import WFD from '../../ApplicationSetup/Payroll/PTransaction/WFD';
import OTPayment from '../../ApplicationSetup/Payroll/PTransaction/OTPayment';
import IApproval from '../../ApplicationSetup/Payroll/PTransaction/IApproval';
import PView from '../../ApplicationSetup/Payroll/PTransaction/PView';
import PayrollApp from '../../ApplicationSetup/Payroll/PTransaction/PayrollApp';
import BDList from '../../ApplicationSetup/Payroll/PTransaction/BDList';
import FFS from '../../ApplicationSetup/Payroll/PTransaction/FFS';
import FAFApproval from '../../ApplicationSetup/Payroll/PTransaction/FAFApproval';
import SDD from '../../ApplicationSetup/Payroll/PTransaction/SDD';
import PFWithdrawal from '../../ApplicationSetup/Payroll/PTransaction/PFWithdrawal';

const PTRoutes = [
    { path: '/PTransaction/*', element: <PTransaction /> },
    { path: '/PTransaction/Increment', element: <Increment /> },
    { path: '/PTransaction/PSalary', element: <PSalary /> },
    { path: '/PTransaction/PChecker', element: <PChecker /> },
    { path: '/PTransaction/OverTime', element: <OverTime/> },
    { path: '/PTransaction/BDAL', element: <BDAL/> },
    { path: '/PTransaction/FFA', element: <FFA/> },
    { path: '/PTransaction/SalaryD', element: <SalaryD/> },
    { path: '/PTransaction/WFD', element: <WFD/> },
    { path: '/PTransaction/OTPayment', element: <OTPayment/> },
    { path: '/PTransaction/IApproval', element: <IApproval/> },
    { path: '/PTransaction/PView', element: <PView/> },
    { path: '/PTransaction/PayrollApp', element: <PayrollApp/> },
    { path: '/PTransaction/BDList', element: <BDList/> },
    { path: '/PTransaction/FFS', element: <FFS/> },
    { path: '/PTransaction/FAFApproval', element: <FAFApproval/> },
    { path: '/PTransaction/SDD', element: <SDD/> },
    { path: '/PTransaction/PFWithdrawal', element: <PFWithdrawal/> },
]

export default PTRoutes
