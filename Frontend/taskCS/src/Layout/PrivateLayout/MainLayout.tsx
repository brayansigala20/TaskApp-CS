import { Outlet } from "react-router-dom"
import { Header, NavBar } from "../../components"
import Style from '../styles/layout.module.css'


const MainLayout = () => {
  return (
    <div className={Style.container}>
      <header className="border">
        <Header />
      </header>
      <div className={Style['container--items']}>
      <nav className=" border w-48">
        <NavBar />
      </nav>
     <main className=" flex flex-1 px-10 py-5">
        <Outlet />
      </main>
     </div>
      </div>
  )
}

export default MainLayout