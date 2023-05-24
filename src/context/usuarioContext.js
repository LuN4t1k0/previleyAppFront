import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [email, setEmail] = useState('');
  const [rut, setRut] = useState('');
  const [rol, setRol] = useState('');

  const guardarParametros = (usuarioData, emailData, rutData, rolData) => {
    console.log("guardarParametros: " + usuarioData, emailData, rutData, rolData);
    setUsuario(usuarioData);
    setEmail(emailData);
    setRut(rutData);
    setRol(rolData);
    console.log(usuario, email, rut)

  };

  const usuarioContextValue = {
    usuario,
    email,
    rut,
    rol,
    guardarParametros
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