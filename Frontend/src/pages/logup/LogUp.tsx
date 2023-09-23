import { useAuth } from "../../hooks"
import { FormLog } from "../../unLoggedComponents"
import FormikLogUp from "../../unLoggedComponents/FormikLogUp/FormikLogUp"

const LogUp = () => {
  const { logUp } = useAuth()
  return (
    <FormLog Component={FormikLogUp} initialValues={{name:'',email:'',password:''}} req={logUp}></FormLog>
  )
}


export default LogUp