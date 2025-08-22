import { BrowserRouter, Routes, Route } from 'react-router-dom'

/* COMPONENTS */
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Container from './components/layout/Container'
import Message from './components/Message/Message'

/*  CONTEXTS */
import { UserProvider } from './context/userContext'

/* PAGES */
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Home from './pages/Home'
import Profile from './pages/User/Profile/Profile'
import MyPets from './pages/Pet/MyPets/MyPets'
import AddPet from './components/AddPet/AddPet'
import EditPet from './pages/Pet/EditPet/EditPet'

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
              <Route path="/user/profile" element={<Profile />} />
              <Route path="/pet/mypets" element={<MyPets />} />
              <Route path="/pet/add" element={<AddPet />} />
              <Route path="/pet/edit/:id" element={<EditPet />} />
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
