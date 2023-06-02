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
import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
// @mui material components

import {InputLabel, Card, MenuItem, FormControl, Select, CircularProgress, Tabs, Tab, TablePagination } from '@mui/material';
import { saveAs } from 'file-saver';
// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

// Argon Dashboard 2 MUI examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";
import pagexServices from 'services/pagex-services';
import userServices from "services/user-services";

// Data

import pagexTableData from './data/pagexTableData';
//import projectsTableData from "layouts/tables/data/projectsTableData";

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
function Tables() {
  
  //const { columns, rows } = authorsTableData;
 // const { columns: prCols, rows: prRows } = projectsTableData;
  //const [datos, setDatos] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  //const [rows, setRows] = useState([]);	
  const [licenciasData, setlicenciasData] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [estadoSelect, setEstadoSelect] = React.useState('');
  const [empresas, setEmpresas] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [totalPages, setTotalPages] = useState(0);
  const [paginatedLicenciasData, setPaginatedLicenciasData] = useState([]);
  const [estadosPagex, setEstadosPagex] = useState([]);

  const handleSubmit = async (event) => {
    try {    
      event.preventDefault();
      setLoading(true);
      const {data} = await pagexServices.filterByEstado(estadoSelect, empresas[activeTab].rut);
      console.log("DATA FILTRADA", data)
      const dataTable = await pagexTableData([data]); 
      console.log("dataTable",dataTable)
      console.log("licenseData-activeTab",licenciasData[activeTab])
      
      setlicenciasData((prevData) => {
        const updatedData = [...prevData]; // Crea una copia del array de datos
  
        // Verifica si el índice es válido
        if (activeTab >= 0 && activeTab < updatedData.length) {
          // Actualiza el valor del elemento en el índice dado
          updatedData[activeTab] = {
            ...updatedData[activeTab],
            Rows: dataTable[0].Rows,
          };
        }
        const paginatedData = dataTable[activeTab].Rows.slice(0, rowsPerPage);
        setPaginatedLicenciasData(paginatedData);
        setPage(0);
        
        const filteredRowsCount = dataTable[activeTab].Rows.length;
        setTotalPages(Math.ceil(filteredRowsCount / rowsPerPage));
        
  
        return updatedData; // Retorna la data actualizada
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      console.log("licenciasData",licenciasData)
    }
  };


  const handleChangePage = (event, newPage) => {
    // Verificar si newPage está dentro del rango válido
    if (newPage >= 0 && newPage < totalPages) {
      setPage(newPage);
    }
  };
  

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  const handleChange = (event) => {
    setEstadoSelect(event.target.value);
  };

  const handleDownload = async () => {
    try {
      const data = await licenciasServices.downloadExcel(empresas[activeTab].rut);
      const blob = new Blob([data], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
      saveAs(blob, 'archivo.xlsx');
    } catch (error) {
      console.log(error);
    }

  };

  useEffect(() => {
      setLoading(true);
      const getTable = async () => {
        try {
          let empr = sessionStorage.getItem("rutEmpresas");
          const data1 = await userServices.getEmpresasInfo(empr);
          console.log("entro a getEmpresas")
          console.log(data1)
          setEmpresas(data1);
          
          console.log("empresas ", empr);
          const data = await pagexServices.getAllPagex(empr);
          console.log("data ", data);        
          const dataTable = await pagexTableData(data);
          console.log("dataTable ", dataTable);
          setlicenciasData(dataTable);

          setTotalPages(Math.ceil(dataTable[activeTab].Rows.length / rowsPerPage)); // Calcula totalPages después de actualizar los datos
          const startIndex = page * rowsPerPage;
          const endIndex = startIndex + rowsPerPage;
          const paginatedData = dataTable[activeTab].Rows.slice(startIndex, endIndex);
          setPaginatedLicenciasData(paginatedData);

          const estados = await pagexServices.getEstados();
          console.log("estados ", estados);
          setEstadosPagex(estados);
          
        } catch (error) {
          console.log(error);
        } finally {
          
          setLoading(false);
        }
        
    }
    getTable(); 
    
    
  },[activeTab, page, rowsPerPage]);
  const handleChangeTab = (event, newValue) => {
    setActiveTab(newValue);
    setTotalPages(Math.ceil(licenciasData[newValue].Rows.length / rowsPerPage));
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
      <ArgonBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <ArgonTypography variant="h6">Pagos en Exceso</ArgonTypography>
              
          </ArgonBox>
      <Tabs value={activeTab} onChange={handleChangeTab}>
            {empresas.map((empresa, index) => (
              <Tab key={index} label={empresa.rut} />
            ))}
          </Tabs>
          {empresas.map((empresa, index) => (
              <TabPanel key={index} value={activeTab} index={index}>
                  <ArgonBox mb={3}>
          <Card>
          <ArgonTypography variant="h7">&nbsp;&nbsp; Empresa: {empresa.nombre}</ArgonTypography>
          <ArgonBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
          
            <ArgonBox component="form" onSubmit={handleSubmit}>
            <div>
              
                <FormControl sx={{ m: 1,minWidth: 200}}>
                
                  <InputLabel id="demo-simple-select-autowidth-label">Estado Pagex</InputLabel>
                    <Select
                      
                      value={estadoSelect}
                      onChange={handleChange}
                      autoWidth
                      label="Estado Pagex"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {estadosPagex.map((estado, index) => (
                        <MenuItem key={index} value={estado}>{estado}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                            
                
                  
             
                <ArgonButton type="submit" color="secondary" size="medium" sx={{ m: 1,minWidth: 120}}>
                  Filtrar
                </ArgonButton>
                
                  
                

              </div>
              
            </ArgonBox>
   <ArgonButton 
 color="green" 
 variant="contained"
 size="medium" 
 sx={{ m: 1,
       minWidth: 120,
       position: 'absolute',
       

       right: 0,}}
 onClick={handleDownload}>
   Descargar Excel
 </ArgonButton>
         </ArgonBox>
            
            <ArgonBox
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
              }}
            >
              
              <Table columns={licenciasData[activeTab].Columns} rows={paginatedLicenciasData} />
              <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  component="div"
                  count={licenciasData[index].Rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  SelectProps={{
                    style: { minWidth: '80px', maxWidth: '80px' } // Ajusta el tamaño del Select
                  }}
                />
              
              
            </ArgonBox>

          </Card>
        </ArgonBox>
              </TabPanel>
            ))}
        
        
      </ArgonBox>
      )}
      <Footer />
    </DashboardLayout>
  );
}


export default Tables;
