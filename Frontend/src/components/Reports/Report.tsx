import { Link } from "react-router-dom";
import style from '../../styles/pages.module.css'
import { AiOutlineFileText } from 'react-icons/ai'
import { FaEdit } from 'react-icons/fa'
import { RiDeleteBin7Line } from 'react-icons/ri'
import Swal from 'sweetalert2'
interface IProps {
    data: {
        name: string;
        priority: string;
        _id: string;
        date: any;
        description: string;
        state: boolean;
        source: string;
        serie?: string;
    }
    openModal: () => void;
    setReport: React.Dispatch<React.SetStateAction<{}>>;
    handleReportDelete: (id: string) => void;
}
const Report = ({ data, openModal,  setReport, handleReportDelete }: IProps) => {
    const { name, priority, _id, date, description, state, source, serie } = data
    const reportStatusStyle = () => {
        let style: string = ''
        switch (data.priority) {
            case 'alta': style = 'bg-red-500'
                break;
            case 'media': style = ''
                break;
            case 'baja': style = 'bg-blue-500'
                break;
            default: 'media'
                break;
        }
        return style
    }
    return (
        <>
            <div className={style['report-container']}>
                <div className={style['report-container--info']}>
                    <h1>{`${name?.split(' ')[0]} 
                          ${name?.split(' ')[1] === undefined ? '' : name.split(' ')[1]}`}</h1>
                </div>
                <div className={style['report-container--butons']}>
                    <Link to={`/tasks/panel/${_id}`}><AiOutlineFileText /></Link>
                    <button onClick={() => {
                        openModal()
                        setReport({ name, priority, _id, date: date?.split('T')[0], description, state, source, serie })
                    }} ><FaEdit /></button>
                    <button onClick={() => {
                          const swalWithBootstrapButtons = Swal.mixin({
                            background:'#212329',
                            color: 'white',
                            customClass: {
                              confirmButton: `${style['btn-success']}`,
                              cancelButton: `${style['btn-canceled']}`
                            },
                            buttonsStyling: true
                          })
                          
                          swalWithBootstrapButtons.fire({
                            title: 'Estas seguro?',
                            text: "No podras recuperar el folio!",
                            icon: 'warning',
                            showCancelButton: true,
                            cancelButtonText: 'No, Cancelar!',
                            confirmButtonText: 'Si, Continuar!',
                            reverseButtons: true
                          }).then((result) => {
                            if (result.isConfirmed) {
                                handleReportDelete(_id)
                              swalWithBootstrapButtons.fire(
                                'Eliminado!',
                                'El folio ah sido eliminado.',
                                'success'
                              )
                            } else if (
                              result.dismiss === Swal.DismissReason.cancel
                            ) {
                              swalWithBootstrapButtons.fire(
                                'Cancelado',
                              )
                            }
                          })
                    }}><RiDeleteBin7Line /></button>
                </div>
                <div className={`${style['report-items--priority']} ${reportStatusStyle()} `}>
                </div>
            </div>
        </>
    )
}

export default Report