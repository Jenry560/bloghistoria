import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Causas from './componentes/causas';
import Latina from './componentes/latina';
import Masiva from './componentes/masiva';
import Crisis from './componentes/crisis';
import Recarga from './componentes/recargar';




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Recarga/>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/causas' element={<Causas/>}/>
        <Route path='/latina' element={<Latina/>}/>
        <Route path='/masiva' element={<Masiva/>}/>
        <Route path='/crisis' element={<Crisis/>}/>
       
      </Routes>
    </Router>
  </React.StrictMode>
);

