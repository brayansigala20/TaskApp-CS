import { Field, Form } from "formik"
import style from '../../styles/loged.module.css'
interface IProps {
    isSubmitting: boolean;
}
const EditReportFormik = ({ isSubmitting }: IProps) => {

    return (
        <Form>
            <div className='flex'>
                <div className='flex flex-col gap-3 w-1/2'>
                    <Field name="name">
                        {({ field, meta }: any) => (
                            <div className={style.formikContainer}>
                                <label>Nombre</label>
                                <input className={style.FieldFormik} id="name" type="text" {...field} placeholder="name" />
                                {meta.touched &&
                                    meta.error && <div className={style.errorLabel}>{meta.error}</div>}
                            </div>
                        )}
                    </Field>
                    <Field name="description">
                        {({ field, meta }: any) => (
                            <div className={style.formikContainer}>
                                <label>Descripcion</label>
                                <input className={style.FieldFormik} type="text" id="description" {...field} placeholder="description" />
                                {meta.touched &&
                                    meta.error && <div className={style.errorLabel}>{meta.error}</div>}
                            </div>
                        )}
                    </Field>

                    <Field name="date">
                        {({ field, meta }: any) => (
                            <div className={style.formikContainer}>
                                <label>Fecha</label>
                                <input className={style.FieldFormik} type="date" id="date"  {...field} placeholder="date" />
                                {meta.touched &&
                                    meta.error && <div className={style.errorLabel}>{meta.error}</div>}
                            </div>
                        )}
                    </Field>
                    </div>
                    <div className="w-2/3">
                        <Field name="priority">
                            {({ field, meta }: any) => (
                                <div className={style.formikContainer}>
                                    <label>Prioridad</label>
                                    <select className={style.FieldFormik}{...field} id="priority" placeholder="priority">
                                        <option className="text-center" value="">--seleciona--</option>
                                        <option value="alta">Alta</option>
                                        <option value="media">Media</option>
                                        <option value="baja">Baja</option>
                                    </select>
                                    {meta.touched &&
                                        meta.error && <div className={style.errorLabel}>{meta.error}</div>}
                                </div>
                            )}
                        </Field>
                        <Field name="state">
                            {({ field, meta }: any) => (
                                <div className={`${style.formikContainer}`}>
                                    <label>Estado</label>
                                    <div className={`${style.FieldFormik} flex justify-center gap-4`}>
                                        <label>Completado</label>
                                        <input className={''} type={'radio'} {...field} value={true} placeholder="stateTrue" />
                                        <label>Pendiente</label>
                                        <input className={''} type={'radio'} {...field} value={false} placeholder="stateFalse" />
                                    </div>
                                    {meta.touched &&
                                        meta.error && <div className={`${style.errorLabel}`}>{meta.error}</div>}
                                </div>
                            )}
                        </Field>
                        <Field name="serie">
                            {({ field, meta }: any) => (
                                <div className={style.formikContainer}>
                                    <label>serie</label>
                                    <input className={style.FieldFormik} type="text" id="serie" {...field} placeholder="serie" />
                                    {meta.touched &&
                                        meta.error && <div className={style.errorLabel}>{meta.error}</div>}
                                </div>
                            )}
                        </Field>
                </div>
            </div>
            <div className={style.buttonSubmit}>
                <input value={"Editar Folio"} type="submit" disabled={isSubmitting} />
            </div>
        </Form >
    )
}

export default EditReportFormik