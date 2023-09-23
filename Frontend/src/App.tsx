import { BrowserRouter } from 'react-router-dom'
import { TaskProviderAuth, TaskProviderReports } from "./context"
import Navigation from "./Routes/Navigation"
import Modal from './components/Modal/Modal'
function App() {
  return (
    <BrowserRouter>
      <TaskProviderAuth>
        <TaskProviderReports>
        <Navigation />
        <Modal/>
        </TaskProviderReports>
      </TaskProviderAuth>
    </BrowserRouter>
  )
}

export default App
