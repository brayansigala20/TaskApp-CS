import { Home,Dashboard } from "../pages";
interface IRoute{
    path:string;
    element: ()=> JSX.Element;
    to:string;
    name:string;
}
export const routes:IRoute[] = [
    {
        path:'/home',
        element: Home,
        to:'/',
        name:'home'
    },
    {
        path:'/Dashboard',
        element: Dashboard,
        to:'/',
        name:'dashboard'
    }

]
