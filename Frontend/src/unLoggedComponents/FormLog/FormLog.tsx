import { Formik } from 'formik';
import { IPropsForm } from './interfaces';
import style from '../../styles/Unloged.module.css'
import { Link, useLocation } from 'react-router-dom';
const FormLog = ({ initialValues, Component, req }: IPropsForm) => {
    const { pathname } = useLocation()
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validate={values => {
                    const errors: any = {};
                    if (values.name) {
                        return
                    }
                    else if (values.name?.includes('')) {
                        errors.name = "Nombre requerido !"
                    }
                    if (!values.email) {
                        errors.email = 'Introduce un E-mail valido !';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Email Invalido';
                    }
                    if (!values.password) {
                        errors.password = "Contraseña requerida !"
                    } else if (values.password && values.password.length < 8) {
                        (errors.password = "la contraseña debe contener almenos 8 caracteres !")
                    }
                    return errors;
                }}
                onSubmit={(values, { resetForm }) => {
                    req(values)
                    setTimeout(() => {
                        resetForm()
                    }, 2000)
                }}
            >
                {({ isSubmitting }) => (
                    <div className={`${style.formikContainer} p-6`}>
                        <Component isSubmitting={isSubmitting} />
                        <div className={` m-5 text-xl flex justify-between`}>
                            <Link className={`${pathname === '/' ? ' text-slate-700' : ''}`} to={'/'}>
                                Iniciar Sesion</Link>
                            <Link className={`${pathname !== '/' ? ' text-slate-700' : ''}`} to={'/logup'}>
                                Registrar</Link>
                        </div>
                    </div>
                )}
            </Formik>
        </div>
    )
}
export default FormLog