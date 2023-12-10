import { ReactElement, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { clientAxios } from "../../../configAxios";
interface ItaskArgs {
    children: ReactElement | ReactElement[]
}
interface IContextValues {
    logUp: (data: any) => Promise<void>;
    confirm: (token: string | undefined) => Promise<void>;
    login: (data: any) => Promise<void>;
    userData:  any;
    loading: boolean;
    closeSession: () => void;
}
const TaskContext = createContext({} as IContextValues)
const TaskProviderAuth = ({ children }: ItaskArgs) => {
    const [userData, setUserData] = useState<{}>({})
    const [loading, setLoading] = useState<boolean>(true)
    const nav = useNavigate()
    const logUp = async (data: any) => {
        try {
            await clientAxios.post('/users', data)
        } catch (error) {
            console.log(error)
        }
    }
    const confirm = async (token = '') => {
        try {
            await clientAxios.get(`/users/confirm/${token}`)
        } catch (error) {
            console.log(error)
        }
    }
    const login = async (data: any) => {
        try {
            const res = await clientAxios.post('/users/login', data)
            localStorage.setItem("token", res.data.token)
            setUserData(res.data)
            if (res.status === 200) nav('/tasks/dashboard')
            return
        } catch (error) {
            console.log(error)
        }
    }
    const profile = async () => {
        const token = localStorage.getItem('token')
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }
        if (!token) {
            setLoading(false)
            return
        }
        try {
            const { data } = await clientAxios.get("/users/profile", config)
            setUserData(data)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }
    const closeSession = () => {
        setUserData({})
        setLoading(false)
        localStorage.removeItem("token")
    }
    useEffect(() => {
        profile()
    }, [])
    return (
        <TaskContext.Provider
            value={{
                logUp,
                confirm,
                login,
                userData,
                loading,
                closeSession

            }}>
            {children}
        </TaskContext.Provider>
    )
}
export default TaskContext
export { TaskProviderAuth }
