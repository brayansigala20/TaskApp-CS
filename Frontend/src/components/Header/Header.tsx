import { useState } from "react"
import { useAuth, useReports } from "../../hooks"
import { FaUserCircle } from 'react-icons/fa'
import { MdCircleNotifications } from 'react-icons/md'
import { TbLogout2 } from 'react-icons/tb'
import { AiOutlineSearch, AiOutlineEye } from 'react-icons/ai'
import { RiDeleteBin7Line } from 'react-icons/ri'
import style from '../../styles/loged.module.css'
import { Link } from "react-router-dom"
const Header = () => {
  const { closeSession, userData } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMenuSearchOpen, setIsMenuSearchOpen] = useState(false);
  const { reports, inputSearch, searchValue, handleReportDelete, cleanState } = useReports()
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div
      className=" p-4 flex w-full justify-between items-center">
      <div className=" flex text-2xl gap-3">
        <div className="flex">
          <button className="" onClick={toggleMenu}>
            <FaUserCircle />
          </button>
          {isMenuOpen && (
            <ul className={`${style['header-icon--dropmenu']} text-base`}>
              <li><TbLogout2 /><button onClick={() => {
                closeSession()
                cleanState()
              }
              }>Cerrar sesion</button></li>
            </ul>
          )}
        </div>
        <h1 className=" text-base mt-1">
          {`${userData.name.split(' ')[0]} 
          ${userData.name.split(' ')[1] === undefined ? '' : userData.name.split(' ')[1]}`}
        </h1>
      </div>
      {/* input bar */}
      <div className={`${style['header-input']} px-6`}>
        <input className=" px-3" id="searchInput" type={'search'} value={searchValue}
          onChange={(e) => {
            inputSearch(e)
            if (e.target.value.length <= 0) return setIsMenuSearchOpen(false)
            setIsMenuSearchOpen(true)
          }} placeholder={"Buscar"} />
        <label htmlFor="searchInput">
          <AiOutlineSearch />
        </label>
        {isMenuSearchOpen && (
          <div className={`${style['header-search']} shadow-xl`}>
            <div className="flex-1">
              {reports &&
                reports.filter((filterData: any) => {
                  if (filterData.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
                    return filterData
                  }
                })
                  .map(({ name, _id }: any) => (
                    <ul key={_id} className={`${style['header-search--item']}`}>
                      <li>
                        <div className="flex justify-between">
                          <h2>{name}</h2>
                          <div className=" flex gap-2 justify-center items-center">
                            <Link to={`/tasks/panel/${_id}`}><AiOutlineEye /></Link>
                            <button onClick={() => handleReportDelete(_id)}><RiDeleteBin7Line /></button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  ))}
            </div>
            <div className=" border-t">
              <h2>Recientes</h2>
              {reports && reports?.filter((filterData: any) => filterData.date?.split("T")[0] === new Date().toISOString().split("T")[0])
                .map(({ name, _id }: any) => (
                  <ul key={_id} className={`${style['header-search--item']} overflow-scroll`}>
                    <li>
                      <div className="flex justify-between">
                        <h2>{name}</h2>
                        <div className=" flex gap-2 justify-center items-center">
                          <Link to={`/tasks/panel/${_id}`}><AiOutlineEye /></Link>
                          <button onClick={() => handleReportDelete(_id)}><RiDeleteBin7Line /></button>
                        </div>
                      </div>
                    </li>
                  </ul>
                ))}
            </div>
          </div>
        )}
      </div>
      <div className="flex text-3xl mr-5 gap-5">
        <MdCircleNotifications />
      </div>
    </div>
  )
}

export default Header
