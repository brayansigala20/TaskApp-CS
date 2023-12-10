import { NavLink } from "react-router-dom"
import { routesLoged } from "../../Routes/RoutesLoged/RoutesLoged"
import style from '../../styles/layout.module.css'
const NavBar = () => {
  return (
    <div style={{ borderColor: '#212329' }} className="flex flex-col border-b-2">
      {routesLoged.filter((data) => data.name).map(({ name, to, id, icon }) => (
        <NavLink key={id} className={({ isActive }) => isActive ? style['itemNav--active'] : ''}
          to={to}><img width={30} height={30} src={icon} alt={name} />{name}</NavLink>
      ))}
    </div>
  )
}

export default NavBar