export interface IPropsForm {
    initialValues:IInitialValues;
    Component: ({args}:any)=> JSX.Element;
    req:any
}
export interface IInitialValues {
    id?: string;
    name?:string;
    description?:string;
    state?:boolean | undefined;
    date?: string | Date ;
    priority?:[string] | string;
    source?: File | string;
    serie?:string;
}