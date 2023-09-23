import ModalR from 'react-modal'
import { useReports } from '../../hooks';
import ReportForm from '../ReportForm';
import { EditReportFormik } from '..';
import { clientAxios } from '../../configAxios';
import { AiOutlineClose } from 'react-icons/ai'
import { useEffect } from 'react';
const customStyles = {
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#17181F',
    border: 'none',
    borderRadius: '11px',
    overflow: 'auto',
    outline: 'none',
    height: '97%',

  },
};
ModalR.setAppElement('#root');
const Modal = () => {
  const { afterOpenModal, closeModal, modalIsOpen, report, reports, setReports,setReport } = useReports()
  const { name, description, state, date, priority, source, _id, serie }: any = report

  const initialValues = {
    name: name,
    description: description,
    state: state,
    date: date,
    priority: priority,
    source: source,
    serie: serie
  }
  useEffect(() => {
    if(!modalIsOpen) setReport({})
  }, [modalIsOpen])
  
  const handleReportUpdate = async (data: any) => {
    const res = await clientAxios.put(`/reports/${_id}`, data)
    try {
      const updateReport = reports.map((report: any) => report._id === res.data._id ? data : report)
      setReports(updateReport)
      if (res.status === 200) {
        closeModal()
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <ModalR
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button className={` flex w-full justify-end text-xl px-6 `} onClick={closeModal}><AiOutlineClose /></button>
        <ReportForm initialValues={initialValues} Component={EditReportFormik} req={handleReportUpdate} />
      </ModalR>
    </div>
  )
}

export default Modal