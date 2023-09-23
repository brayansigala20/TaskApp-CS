import { useContext } from "react";
import TaskContext from "../../context/taskContextProvider/TaskProviderAuth/TaskProviderAuth"; 


const useAuth = ()=>{
    return useContext(TaskContext)
}
export default useAuth
