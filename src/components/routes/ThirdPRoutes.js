import React from 'react'
import ThirdP from '../ApplicationSetup/HRIS/ThirdPart/ThirdP';
import TEProfile from '../ApplicationSetup/HRIS/ThirdPart/TEProfile';
import PayrollS from '../ApplicationSetup/HRIS/ThirdPart/PayrollS';
import OTPayment from '../ApplicationSetup/HRIS/ThirdPart/OTPayment';
import ECases from '../ApplicationSetup/HRIS/ThirdPart/ECases';
import HRInfo from '../ApplicationSetup/HRIS/ThirdPart/HRInfo';
import Blacklist from '../ApplicationSetup/HRIS/ThirdPart/Blacklist';

const ThirdPRoutes = [
    { path: '/ThirdP/*', element: <ThirdP /> },
    { path: '/ThirdP/TEProfile', element: <TEProfile /> },
    { path: '/ThirdP/PayrollS', element: <PayrollS /> },
    { path: '/ThirdP/OTPayment', element: <OTPayment /> },
    { path: '/ThirdP/ECases', element: <ECases /> },
    { path: '/ThirdP/HRInfo', element: <HRInfo /> },
    { path: '/ThirdP/Blacklist', element: <Blacklist /> },
]

export default ThirdPRoutes
