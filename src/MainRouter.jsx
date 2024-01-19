import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Registros } from './views/Registros';
import { NuevoUsuario } from './views/NuevoUsuario';
import { ActualizarUsuario } from './views/ActualizarUsuario';


export const MainRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={ <Registros /> } />
            <Route path='/registrar' element={ <NuevoUsuario /> } />
            <Route path='/actualizar' element={ <ActualizarUsuario /> } />
        </Routes>
    </Router>
  )
}

