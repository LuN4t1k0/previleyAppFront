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




function Empleado({ image, folio, rut }) {
  return (
    <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
      <ArgonBox mr={2}>
        <ArgonAvatar src={image} size="sm" variant="rounded" />
      </ArgonBox>
      <ArgonBox display="flex" flexDirection="column">
        <ArgonTypography variant="button" fontWeight="medium">
          {folio}
        </ArgonTypography>
        <ArgonTypography variant="caption" color="secondary">
          {rut}
        </ArgonTypography>
      </ArgonBox>
    </ArgonBox>
  );
}

function Function({ especialidad, tipoLicencia }) {
  return (
    <ArgonBox display="flex" flexDirection="column">
      <ArgonTypography variant="caption" fontWeight="medium" color="text">
        {tipoLicencia}
      </ArgonTypography>
      <ArgonTypography variant="caption" color="secondary">
        {especialidad}
      </ArgonTypography>
    </ArgonBox>
  );
}

function DeterminateColor(color) {
  if (color == "rechazada") {
    return "error";
  } else if (color == "aprobado") {
    return "success";
  } else if (color == "pendiente") {
    return "primary";
  } else if (color == "reducida") {
    return "warning";
  }
  return "primary";
  
}

async function createRows(datos) {
  let rows = [];
  datos.forEach((element) => {
    console.log("Antes del push de rows "+element)
    rows.push({      
      Empleado: <Empleado image={team2} folio={element.folio} rut={element.empleadoRut}  />,
      Especialidad: <Function especialidad={element.especialidad} tipoLicencia={element.tipoLicencia} />,
      Estado: (
          <ArgonBadge variant="gradient" badgeContent={element.estado} color={DeterminateColor(element.estado)} size="xs" container />
        ),
        "Fecha Inicio": (
          <ArgonTypography variant="caption" color="primary" fontWeight="medium">
            {element.fechaInicio}
          </ArgonTypography>
        ),
        "Fecha Termino": (
          <ArgonTypography variant="caption" color="primary" fontWeight="medium">
            {element.fechaTermino}
          </ArgonTypography>
        ),
        Institucion: (
          <ArgonTypography variant="caption" color="primary" fontWeight="medium">
            {element.institucion}
          </ArgonTypography>
        ),
      
    });
  });
  return rows;
}
    

const authorsTableData = async (datos) => {
  const allTableData = []
  const Columns = [
    { name: "Empleado", align: "left" },
    { name: "Especialidad", align: "left" },
    { name: "Estado", align: "center" },
    { name: "Fecha Inicio", align: "center" },
    { name: "Fecha Termino", align: "center" },
    { name: "Institucion", align: "center" },
  ]
  datos.map(async (item) => {
    console.log("item", item)
    allTableData.push({
      Columns,
      Rows: await createRows(item)
    })

  })
  console.log("allTableData", allTableData)
  return allTableData;
};


export default authorsTableData;