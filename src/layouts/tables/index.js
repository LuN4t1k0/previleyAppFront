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
// @mui material components

import {InputLabel, Card, MenuItem, FormControl, Select, CircularProgress } from '@mui/material';
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
import licenciasServices from "services/licencias-services";

// Data
import authorsTableData from "./data/authorsTableData";
//import projectsTableData from "layouts/tables/data/projectsTableData";


function Tables() {
  //const { columns, rows } = authorsTableData;
 // const { columns: prCols, rows: prRows } = projectsTableData;
  //const [datos, setDatos] = useState([]);
  const [rows, setRows] = useState([]);	
  const [columns, setColumns] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleDownload = async () => {
    try {
      const data = licenciasServices.downloadExcel();
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
          const data = await licenciasServices.getAllLicencias();
          console.log("data ", data);        
          const {Columns, Rows} = await authorsTableData(data);
          console.log("columns1 ", Columns);
          setColumns(Columns);
          setRows(Rows);
        } catch (error) {
          console.log(error);
        } finally {
          console.log("rows ", rows);
          setLoading(false);
        }
        
    }
    getTable(); 
    
    
  }, []);
  
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>
        <ArgonBox mb={3}>
          <Card>
          <ArgonBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <ArgonTypography variant="h6">Licencias Medicas</ArgonTypography>
              
          </ArgonBox>
          <ArgonBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
          
            <ArgonBox component="form" /* onSubmit={handleSubmit(onSubmit)} */>
            <div>
              
                <FormControl sx={{ m: 1,minWidth: 120}}>
                
                  <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      value={age}
                      onChange={handleChange}
                      autoWidth
                      label="Age"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Twenty</MenuItem>
                      <MenuItem value={21}>Twenty one</MenuItem>
                      <MenuItem value={22}>Twenty one and a half</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl sx={{ m: 1,minWidth: 120}}>
                  <InputLabel id="demo-simple-select-autowidth-label">DOS</InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      value={age}
                      onChange={handleChange}
                      autoWidth
                      label="Age"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Twenty</MenuItem>
                      <MenuItem value={21}>Twenty one</MenuItem>
                      <MenuItem value={22}>Twenty one and a half</MenuItem>
                    </Select>            
                
                  
                </FormControl>
                <FormControl sx={{ m: 1,minWidth: 120}}>
                  <InputLabel id="demo-simple-select-autowidth-label">DOS</InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      value={age}
                      onChange={handleChange}
                      autoWidth
                      label="Age"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Twenty</MenuItem>
                      <MenuItem value={21}>Twenty one</MenuItem>
                      <MenuItem value={22}>Twenty one and a half</MenuItem>
                    </Select>            
                
                  
                </FormControl>
                <FormControl sx={{ m: 1,minWidth: 120}}>
                  <InputLabel id="demo-simple-select-autowidth-label">DOS</InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      value={age}
                      onChange={handleChange}
                      autoWidth
                      label="Age"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Twenty</MenuItem>
                      <MenuItem value={21}>Twenty one</MenuItem>
                      <MenuItem value={22}>Twenty one and a half</MenuItem>
                    </Select>            
                
                  
                </FormControl>
                <FormControl sx={{ m: 1,minWidth: 120}}>
                  <InputLabel id="demo-simple-select-autowidth-label">DOS</InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      value={age}
                      onChange={handleChange}
                      autoWidth
                      label="Age"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Twenty</MenuItem>
                      <MenuItem value={21}>Twenty one</MenuItem>
                      <MenuItem value={22}>Twenty one and a half</MenuItem>
                    </Select>            
                
                  
                </FormControl>
                <ArgonButton type="submit" color="secondary" size="medium" sx={{ m: 1,minWidth: 120}}>
                  Filtrar
                </ArgonButton>
              </div>
              
            </ArgonBox>
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
              {Loading ? (
                <ArgonBox display="flex" justifyContent="center" alignItems="center" p={3}>
                  <ArgonTypography variant="h6">Loading...</ArgonTypography>
                  <CircularProgress color='secondary' />
                </ArgonBox>
                
              ) : (
                <Table columns={columns} rows={rows} />
                
              )}
              <ArgonButton  color="secondary" size="medium" sx={{ m: 1,minWidth: 120}} onClick={handleDownload}>
                  Descargar Excel
              </ArgonButton>
            </ArgonBox>

          </Card>
        </ArgonBox>
        
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}


export default Tables;
