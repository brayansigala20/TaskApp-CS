import { useParams } from "react-router-dom"
import { useReports } from "../../hooks"
import { useEffect } from "react"
import style from '../../styles/pages.module.css'
import { BiArrowBack } from 'react-icons/bi'
import { useNavigate } from "react-router-dom"
const Report = () => {
  const { reportsDispatch, fileReport }: any = useReports()
  const { id } = useParams()
  useEffect(() => {
    reportsDispatch(id)
  }, [])
  console.log(fileReport?.source?.split('.')[1])
  const { _id, name, source, description, priority, date, serie }: any = fileReport
  const nav = useNavigate()
  return (
    <div className="  w-full overflow-scroll">
      <button onClick={() => nav('/tasks/panel')} className=" text-3xl flex items-center p-3"><BiArrowBack /></button>
      <div className="flex ">
        <div className={`${style['file-container--report']} border flex-1`}><span>Nombre:</span> {name}</div>
        <div className={`${style['file-container--report']} border p-5 `}><span>Id:</span>{_id}</div>
      </div>
      <div className=" flex">
        <div className={`${style['file-container--report']} w-full border`}><span>Descripcion:</span>{description} </div>
      </div>
      <div className="flex">
        <div className={`${style['file-container--report']} border w-1/2`}><span>Prioridad:</span>{priority}</div>
        <div className={`${style['file-container--report']} border w-1/2`}><span>Serie:</span>{serie} </div>
        <div className={`${style['file-container--report']} border w-1/2`}><span>Fecha:</span>{date?.split("T")[0]} </div>
      </div>
      <div className={`${style['file-container--report']} h-5/6`}>
        {fileReport.source ?
          <div className="h-full">
            {fileReport.source.split('.')[1] !== 'pdf' ? <img className="w-full h-full rounded-xl lg:w-full object-contain" src={`${import.meta.env.VITE_URL_API}/${source}`} alt="" /> 
            :<iframe className="w-full h-full rounded-xl  lg:w-full" src={`${import.meta.env.VITE_URL_API}/${source}`} /> }
          </div>
          : <span className="flex justify-center mt-5 "> No hay archivo para mostrar</span>}
      </div>
    </div>

  )
}

export default Report