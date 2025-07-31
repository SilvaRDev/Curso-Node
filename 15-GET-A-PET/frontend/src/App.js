import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

/* Components */
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Container from './components/layout/Container'

/* Pages */
import Login from "./components/pages/Auth/Login"
import Register from "./components/pages/Auth/Register"
import Home from "./components/pages/Home"

/* Context */
import { UserProvider } from "./context/UserContext"

function App() {
  return (
    <Router>
      <UserProvider>
        <Navbar />
          <Container>
            <Switch>
              <Route path="/login">
                <Login/>
              </Route>
              <Route path="/register">
                <Register/>
              </Route>
              <Route exact path="/">
                <Home/>
              </Route>
            </Switch>
          </Container>
        <Footer />
      </UserProvider>
    </Router>
  )
}

export default App
