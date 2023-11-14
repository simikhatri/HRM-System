import React from 'react'
import ATransaction from '../../ApplicationSetup/L&A/Transaction/ATransaction'
import EShift from '../../ApplicationSetup/L&A/Transaction/EShift'
import LAttendance from '../../ApplicationSetup/L&A/Transaction/LAttendance'
import MonthlyL from '../../ApplicationSetup/L&A/Transaction/MonthlyL'
import OTClaim from '../../ApplicationSetup/L&A/Transaction/OTClaim'
import AFile from '../../ApplicationSetup/L&A/Transaction/AFile'
import AAA from '../../ApplicationSetup/L&A/Transaction/AAA'
import MAttendance from '../../ApplicationSetup/L&A/Transaction/MAttendance';
import EYLB from '../../ApplicationSetup/L&A/Transaction/EYLB'

const ATransactionRoutes = [
    { path: '/ATransaction/*', element: <ATransaction /> },
    { path: '/ATransaction/EShift', element: <EShift /> },
    { path: '/ATransaction/LAttendance', element: <LAttendance /> },
    { path: '/ATransaction/MonthlyL', element: <MonthlyL /> },
    { path: '/ATransaction/OTClaim', element: <OTClaim/> },
    { path: '/ATransaction/AFile', element: <AFile/> },
    { path: '/ATransaction/AAA', element: <AAA/> },
    { path: '/ATransaction/MAttendance', element: <MAttendance/> },
    { path: '/ATransaction/EYLB', element: <EYLB/> },


]

export default ATransactionRoutes
