import React from 'react'
import HRIS from '../ApplicationSetup/HRIS/HRIS';
import FisalYears from '../ApplicationSetup/HRIS/Setup/FisalYears';
import Designation from '../ApplicationSetup/HRIS/Setup/Designation';
import Grade from '../ApplicationSetup/HRIS/Setup/Grade';
import Certificatetype from '../ApplicationSetup/HRIS/Setup/Certificatetype';
import Certification from '../ApplicationSetup/HRIS/Setup/Certification';
import Religion from '../ApplicationSetup/HRIS/Setup/Religion';
import Bank from '../ApplicationSetup/HRIS/Setup/Bank';
import Branch from '../ApplicationSetup/HRIS/Setup/Branch';
import Allowance from '../ApplicationSetup/HRIS/Setup/Allowance';
import Language from '../ApplicationSetup/HRIS/Setup/Language';
import CheckList from '../ApplicationSetup/HRIS/Setup/CheckList';
import DCType from '../ApplicationSetup/HRIS/Setup/DCType';
import LeavingReason from '../ApplicationSetup/HRIS/Setup/LeavingReason';
import Compensation from '../ApplicationSetup/HRIS/Setup/Compensation';
import Possession from '../ApplicationSetup/HRIS/Setup/Possession';
import HRDoc from '../ApplicationSetup/HRIS/Setup/HRDoc';
import ITraining from '../ApplicationSetup/HRIS/Setup/ITraining';
import News from '../ApplicationSetup/HRIS/Setup/News';
import PItem from '../ApplicationSetup/HRIS/Setup/PItem';

const HrisRoutes = [
    { path: '/HRIS/*', element: <HRIS /> },
    { path: '/HRIS/FisalYears', element: <FisalYears /> },
    { path: '/HRIS/Designation', element: <Designation /> },
    { path: '/HRIS/Grade', element: <Grade /> },
    { path: '/HRIS/Certificatetype', element: <Certificatetype /> },
    { path: '/HRIS/Certification', element: <Certification /> },
    { path: '/HRIS/Religion', element: <Religion /> },
    { path: '/HRIS/Language', element: <Language /> },
    { path: '/HRIS/Bank', element: <Bank /> },
    { path: '/HRIS/Branch', element: <Branch /> },
    { path: '/HRIS/Allowance', element: <Allowance /> },
    { path: '/HRIS/CheckList', element: <CheckList /> },
    { path: '/HRIS/DCType', element: <DCType /> },
    { path: '/HRIS/LeavingReason', element: <LeavingReason /> },
    { path: '/HRIS/Compensation', element: <Compensation /> },
    { path: '/HRIS/Possession', element: <Possession /> },
    { path: '/HRIS/HRDoc', element: <HRDoc /> },
    { path: '/HRIS/ITraining', element: <ITraining /> },
    { path: '/HRIS/News', element: <News /> },
    { path: '/HRIS/PItem', element: <PItem /> },
]

export default HrisRoutes
