import { useAuth } from "../../hooks"
import { FormLog, FormikLogIn } from "../../unLoggedComponents"

const Login = () => {
  const { login } = useAuth()
  return (
    <FormLog Component={FormikLogIn} initialValues={{email:"",password:""}} req={login}></FormLog>
  )
}

export default Login