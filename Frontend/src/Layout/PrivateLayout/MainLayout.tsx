import { Outlet } from "react-router-dom"
import { Header, NavBar } from "../../components"
import style from "../../styles/layout.module.css"
import { useAuth } from "../../hooks"
import { Navigate } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MainLayout: any = () => {
  const { userData, loading } = useAuth()
  if (loading) return
  return (
    userData?._id ? (
      <div className={style.container}>
        <header className=" justify-start   ">
          <Header />
        </header>
        <div className={style['container--items']}>
          <nav className=" px-3 w-48">
            <NavBar />
          </nav>
          <main className=" flex flex-1 px-10 py-5 h-full overflow-scroll ">
            <div>
              <ToastContainer
                theme="dark"
                toastStyle={{ backgroundColor: '#20212c', color: 'white', font: 'bold' }}
                hideProgressBar />
            </div>
            <Outlet />
          </main>
        </div>
      </div>
    ) : <Navigate to='/' />
  )
}

export default MainLayout