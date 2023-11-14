import React from 'react'
import Transaction from '../ApplicationSetup/HRIS/Transaction/Transaction';
import EProfile from '../ApplicationSetup/HRIS/Transaction/EProfile';
import EAPD from '../ApplicationSetup/HRIS/Transaction/EAPD';
import ECNRProcess from '../ApplicationSetup/HRIS/Transaction/ECNRProcess';
import EDelegation from '../ApplicationSetup/HRIS/Transaction/EDelegation';
import EAdesignation from '../ApplicationSetup/HRIS/Transaction/EAdesignation';
import EOValues from '../ApplicationSetup/HRIS/Transaction/EOValues';
import ResourceInfo from '../ApplicationSetup/HRIS/Transaction/ResourceInfo';
import CProcess from '../ApplicationSetup/HRIS/Transaction/CProcess';
import EPEmail from '../ApplicationSetup/HRIS/Transaction/EPEmail';
import EStatus from '../ApplicationSetup/HRIS/Transaction/EStatus';

const TransactionRoutes = [
    { path: '/Transaction/*', element: <Transaction /> },
    { path: '/Transaction/EProfile', element: <EProfile /> },
    { path: '/Transaction/EAPD', element: <EAPD /> },
    { path: '/Transaction/ECNRProcess', element: <ECNRProcess /> },
    { path: '/Transaction/EDelegation', element: <EDelegation /> },
    { path: '/Transaction/EAdesignation', element: <EAdesignation /> },
    { path: '/Transaction/EOValues', element: <EOValues /> },
    { path: '/Transaction/ResourceInfo', element: <ResourceInfo /> },
    { path: '/Transaction/CProcess', element: <CProcess /> },
    { path: '/Transaction/EPEmail', element: <EPEmail /> },
    { path: '/Transaction/EStatus', element: <EStatus /> },

]

export default TransactionRoutes
