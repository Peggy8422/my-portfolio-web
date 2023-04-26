import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import WebDesignPage from './pages/WebDesignPage';
import ProductDesignPage from './pages/ProductDesignPage';
import PaintingsPage from './pages/PaintingsPage';
import WebCategoryPage from './pages/WebCategoryPage';
import './App.scss'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<LandingPage />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/web_design" element={<WebDesignPage />} />
          <Route path="/product_design" element={<ProductDesignPage />} />
          <Route path="/painting" element={<PaintingsPage />} />
          <Route path="/web_works" element={<WebCategoryPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
