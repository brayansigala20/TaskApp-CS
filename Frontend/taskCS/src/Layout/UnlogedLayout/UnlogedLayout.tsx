import { Outlet } from "react-router-dom"
import style from '../../styles/Unloged.module.css'

const UnlogedLayout = () => {
  return (
    <div className={style.container}>
        <Outlet/>
    </div>
  )
}

export default UnlogedLayout