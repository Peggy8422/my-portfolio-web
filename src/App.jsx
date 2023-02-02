import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import './App.scss'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
