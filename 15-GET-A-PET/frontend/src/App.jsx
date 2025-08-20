import { BrowserRouter, Routes, Route } from 'react-router-dom'

/* COMPONENTS */
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Container from './components/layout/Container'
import Message from './components/Message/Message'

/* PAGES */
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Home from './pages/Home'

/*  CONTEXTS */
import { UserProvider } from './context/userContext'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <Navbar />
          <Message />
          <Container>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </Container>
          <Footer />
        </UserProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
