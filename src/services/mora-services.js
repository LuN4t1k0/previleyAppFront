import jwtAuthAxios from "./auth/jwtAuth";



const morasServices = {};

morasServices.getAllMoras = async () => {
    const {data} = await jwtAuthAxios.get("/moraPresunta");
    //console.log(data);
    return data;
};
morasServices.downloadExcel = async () => {
    // Realiza una solicitud GET al endpoint del servidor
    
    const response =  await jwtAuthAxios.get("/moraPresunta/export/11111111-1",{headers: {
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