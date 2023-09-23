import { Form, Field } from 'formik';
import style from '../../styles/Unloged.module.css'
interface Iprops {
  isSubmitting: boolean
}
const FormikLogIn = ({ isSubmitting }: Iprops) => {
  return (
    <Form>
      <div className='flex'>
      </div>
      <div className='flex flex-col gap-3'>
        <Field name="email">
          {({ field, meta }: any) => (
            <div className={style.formikContainer}>
              <label>Email</label>
              <input className={style.FieldFormik} type="text" {...field} placeholder="E-mail" />
              {meta.touched &&
                meta.error && <div className={style.errorLabel}>{meta.error}</div>}
            </div>
          )}
        </Field>
        <Field name="password">
          {({ field, meta }:any) => (
            <div className={style.formikContainer}>
              <label>Contraseña</label>
              <input className={style.FieldFormik} type="password" {...field} placeholder="Password" />
              {meta.touched &&
                meta.error && <div className={style.errorLabel}>{meta.error}</div>}
            </div>
          )}
        </Field>
      </div>
      <button className={style.buttonSubmit} type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </Form >
  )
}
export default FormikLogIn