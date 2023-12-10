import { useReports } from "../../hooks"
import { Report } from "../../components"
import style from '../../styles/pages.module.css'
import Spinner from "../../components/Spinner/Spinner"
import { useEffect } from "react"
const Home = () => {
  const {
    openModal,
    reports,
    setReport,
    handleReportDelete,
    loadingSpinner,
    getReportDispatch
  } = useReports()
  useEffect(() => {
    getReportDispatch()
  }, [])

  return (
    <>
      {!loadingSpinner && reports.length ?
        <div className={`${style['table-container']}`}>
          <h2>Recientes</h2>
          <h2>Completados</h2>
          <h2>Pendientes</h2>
          <div className={`${style['table-container__item']}`}>
            {reports?.filter((filterData: any) =>
              filterData.createdAt && filterData.updatedAt?.split("T")[0] === new Date().toISOString().split("T")[0])
              .map(({ name, priority, _id, date, description, state, source, serie }: any) => (
                <Report key={_id}
                  data={{ name, priority, _id, date, description, state, source, serie }}
                  openModal={openModal} setReport={setReport}
                  handleReportDelete={handleReportDelete} />
              ))}
          </div>
          <div className={`${style['table-container__item']}`}>
            {reports?.filter((filterData: any) => filterData.state === true)
              .map(({ name, priority, _id, date, description, state, source, serie }: any) => (
                <Report key={_id}
                  data={{ name, priority, _id, date, description, state, source, serie }}
                  openModal={openModal} setReport={setReport}
                  handleReportDelete={handleReportDelete} />
              ))}
          </div>
          <div className={`${style['table-container__item']}`}>
            {reports?.filter((filterData: any) => filterData.state === false)
              .map(({ name, priority, _id, date, description, state, source, serie }: any) => (
                <Report key={_id}
                  data={{ name, priority, _id, date, description, state, source, serie }}
                  openModal={openModal} setReport={setReport}
                  handleReportDelete={handleReportDelete} />
              ))}
          </div>
        </div>
        : <Spinner />}
    </>
  )
}

export default Home