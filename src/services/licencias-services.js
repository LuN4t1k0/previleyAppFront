import jwtAuthAxios from "./auth/jwtAuth";



const licenciasServices = {};

licenciasServices.getAllLicencias = async () => {
    const {data} = await jwtAuthAxios.get("/licenciasMedicas");
    //console.log(data);
    return data;
};
licenciasServices.downloadExcel = async () => {
    // Realiza una solicitud GET al endpoint del servidor
    
    const response =  await jwtAuthAxios.get("/licenciasMedicas/export/11111111-1",{headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      },});
    
    console.log(response)
    if (!response){
        return "error";
    }
    return response.data;
  
};



export default licenciasServices;