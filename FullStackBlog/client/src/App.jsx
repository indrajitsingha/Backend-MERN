import React from 'react'
import { Button } from './components/ui/button'
import { BrowserRouter,Routes ,Route} from 'react-router-dom'
import Layout from './layout/Layout'
import { routeIndex, Signin, Signup } from './helpers/RoutesList'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path= {routeIndex} element={<Layout/>}>
        <Route index element={<Home/>}/>
        </Route>
        <Route path= {Signin} element={<SignIn/>}/>
        <Route path= {Signup} element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App