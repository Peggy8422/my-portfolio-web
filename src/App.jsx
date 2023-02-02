import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import WebDesignPage from './pages/WebDesignPage';
import './App.scss'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<LandingPage />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/web_design" element={<WebDesignPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
