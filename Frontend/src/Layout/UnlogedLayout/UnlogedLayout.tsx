import { Outlet } from "react-router-dom"
import style from '../../styles/Unloged.module.css'
import { Footer,UnlogHeader } from "../../unLoggedComponents"
const UnLogedLayout = () => {
  return (
    <div className={style.container}>
      <header>
        <UnlogHeader/>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default UnLogedLayout