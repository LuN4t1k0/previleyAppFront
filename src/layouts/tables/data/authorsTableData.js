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
    rows.push({      
      Empleado: <Empleado image={team2} folio={element.folio} rut={element.empleadoRut}  />,
      Especialidad: <Function especialidad={element.especialidad} tipoLicencia={element.tipoLicencia} />,
      Estado: (
          <ArgonBadge variant="gradient" badgeContent={element.estado} color={DeterminateColor(element.estado)} size="xs" container />
        ),
        FechaInicio: (
          <ArgonTypography variant="caption" color="primary" fontWeight="medium">
            {element.fechaInicio}
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
  return {
    Columns: [
      { name: "Empleado", align: "left" },
      { name: "Especialidad", align: "left" },
      { name: "Estado", align: "center" },
      { name: "FechaInicio", align: "center" },
      { name: "Institucion", align: "center" },
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


export default authorsTableData;