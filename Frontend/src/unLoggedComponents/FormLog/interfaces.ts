export interface IPropsForm {
    initialValues:IInitialValues;
    Component: ({args}:any)=> JSX.Element;
    req:any
}
export interface IInitialValues {
    name?:string;
    email?:string;
    password?:string;
}