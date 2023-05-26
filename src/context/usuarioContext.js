import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [email, setEmail] = useState('');
  const [rut, setRut] = useState('');
  const [rol, setRol] = useState('');
  const [rutEmpresas, setRutEmpresas] = useState([]);

  const guardarParametros = (data) => {
    console.log("guardarParametros ROl: " + data.user.rol);
    setUsuario('randomUser');
    setEmail(data.user.email);
    setRut('00000000-0');
    setRol(data.user.rol);
    if(data.user.rol == "empresa"){
      console.log("EMRPESA", data.rutEmpresa[0])
      setRutEmpresas(data.rutEmpresa)
    }
    
    
    console.log("EMPRESAS121", rutEmpresas)

  };

  const refreshParameters = (user, email, rut, rutEmpresa, rol) => {
    setUsuario(user);
    setRut(rut);
    setRutEmpresas(rutEmpresa);
    setRol(rol);
    setEmail(email);
  };


  const usuarioContextValue = {
    usuario,
    email,
    rut,
    rol,
    rutEmpresas,
    guardarParametros,
    refreshParameters
  };

  return (
    <UsuarioContext.Provider value={usuarioContextValue}>
      {children}
    </UsuarioContext.Provider>
  );

  
};
UsuarioProvider.propTypes = {
    children: PropTypes.node.isRequired
  };