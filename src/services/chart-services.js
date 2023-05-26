import jwtAuthAxios from "./auth/jwtAuth";



const initValue = {
    labels: [],
    datasets: [
      {
        //label: '# of Votes',
        data: [],
        backgroundColor: [
          
        ],
        borderColor: [
          
        ],
        borderWidth: 1,
        
      },
    ],
  };

  const TestChartData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

function formatChartData(data) {
    const charts = []; 
    
    
    
    data.map((element) => {
        
        const PieChartData = JSON.parse(JSON.stringify(initValue));
        
        if( Object.keys(element) == "licencias" ) {
            console.log("licencias" , element.licencias)
            
            if ( element.licencias.aprobada != 0 && element.licencias.aprobada != null ) {
                PieChartData.labels.push("Aprobadas");
                PieChartData.datasets[0].data.push(element.licencias.aprobada);
                PieChartData.datasets[0].backgroundColor.push("green");
                PieChartData.datasets[0].borderColor.push("green");
            }
            if ( element.licencias.rechazada != 0 && element.licencias.rechazada != null ) {
                PieChartData.labels.push("Rechazadas");
                PieChartData.datasets[0].data.push(element.licencias.rechazada);
                PieChartData.datasets[0].backgroundColor.push("red");
                PieChartData.datasets[0].borderColor.push("red");
            }
            if ( element.licencias.pendiente != 0 && element.licencias.pendiente != null ) {
                PieChartData.labels.push("Pendientes");
                PieChartData.datasets[0].data.push(element.licencias.pendiente);
                PieChartData.datasets[0].backgroundColor.push("primary");
                PieChartData.datasets[0].borderColor.push("primary");
            }
            if ( element.licencias.reducida != 0 && element.licencias.reducida != null ) {
                PieChartData.labels.push("Reducidas");
                PieChartData.datasets[0].data.push(element.licencias.reducida);
                PieChartData.datasets[0].backgroundColor.push("yellow");
                PieChartData.datasets[0].borderColor.push("yellow");
            }

            console.log("PIECHART ANTES DE SET ", PieChartData)
            charts.push(PieChartData);            

        }   
        else if ( Object.keys(element) == "moraPresunta" ) {
            console.log("moraPresunta")
            if ( element.moraPresunta.pendiente != null && element.moraPresunta.pendiente > 0 ) {
                PieChartData.labels.push("Pendiente");
                PieChartData.datasets[0].data.push(element.moraPresunta.PENDIENTE);
                PieChartData.datasets[0].backgroundColor.push("yellow");
                PieChartData.datasets[0].borderColor.push("yellow");
            }
            if ( element.moraPresunta.tramite != null && element.moraPresunta.tramite > 0 ) {
                PieChartData.labels.push("En Tramite");
                PieChartData.datasets[0].data.push(element.moraPresunta.tramite);
                PieChartData.datasets[0].backgroundColor.push("primary");
                PieChartData.datasets[0].borderColor.push("primary");
            }
            if ( element.moraPresunta.aclarada != null && element.moraPresunta.aclarada > 0 ) {
                PieChartData.labels.push("Aclarada");
                PieChartData.datasets[0].data.push(element.moraPresunta.aclarada);
                PieChartData.datasets[0].backgroundColor.push("light");
                PieChartData.datasets[0].borderColor.push("light");
            }
            if ( element.moraPresunta.resuelto != null && element.moraPresunta.resuelto > 0 ) {
                PieChartData.labels.push("Resuelto");
                PieChartData.datasets[0].data.push(element.RESUELTO);
                PieChartData.datasets[0].backgroundColor.push("green");
                PieChartData.datasets[0].borderColor.push("green");
            }
            if (  element.moraPresunta.cerrado != null &&  element.moraPresunta.cerrado > 0 ) {
                PieChartData.labels.push("Cerrado");
                PieChartData.datasets[0].data.push( element.moraPresunta.CERRADO);
                PieChartData.datasets[0].backgroundColor.push("grey");
                PieChartData.datasets[0].borderColor.push("grey");
            }
            if (  element.moraPresunta.aceptada != null &&  element.moraPresunta.aceptada > 0 ) {
                PieChartData.labels.push("Aceptada");
                PieChartData.datasets[0].data.push( element.moraPresunta.aceptada);
                PieChartData.datasets[0].backgroundColor.push("aceptada");
                PieChartData.datasets[0].borderColor.push("aceptada");
            }

            console.log("PIECHART ANTES DE SET ", PieChartData)
            charts.push(PieChartData);
        }
        else if ( Object.keys(element) == "pagex" ) {
            console.log("pagex")
            if (  element.pagex.pendiente != null && element.pagex.pendiente > 0 ) {
                PieChartData.labels.push("Pendiente");
                PieChartData.datasets[0].data.push(element.pagex.PENDIENTE);
                PieChartData.datasets[0].backgroundColor.push("yellow");
                PieChartData.datasets[0].borderColor.push("yellow");
            }
            if ( element.pagex.pagada != null && element.pagex.pagada > 0 ) {
                PieChartData.labels.push("Pagada");
                PieChartData.datasets[0].data.push(element.pagex.PAGADA);
                PieChartData.datasets[0].backgroundColor.push("green");
                PieChartData.datasets[0].borderColor.push("green");
            }

            console.log("PIECHART ANTES DE SET ", PieChartData)
            charts.push(PieChartData);
        } else {
            charts.push(TestChartData);
        }

    });
    return charts;
}

const chartServices = {};

chartServices.getCountLicencias = async () => {
    const {data} = await jwtAuthAxios.get("/licenciasMedicas/total/11111111-1");
    //console.log(data);
    return data;
};

chartServices.getCountMoras = async () => {
    const {data} = await jwtAuthAxios.get("/moraPresunta/total/11111111-1");
    //console.log(data);
    return data;
};

chartServices.getCountPagosExceso = async () => {
    const {data} = await jwtAuthAxios.get("/pagex/total-pagado/11111111-1");
    //console.log(data);
    return data;
};

chartServices.getAllCharts = async (Empresas) => {
    Empresas = Empresas.split(",")
    
    const chartsAll = [];
    for (const empresa of Empresas) {
        const charts = [];
        let response = await jwtAuthAxios.get("/licenciasMedicas/total/" + empresa);
        charts.push({licencias: response.data});
        response = await jwtAuthAxios.get("/moraPresunta/total/" + empresa);
        charts.push({moraPresunta: response.data});
        response = await jwtAuthAxios.get("/pagex/total-pagado/" + empresa);
        charts.push({pagex: response.data});
        console.log("ALOOOO ", charts)
    
    

    

        const formatedCharts = formatChartData(charts);
        chartsAll.push(formatedCharts);
    }
    //console.log("charts despues de funcion", formatedCharts)
    return chartsAll;
};


export default chartServices;