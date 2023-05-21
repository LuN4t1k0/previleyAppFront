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
  
  if (color == "Resuelto") {
    return "success";
  
  } else if (color == "Cerrado") {
    return "warning";
  }
  return "primary";
  
}

async function createRows(datos) {
  let rows = [];
  datos.forEach((element) => {
    rows.push({      
      Empleado: <Empleado image={team2} nombre={element.nombreCompleto} rut={element.empleadoRut}  />,
      'Rut-Empresa': <Function empresa={element.entidad} rutEmpresa={element.empresaRut} />,
      "Monto Nominal": (
        <ArgonTypography variant="caption" color="primary" fontWeight="medium">
            {element.montoNominal}
        </ArgonTypography>
        ),
        "Monto Actualizado": (
          <ArgonTypography variant="caption" color="primary" fontWeight="medium">
            {element.montoActualizado}
          </ArgonTypography>
        ),
        "Estado Deuda": (
            <ArgonBadge variant="gradient" badgeContent={element.estadoDeuda} color={DeterminateColor(element.estadoDeuda)} size="xs" container />
        ),
        "Estado Avance": (
            <ArgonBadge variant="gradient" badgeContent={element.estadoAvance} color={DeterminateColor(element.estadoAvance)} size="xs" container />
           
          ),
        Abogado: (
        <ArgonTypography variant="caption" color="primary" fontWeight="medium">
            {element.abogadoAsignado}
        </ArgonTypography>
        ),
    });
  });
  return rows;
}
    

const morasTableData = async (datos) => {
  return {
    Columns: [
      { name: "Empleado", align: "left" },
      { name: "Rut-Empresa", align: "left" },
      { name: "Monto Nominal", align: "center" },
      { name: "Monto Actualizado", align: "center" },
      { name: "Estado Deuda", align: "center" },
      { name: "Estado Avance", align: "center" },
      { name: "Abogado", align: "center" },
    ],
    Rows: await createRows(datos)

    /* rows: [
      {
        author: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        function: <Function job="Manager" org="Organization" />,
        status: (
          <ArgonBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
        ),
        employed: (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
            23/04/18
          </ArgonTypography>
        ),
        action: (
          <ArgonTypography
            component="a"
            href="#"
            variant="caption"
            color="secondary"
            fontWeight="medium"
          >
            Edit
          </ArgonTypography>
        ),
      },
      {
        author: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
        function: <Function job="Programator" org="Developer" />,
        status: (
          <ArgonBadge variant="gradient" badgeContent="offline" color="secondary" size="xs" container />
        ),
        employed: (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
            11/01/19
          </ArgonTypography>
        ),
        action: (
          <ArgonTypography
            component="a"
            href="#"
            variant="caption"
            color="secondary"
            fontWeight="medium"
          >
            Edit
          </ArgonTypography>
        ),
      },
      {
        author: <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />,
        function: <Function job="Executive" org="Projects" />,
        status: (
          <ArgonBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
        ),
        employed: (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
            19/09/17
          </ArgonTypography>
        ),
        action: (
          <ArgonTypography
            component="a"
            href="#"
            variant="caption"
            color="secondary"
            fontWeight="medium"
          >
            Edit
          </ArgonTypography>
        ),
      },
      {
        author: <Author image={team3} name="Michael Levi" email="michael@creative-tim.com" />,
        function: <Function job="Programator" org="Developer" />,
        status: (
          <ArgonBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
        ),
        employed: (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
            24/12/08
          </ArgonTypography>
        ),
        action: (
          <ArgonTypography
            component="a"
            href="#"
            variant="caption"
            color="secondary"
            fontWeight="medium"
          >
            Edit
          </ArgonTypography>
        ),
      },
      {
        author: <Author image={team2} name="Richard Gran" email="richard@creative-tim.com" />,
        function: <Function job="Manager" org="Executive" />,
        status: (
          <ArgonBadge variant="gradient" badgeContent="offline" color="secondary" size="xs" container />
        ),
        employed: (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
            04/10/21
          </ArgonTypography>
        ),
        action: (
          <ArgonTypography
            component="a"
            href="#"
            variant="caption"
            color="secondary"
            fontWeight="medium"
          >
            Edit
          </ArgonTypography>
        ),
      },
      {
        author: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
        function: <Function job="Programtor" org="Developer" />,
        status: (
          <ArgonBadge variant="gradient" badgeContent="offline" color="secondary" size="xs" container />
        ),
        employed: (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
            14/09/20
          </ArgonTypography>
        ),
        action: (
          <ArgonTypography
            component="a"
            href="#"
            variant="caption"
            color="secondary"
            fontWeight="medium"
          >
            Edit
          </ArgonTypography>
        ),
      },
    ], */
  };
};


export default morasTableData;