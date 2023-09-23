import { LazyExoticComponent } from 'react'
type JSXElement = () => JSX.Element
export interface IRoutes {
    id: number;
    path: string;
    element: LazyExoticComponent<JSXElement> | JSXElement;
    to: string;
    name?: string;
    icon?: any;
}