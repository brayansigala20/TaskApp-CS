import { NewReportFormik } from "../../components"
import ReportForm from "../../components/ReportForm"
import { useReports } from "../../hooks"
const NewReport = () => {
    const {newReportDispatch} = useReports()
    const initialValues = {
        name: '',
        description: '',
        state: false,
        date: '',
        priority: '',
        source: '',
        serie: ''
    }
    return (
            <ReportForm initialValues={initialValues} Component={NewReportFormik} req={newReportDispatch} />
    )
}

export default NewReport