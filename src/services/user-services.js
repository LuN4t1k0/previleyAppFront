import jwtAuthAxios from "./auth/jwtAuth";



const userServices = {};

userServices.getEmpresasInfo = async (empresasData) => {
    empresasData = empresasData.split(",")
    const empresas = [];
    for (let i = 0; i < empresasData.length; i++) {
        console.log("ESTAMOS EN LA EMPRESA", empresasData[i])
        const {data} = await jwtAuthAxios.get("/empresas/"+empresasData[i]);
        empresas.push({nombre : data.nombre, rut: empresasData[i]});
    }
    //console.log(data);
    return empresas;
};

export default userServices;