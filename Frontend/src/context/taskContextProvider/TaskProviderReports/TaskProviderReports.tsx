import { Dispatch, ReactElement, SetStateAction, createContext, useEffect, useState } from "react";
import { useAuth } from "../../../hooks";
import { clientAxios, config } from "../../../configAxios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
interface ItaskArgs {
    children: ReactElement | ReactElement[]
}
interface IContextValues {
    newReportDispatch: (data: any) => Promise<void>;
    getReportDispatch: () => Promise<void>;
    reportsDispatch: (datida: string | undefined) => Promise<void>;
    openModal: () => void;
    afterOpenModal: () => void;
    closeModal: () => void;
    handleReportDelete: (id: string) => void;
    cleanState: () => void;
    // handleReportEdit: (id: string | undefined) => Promise<void>;
    setReport: Dispatch<SetStateAction<{}>>;
    setReports: Dispatch<SetStateAction<{}[]>>
    setIdReportUpdate: Dispatch<SetStateAction<string>>
    inputSearch: (e: any) => void;
    setLoadingSpinner: Dispatch<SetStateAction<boolean>>;
    setMessage: Dispatch<SetStateAction<{ msg: string }>>;
    modalIsOpen: boolean;
    report: {};
    reports: {}[];
    fileReport: {};
    searchValue: string;
    idReportUpdate: string;
    loadingSpinner: boolean;
    message: { msg: string };
}

const TaskContext = createContext({} as IContextValues)
const TaskProviderReports = ({ children }: ItaskArgs) => {
    const [modalIsOpen, setIsOpen] = useState<boolean>(false);
    const [reports, setReports] = useState<{}[]>([])
    const [report, setReport] = useState({})
    const [fileReport, setFileReport] = useState<{}>({})
    const [searchValue, setSearchValue] = useState<string>('')
    const [idReportUpdate, setIdReportUpdate] = useState<string>('')
    const [loadingSpinner, setLoadingSpinner] = useState(true)
    const [message, setMessage] = useState<{ msg: string }>({ msg: '' })
    const { userData } = useAuth()

    const nav = useNavigate()
    const newReportDispatch = async (data: any) => {
        const { name, description, date, priority, source, serie,state } = data
        data.user = userData._id
        const formData = new FormData()
        formData.append('name', name)
        formData.append('description', description)
        formData.append('date', date)
        formData.append('priority', priority)
        formData.append('source', source)
        formData.append('user', data.user)
        formData.append('state',state)
        formData.append('serie', serie)
        try {
            const res = await clientAxios.post('/reports', formData)
            toast.success(res.data.msg)
            if (res.status === 200) {
                nav('tasks/panel')
            }
        } catch (error) {
            console.log(error)
        }
    }
    const getReportDispatch = async () => {
        const data: any = await clientAxios.get('/reports', config())
        console.log({data:data.data})
        try {
            setReports(data.data)
            setLoadingSpinner(false)
        } catch (error) {
            console.log(error)
        }
    }
    const reportsDispatch = async (id: string | undefined) => {
        const { data }: { data: { source: string } } = await clientAxios.get(`/reports/${id}`, config())
        setFileReport(data)
    }
    const handleReportDelete = async (id: string) => {
        const data = await clientAxios.delete(`/reports/${id}`)
        const reportfilter = reports.filter(({ _id }: any) => _id !== id)
        setReports(reportfilter)
        setMessage(data.data.msj)
    }
    const openModal = () => {
        setIsOpen(true);
    }
    const afterOpenModal = () => {
        // references are now sync'd and can be accessed.
    }
    const closeModal = () => {
        setIsOpen(false);
    }
    const inputSearch = (e: any) => {
        setSearchValue(e.target.value)
    }
    const cleanState = () => {
        setReports([])
    }
    useEffect(() => {
        getReportDispatch()
      }, [])
    return (
        <TaskContext.Provider
            value={{
                newReportDispatch,
                getReportDispatch,
                reportsDispatch,
                openModal,
                afterOpenModal,
                closeModal,
                handleReportDelete,
                cleanState,
                setReport,
                inputSearch,
                setReports,
                setIdReportUpdate,
                setLoadingSpinner,
                setMessage,
                modalIsOpen,
                reports,
                report,
                fileReport,
                searchValue,
                idReportUpdate,
                loadingSpinner,
                message
            }}>
            {children}
        </TaskContext.Provider>
    )
}
export default TaskContext
export { TaskProviderReports }