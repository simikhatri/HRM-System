import React from 'react'
import Attendance from '../../ApplicationSetup/L&A/Attendance';
import Shift from '../../ApplicationSetup/L&A/Setup/Shift';
import HCalender from '../../ApplicationSetup/L&A/Setup/HCalender';
import OverTime from '../../ApplicationSetup/L&A/Setup/OverTime';
import Holiday from '../../ApplicationSetup/L&A/Setup/Holiday';
import LeaveType from '../../ApplicationSetup/L&A/Setup/LeaveType';
import OTPlan from '../../ApplicationSetup/L&A/Setup/OTPlan';

const LAARoutes = [
    { path: '/Attendance/*', element: <Attendance /> },
    { path: '/Attendance/Shift', element: <Shift /> },
    { path: '/Attendance/HCalender', element: <HCalender /> },
    { path: '/Attendance/OverTime', element: <OverTime /> },
    { path: '/Attendance/Holiday', element: <Holiday /> },
    { path: '/Attendance/LeaveType', element: <LeaveType /> },
    { path: '/Attendance/OTPlan', element: <OTPlan /> },
]

export default LAARoutes
