/* eslint-disable react/prop-types */
// Argon Dashboard 2 MUI components
import React, { useState, useEffect } from 'react';
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonAvatar from "components/ArgonAvatar";
import ArgonBadge from "components/ArgonBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";



function Empleado({ image, nombre, rut }) {
  return (
    <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
      <ArgonBox mr={2}>
        <ArgonAvatar src={image} size="sm" variant="rounded" />
      </ArgonBox>
      <ArgonBox display="flex" flexDirection="column">
        <ArgonTypography variant="button" fontWeight="medium">
          {nombre}
        </ArgonTypography>
        <ArgonTypography variant="caption" color="secondary">
          {rut}
        </ArgonTypography>
      </ArgonBox>
    </ArgonBox>
  );
}

function Function({ empresa, rutEmpresa }) {
  return (
    <ArgonBox display="flex" flexDirection="column">
      <ArgonTypography variant="caption" fontWeight="medium" color="text">
        {empresa}
      </ArgonTypography>
      <ArgonTypography variant="caption" color="secondary">
        {rutEmpresa}
      </ArgonTypography>
    </ArgonBox>
  );
}

function DeterminateColor(color) {
  
  if (color == "pagado") {
    return "success";
  }
  return "primary";
  
}

async function createRows(datos) {
  let rows = [];
  datos.forEach((element) => {
    rows.push({      
      Empleado: <Empleado image={team2} nombre={element.nombreCompleto} rut={element.empleadoRut}  />,
      "Empresa": <Function empresa={element.entidad} rutEmpresa={element.empresaRut} />,
      "Monto Nominal": (
        <ArgonTypography variant="caption" color="primary" fontWeight="medium">
            {element.montoNominal}
        </ArgonTypography>
        ),
        "Monto": (
          <ArgonTypography variant="caption" color="primary" fontWeight="medium">
            {element.monto}
          </ArgonTypography>
        ),
        "Pagado": (
            <ArgonTypography variant="caption" color="primary" fontWeight="medium">
              {element.pagado}
            </ArgonTypography>
          ),
          "Recuperado": (
            <ArgonTypography variant="caption" color="primary" fontWeight="medium">
              {element.recuperado}
            </ArgonTypography>
          ),
        "Estado": (
            <ArgonBadge variant="gradient" badgeContent={element.estado} color={DeterminateColor(element.estado)} size="xs" container />
        )
        
       
    });
  });
  return rows;
}
    

const pagexTableData = async (datos) => {
    console.log("LLEGA ESTO ", datos)
    const allTableData = [];
    const Columns = [
      { name: "Empleado", align: "left" },
      { name: "Empresa", align: "left" },
      
      { name: "Monto", align: "center" },
      { name: "Pagado", align: "center" },
      { name: "Recuperado", align: "center" },
      { name: "Estado", align: "center" },
    ]
    datos.map(async (item) => {
      allTableData.push({
        Columns,
        Rows: await createRows(item)
      })
  
    })
    console.log("allTableData", allTableData)
    return allTableData;
};



export default pagexTableData;