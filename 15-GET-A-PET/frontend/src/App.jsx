import { BrowserRouter, Routes, Route } from 'react-router-dom'

/* COMPONENTS */
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Container from './components/layout/Container'

/* PAGES */
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
