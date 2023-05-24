const usuarioReducer = (state, action) => {
  switch (action.type) {
    case 'GUARDAR_PARAMETROS':
      return {
        ...state,
        usuario: action.payload.usuario,
        email: action.payload.email,
        rut: action.payload.rut,
        rol: action.payload.rol,
      };
    default:
      return state;
  }
};

  
  export default usuarioReducer;