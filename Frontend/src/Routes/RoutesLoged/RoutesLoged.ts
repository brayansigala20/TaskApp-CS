import { lazy } from 'react'
import { Report } from "../../pages";
import { IRoutes } from "../intrefaces";
import { Home } from '../../pages'
import dash from '/icons/dash.png';
import document from '/icons/document.png';
import add from '/icons/add.png';
const DashLazy = lazy(() => import(/* webpackChunkName: "LazyLoadDashboard" */'../../pages/dashboard'))
const NewReportLazy = lazy(() => import(/* webpackChunkName: "LazyLoadNewReport" */'../../pages/newReport'))
export const routesLoged: IRoutes[] = [
    {
        id: 1,
        path: 'panel',
        element: Home,
        to: '/tasks/panel',
        name: 'panel',
        icon: document
    }, {
        id: 2,
        path: 'dashboard',
        element: DashLazy,
        to: '/tasks/dashboard',
        name: 'Dashboard',
        icon: dash
    }, {
        id: 3,
        path: 'new-report',
        element: NewReportLazy,
        to: '/tasks/new-report',
        name: 'new Report',
        icon: add
    }, {
        id: 4,
        path: 'panel/:id',
        element: Report,
        to: `/tasks/panel/:id`
    }
]
