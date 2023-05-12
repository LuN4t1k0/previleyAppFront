import jwtAuthAxios from "./auth/jwtAuth";


const licenciasServices = {};

licenciasServices.getAllLicencias = async () => {
    const {data} = await jwtAuthAxios.get("/licenciasMedicas");
    //console.log(data);
    return data;
};



export default licenciasServices;