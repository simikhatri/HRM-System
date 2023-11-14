import React from 'react'
import Reports from '../../ApplicationSetup/L&A/AReports/Reports';
import ELBR from '../../ApplicationSetup/L&A/AReports/ELBR';
import EAIR from '../../ApplicationSetup/L&A/AReports/EAIR';
import EAReport from '../../ApplicationSetup/L&A/AReports/EAReport';
import EASummary from '../../ApplicationSetup/L&A/AReports/EASummary';

const ReportRoutes = [
    { path: '/Reports/*', element: <Reports/> },
    { path: '/Reports/ELBR', element: <ELBR/> },
    { path: '/Reports/EAIR', element: <EAIR/> },
    { path: '/Reports/EAReport', element: <EAReport/> },
    { path: '/Reports/EASummary', element: <EASummary/> },
]

export default ReportRoutes
