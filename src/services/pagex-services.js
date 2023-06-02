import jwtAuthAxios from "./auth/jwtAuth";

const pagexServices = {};

pagexServices.getAllPagex = async (Empresas) => {
    Empresas = Empresas.split(",")
    
    const allData = [];
    for (const empresa of Empresas) {
        
        let response = await jwtAuthAxios.get("/pagex/?empresaRut=" + empresa);        
        allData.push(response.data);     
    
    }
    return allData;
};

pagexServices.getEstados = async () => {
    let {data} = await jwtAuthAxios.get("/enum/estados-pagex");
    return Object.values(data);
};
pagexServices.filterByEstado = async (estado, empresa) => {
    console.log("AXIOS", "/pagex?empresaRut=" + empresa + "&estado=" + estado)
    let response = await jwtAuthAxios.get("/pagex?empresaRut=" + empresa + "&estado=" + estado);      
    if (response.status == 400){
        response = await jwtAuthAxios.get("/pagex?empresaRut=" + empresa);
    }
    return response;
};
pagexServices.downloadExcel = async (empresa) => {
    // Realiza una solicitud GET al endpoint del servidor
    
    const response =  await jwtAuthAxios.get("/pagex/export/"+ empresa,{headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      },
      responseType: 'blob'});
      
   
    console.log(response)
    if (!response){
        return "error";
    }
    return response.data;
  
};


export default pagexServices;