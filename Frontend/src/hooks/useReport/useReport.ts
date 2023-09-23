import { useContext } from "react";
import TaskContext from "../../context/taskContextProvider/TaskProviderReports/TaskProviderReports"; 


const useReport = ()=>{
    return useContext(TaskContext)
}
export default useReport
