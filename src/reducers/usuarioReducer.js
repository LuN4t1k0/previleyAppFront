const usuarioReducer = (state, action) => {
    switch (action.type) {
      case 'GUARDAR_USUARIO':
        return action.payload;
      case 'BORRAR_USUARIO':
        return null;
      default:
        return state;
    }
  };
  
  export default usuarioReducer;