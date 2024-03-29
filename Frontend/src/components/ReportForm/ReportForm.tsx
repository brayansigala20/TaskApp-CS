import { Formik } from "formik";
import { IPropsForm } from "./interfaces";
import style from '../../styles/loged.module.css'
const ReportForm = ({ initialValues, Component, req }: IPropsForm) => {
    return (
        <div className=" w-full mt-3  ">
            <Formik
                initialValues={initialValues}
                validate={values => {
                    const errors: any = {};
                    if (values.name) {
                        return
                    } else if (values.name?.includes('')) {
                        errors.name = "Nombre requerido !"
                    }
                    
                    if (!values.description) {
                        errors.description = "Campo Requerido !"
                    } else if (values.description && values.description.length < 8) {
                        (
                            errors.password = "Debe contener almenos 8 caracteres !"
                        )
                    }
                    if (!values.date) {
                        errors.date = "Campo requerido!"
                    }
                    if (!values.priority) {
                        errors.priority = "Seleciona la prioridad!"
                    }
                    if (!values.source) {
                        errors.source = "Selecciona un archivo"
                    }
                    return errors;
                }}
                onSubmit={(values) => {
                    req(values)
                }}
            >
                {({ isSubmitting }) => (
                    <div className={`${style.formContainer}`}>
                        <Component isSubmitting={isSubmitting} />
                    </div>
                )}
            </Formik>
        </div>
    )
}

export default ReportForm