import jwtAuthAxios from "./auth/jwtAuth";



const morasServices = {};

morasServices.getAllMoras = async (Empresas) => {
    Empresas = Empresas.split(",")
    
    const morasAll = [];
    for (const empresa of Empresas) {
        
        let response = await jwtAuthAxios.get("/moraPresunta?empresaRut=" + empresa);        
        morasAll.push(response.data);     
    
    }
    
  
    return morasAll;
};

morasServices.getEstados = async () => {
    let {data} = await jwtAuthAxios.get("/enum/estados-mora");
    return Object.values(data);
};
morasServices.filterByEstado = async (estado, empresa) => {
    console.log("AXIOS", "/pagex?empresaRut=" + empresa + "&estado=" + estado)

    let response = await jwtAuthAxios.get("/moraPresunta?empresaRut=" + empresa + "&estadoDeuda=" + estado);      
    if (response.status == 400){
        response = await jwtAuthAxios.get("/moraPresunta?empresaRut=" + empresa);
    }
    return response;
};
morasServices.downloadExcel = async (empresa) => {
    // Realiza una solicitud GET al endpoint del servidor
    console.log("empresa", empresa)
    const response =  await jwtAuthAxios.get("/moraPresunta/export/" + empresa,{headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      },
      responseType: 'blob'});
      
   
    console.log(response)
    if (!response){
        return "error";
    }
    return response.data;
  
};


export default morasServices;