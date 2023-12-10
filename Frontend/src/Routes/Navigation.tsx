import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from '../Layout/PrivateLayout'
import { routesUnloged } from './RoutesUnloged/RoutesUnloged'
import { routesLoged } from './RoutesLoged/RoutesLoged'
import { Loading } from '../components'
const UnlogedLayoutLazy = lazy(() => import('../Layout/UnlogedLayout'))
function Navigation() {
  return (
    <Suspense fallback={<Loading/>}>
      <Routes>
        <Route path={'/'} element={<UnlogedLayoutLazy />}>
          {routesUnloged.map(prev => (
            <Route key={prev.id} path={prev.path} element={<prev.element />} />
          ))}
        </Route>
        <Route path={'/tasks'} element={<MainLayout />}>
          {routesLoged.map(prev => (
            <Route key={prev.id} path={prev.path} element={<prev.element />} />
          ))}
        </Route>
      </Routes>
    </Suspense>
  )
}
export default Navigation