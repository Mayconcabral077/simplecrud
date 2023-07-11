import'./App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import {Logo} from '../templates/Logo'
import {Nav} from '../templates/Nav'
import {Rotas} from './Rotas'
import {Footer} from '../templates/Footer'
import { BrowserRouter } from 'react-router-dom'

export function App () {
  return (
    <BrowserRouter>
    <div className="app">
          <Logo />
          <Nav />
          <Rotas />
          <Footer />
    </div>
    </BrowserRouter>
  )
}
