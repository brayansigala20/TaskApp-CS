import { LogUp,Login,confirm } from "../../pages"
import { IRoutes } from "../intrefaces"
export const routesUnloged:IRoutes[] = [
    {
        id:1,
        path:'/',
        element: Login,
        to:'/login',
        name:'login'
    },
    {
        id:2,
        path:'/Logup',
        element: LogUp,
        to:'/logup',
        name:'Log Up'
    },
    {
        id:3,
        path:'/confirm/:token',
        element: confirm,
        to:'/confirm',
        name:'confimr'
    }

]