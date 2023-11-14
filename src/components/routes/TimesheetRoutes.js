import React from 'react'
import Timesheet from '../ApplicationSetup/HRIS/TimeSheet/Timesheet';
import TCategory from '../ApplicationSetup/HRIS/TimeSheet/TCategory';
import Client from '../ApplicationSetup/HRIS/TimeSheet/Client';
import Phase from '../ApplicationSetup/HRIS/TimeSheet/Phase';
import Project from '../ApplicationSetup/HRIS/TimeSheet/Project';
import WorkType from '../ApplicationSetup/HRIS/TimeSheet/WorkType';

const TimesheetRoutes = [
    { path: '/Timesheet/*', element: <Timesheet /> },
    { path: '/Timesheet/TCategory', element: <TCategory /> },
    { path: '/Timesheet/Client', element: <Client/> },
    { path: '/Timesheet/Phase', element: <Phase/> },
    { path: '/Timesheet/Project', element: <Project/> },
    { path: '/Timesheet/WorkType', element: <WorkType/> },
]

export default TimesheetRoutes
