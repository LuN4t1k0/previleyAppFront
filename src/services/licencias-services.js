import jwtAuthAxios from "./auth/jwtAuth";



const licenciasServices = {};

licenciasServices.getAllLicencias = async (Empresas) => {
    Empresas = Empresas.split(",")
    
    const licenciasAll = [];
    for (const empresa of Empresas) {
        
        let response = await jwtAuthAxios.get("/licenciasMedicas/?empresaRut=" + empresa);        
        licenciasAll.push(response.data);     
    
    }
    return licenciasAll;
};

licenciasServices.getEstados = async () => {
    let {data} = await jwtAuthAxios.get("/enum/estados-licencia");
    return Object.values(data);
};

licenciasServices.filterByEstado = async (estado, empresa) => {
    console.log("AXIOS", "/licenciasMedicas?empresaRut=" + empresa + "&estado=" + estado)
    let response = await jwtAuthAxios.get("/licenciasMedicas?empresaRut=" + empresa + "&estado=" + estado);      
    if (response.status == 400){
        response = await jwtAuthAxios.get("/licenciasMedicas?empresaRut=" + empresa);
    }
    return response;
};

licenciasServices.downloadExcel = async (empresa) => {
    // Realiza una solicitud GET al endpoint del servidor
    
    const response =  await jwtAuthAxios.get("/licenciasMedicas/export/" + empresa ,{headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      },
      responseType: 'blob'});
    
    console.log(response)
    if (!response){
        return "error";
    }
    return response.data;
  
};




export default licenciasServices;