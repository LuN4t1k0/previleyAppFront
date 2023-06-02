/* eslint-disable no-unused-vars */
/**
=========================================================
* Argon Dashboard 2 MUI - v3.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-material-ui
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { CircularProgress, Icon, Grid, Tabs, Tab, Card } from "@mui/material";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Argon Dashboard 2 MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DetailedStatisticsCard from "examples/Cards/StatisticsCards/DetailedStatisticsCard";
import SalesTable from "examples/Tables/SalesTable";
import CategoriesList from "examples/Lists/CategoriesList";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";
import PieChart from "examples/Charts/PieChart";

// Argon Dashboard 2 MUI base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components
import Slider from "layouts/dashboard/components/Slider";

// Data
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";
import PieChartData from "layouts/dashboard/data/pieChartData";
import salesTableData from "layouts/dashboard/data/salesTableData";
import categoriesListData from "layouts/dashboard/data/categoriesListData";
import { UsuarioContext } from "context/usuarioContext";
import chartServices from "services/chart-services";
import userServices from "services/user-services";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <ArgonBox sx={{ p: 3 }}>
          <ArgonTypography>{children}</ArgonTypography>
        </ArgonBox>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function Default() {
  const { size } = typography;
  const [Loading, setLoading] = useState(true);
  const [charts, setCharts] = useState([]);
  const [pagex, setPagex] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [empresas, setEmpresas] = useState([]);
  const [rol, setRol] = useState("");
  //const { usuario, email, rut, rol, refreshParameters, rutEmpresas } = useContext(UsuarioContext);
  
  useEffect(() => {
    
    
    setLoading(true);
    
    setRol(sessionStorage.getItem("rol"));
    console.log("a", rol)
    const getEmpresas = async () => {
      try {
        let empr = sessionStorage.getItem("rutEmpresas");
        const data = await userServices.getEmpresasInfo(empr);
        console.log("entro a getEmpresas")
        console.log(data)
          setEmpresas(data);
        
      } catch (error) {
        console.log(error);
      }
    };

    const getCharts = async () => {
      try {
        console.log("entro a getCharts")
        let empr = sessionStorage.getItem("rutEmpresas");
        const charts = await chartServices.getAllCharts(empr);
        const pagexData = await chartServices.getCountPagosExceso(empr);
        console.log("todos LOS CHARTS ", charts)
        console.log("pagexData ", pagexData)
        setCharts(charts);
        setPagex(pagexData);
        /* setlicenciasData(charts[0]);
        setMoraData(charts[1]);
        setPagex(charts[2]); */
        
        
      } catch (error) {
        console.log(error);
      } finally {
        
        setLoading(false);
      }
      
  }
  
  
  getEmpresas();    
  
  getCharts();
  }, []);

  const handleChangeTab = (event, newValue) => {
    console.log(newValue);
    setActiveTab(newValue);
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      {Loading ? (
        <ArgonBox display="flex" justifyContent="center" alignItems="center" p={3}>
        <ArgonTypography variant="h6">Loading...</ArgonTypography>
        <CircularProgress color='secondary' />
      </ArgonBox>
        ) : (
          
    
        <ArgonBox py={3}>
            <Tabs value={activeTab} onChange={handleChangeTab}>
            {empresas.map((empresa, index) => (
              <Tab key={index} label={empresa.rut} />
            ))}
          </Tabs>
          {empresas.map((empresa, index) => (
              <TabPanel key={index} value={activeTab} index={index}>
                
                  
                  
                
                    <Grid container spacing={3} mb={3}>
                    
                    <Grid item xs={12} lg={4}>
                      
                      <PieChart
                          title="Licencias Medicas"
                          tooltip={true}
                          tooltipStyle={{
                            background: "white",
                            color: "black",
                            borderRadius: "4px",
                            border: "1px solid gray",
                            padding: "8px",
                          }}
                          chart={charts[index][0]}
                        
                        />
                      </Grid>
                      <Grid item xs={12} lg={4}>
                      
                      <PieChart
                          title="Moras"
                          tooltip={true}
                          tooltipStyle={{
                            background: "white",
                            color: "black",
                            borderRadius: "4px",
                            border: "1px solid gray",
                            padding: "8px",
                          }}
                          chart={charts[index][1]}
                        
                        />
                      </Grid>
                      <Grid item xs={12} lg={4}>
                      <Card style={{ borderRadius: "8px", padding: "10px" }}>
                        <ArgonTypography variant="h6" color="textPrimary" mb={3}> Pagos en Exceso </ArgonTypography>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <div
                            style={{
                              width: "20px",
                              height: "20px",
                              backgroundColor: "green",
                              marginRight: "10px",
                            }}
                          ></div>
                          <span>Total pagadas: {pagex[index].totalPagado}</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
                          <div
                            style={{
                              width: "20px",
                              height: "20px",
                              backgroundColor: "red",
                              marginRight: "10px",
                            }}
                          ></div>
                          <span>Total Pendientes: {pagex[index].totalPendiente}</span>
                        </div>
                        </Card>
                      </Grid>








                    </Grid>
                    </TabPanel>
          ))}
          
          
          
              </ArgonBox>
              
       
             
        
          
                  
        )}
        
      <Footer />
    </DashboardLayout>
  );
}

export default Default;
