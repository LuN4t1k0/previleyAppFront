import { char } from "stylis";
import jwtAuthAxios from "./auth/jwtAuth";
import { Pie } from "react-chartjs-2";

function formatChartData(data) {
    const PieChartData = {
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
    
    const labels = [];
    const values = [];
    const backgroundColors = [];
    const borderColors = [];
    data.map((element) => {
        if( Object.keys(element)[0] == "licencias" ) {
            if ( element.aprobada != 0 && element.aprobada != null ) {
                labels.push("Aprobadas");
                values.push(element.aprobada);
                backgroundColors.push("green");
                borderColors.push("green");
            }
            if ( element.rechazada != 0 && element.rechazada != null ) {
                labels.push("Rechazadas");
                values.push(element.rechazada);
                backgroundColors.push("red");
                borderColors.push("red");
            }
            if ( element.pendiente != 0 && element.pendiente != null ) {
                labels.push("Pendientes");
                values.push(element.pendiente);
                backgroundColors.push("primary");
                borderColors.push("primary");
            }
            if ( element.reducida != 0 && element.reducida != null ) {
                labels.push("Reducidas");
                values.push(element.reducida);
                backgroundColors.push("yellow");
                borderColors.push("yellow");
            }

            PieChartData.labels = labels;
            PieChartData.datasets[0].data = values;
            PieChartData.datasets[0].backgroundColor = backgroundColors;
            PieChartData.datasets[0].borderColor = borderColors;
        } else if ( Object.keys(element)[0] == "moraPresunta" ) {
            if ( element.moraPresunta != 0 && element.moraPresunta != null ) {
                labels.push("Mora Presunta");
                values.push(element.moraPresunta);
                backgroundColors.push("red");
                borderColors.push("red");
            }
            if ( element.moraReal != 0 && element.moraReal != null ) {
                labels.push("Mora Real");
                values.push(element.moraReal);
                backgroundColors.push("yellow");
                borderColors.push("yellow");
            }
        } else if ( Object.keys(element)[0] == "pagosExceso" ) {
                
        }   
    });
    return { labels, values };
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

chartServices.getAllCharts = async () => {
    const charts = [];
    let response = await jwtAuthAxios.get("/licenciasMedicas/total/11111111-1");
    charts.push({licencias: response.data});
    response = await jwtAuthAxios.get("/moraPresunta/total/11111111-1");
    charts.push({moraPresunta: response.data});
    response = await jwtAuthAxios.get("/pagex/total-pagado/11111111-1");
    charts.push({pagex: response.data});
    return charts;
};


export default chartServices;