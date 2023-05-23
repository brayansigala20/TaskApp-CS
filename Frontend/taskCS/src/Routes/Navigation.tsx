import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UnlogedLayout from '../Layout/UnlogedLayout'
function Navigation() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UnlogedLayout/>}>
          <Route />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Navigation