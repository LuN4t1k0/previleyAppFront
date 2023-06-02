import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const LogoutPage = () => {
  const [loggedOut, setLoggedOut] = useState(false);

  const handleLogout = () => {
    // Lógica de cierre de sesión
    // ...
    
    // Una vez que el usuario ha cerrado sesión, establece el estado de loggedOut en true
    
  };

  useEffect(() => {
    // Establece el título del documento
    sessionStorage.clear();
    document.title = 'Cerrar sesión';
    setLoggedOut(true);
    }, [loggedOut]);
  // Verifica si el usuario ha cerrado sesión y redirige al componente de inicio de sesión
  if (loggedOut) {
    return <Navigate to="/authentication/sign-in" />;
  }

  return (
    <div>     
      
    </div>
  );
};

export default LogoutPage;