const tipoLicenciaMedica = {
    TIPO1: "enfermedad o accidente común",
    TIPO2: "medicina preventiva",
    TIPO3: "pre y postnatal",
    TIPO4: "enfermedad grave del niño menor del año",
    TIPO5: "accidente del trabajo o del trayecto",
    TIPO6: "enfermedad profesional",
    TIPO6: "patologías del embarazo",
  };
  
  const tipoDeReposo = {
    PARCIAL: "parcial",
    TOTAL: "total",
  };
  
  const BancosChile = {
    BANCO_ESTADO: 'Banco Estado',
    BANCO_CHILE: 'Banco de Chile',
    BCI: 'Banco BCI',
    SANTANDER: 'Banco Santander',
    ITAU: 'Banco Itaú',
    SCOTIABANK: 'Scotiabank',
    BBVA: 'BBVA',
    CORPBANCA: 'CorpBanca',
    HSBC: 'HSBC',
    SECURITY: 'Banco Security',
    CONDELL: 'Banco Condell',
    RIPLEY: 'Banco Ripley',
    FALABELLA: 'Banco Falabella',
    RABOBANK: 'Rabobank',
    BTG_PACTUAL: 'BTG Pactual',
    CREDITO_E_INVERSIONES: 'Banco Credito e Inversiones',
    BT: 'Banco BT',
    INTERNATIONAL: 'Banco Internacional',
    SECURITY: 'Banco Security',
    RABOBANK: 'Rabobank',
    RIPLEY: 'Banco Ripley',
    FALABELLA: 'Banco Falabella',
    ITAU_CORPBANCA: 'Banco Itaú CorpBanca',
    CITIBANK: 'Citibank',
    PENTA: 'Banco Penta',
    CATHAY: 'Banco Cathay',
    PRINCIPAL: 'Banco Principal',
    PARIS: 'Banco Paris',
    ESTADO_DE_CHILE: 'Banco del Estado de Chile',
    COOPERATIVO: 'Banco Cooperativo',
    BICE: 'Banco BICE',
    BCI_NUEVO_MUNDO: 'Banco BCI Nuevo Mundo',
    BANCO_FALABELLA: 'Banco Falabella',
    BBVA_CHILE: 'BBVA Chile',
    BANCO_SCOTIABANK_CHILE: 'Banco Scotiabank Chile',
    ITAU_CORPBANCA_CHILE: 'Banco Itaú CorpBanca Chile',
    SANTANDER_CHILE: 'Banco Santander Chile',
    HSBC_BANK_CHILE: 'HSBC Bank Chile',
    RIPLEY_CHILE: 'Banco Ripley Chile',
    BANCO_ESTADO_CHILE: 'Banco Estado Chile',
    SECURITY_CHILE: 'Banco Security Chile',
  };
  
  const rolUsuario = {
    ADMIN: "admin",
    PREVILEY: "previley",
    EMPRESA: "empresa",
    EMPLEADO: "empleado",
  };
  
  const estadoPagex = {
    PENDIENTE: "pendiente",
    PAGADA: "pagada",
  };
  
  const EstadosContratoEmpresa = {
    ACTIVO: 'Activo',
    SUSPENDIDO: 'Suspendido',
    TERMINADO: 'Terminado',
    PENDIENTE: 'Pendiente',
    CANCELADO: 'Cancelado',
    RENOVADO: 'Renovado',
  };
  
  const estadoLicenciaMedica = () => {
    return [{
    PENDIENTE: "pendiente",
    APROBADA: "aprobada",
    REDUCIDA: "reducida",
    RECHAZADA: "rechazada"
    }];
  };
  
  const tipoInstitucionPrevisional = {
    AFP: "AFP",
    CAJA_COMPENSACION: "Caja de Compensación",
    ISAPRE: "Isapre",
    OTRO: "Otro",
  };
  
  const institucionPrevisional = {
    BANMEDICA: "banmedica",
    COLMENA: "colmena",
    CONSALUD: "consalud",
    CRUZBLANCA: "cruzblanca",
    MASVIDA: "masvida",
    VIDATRES: "vidatres",
    FONASA: "fonasa",
  };
  
  const EntidadSaludEnum = {
    FONASA: 'FONASA',
    ISAPRE: 'ISAPRE',
    BANMEDICA: 'banmedica',
    VIDA_TRES: 'Vida Tres',
    COLMENA: 'Colmena',
    MAS_VIDA: 'MasVida',
    CRUZ_BLANCA: 'Cruz Blanca',
    CONSALUD: 'Consalud',
    NUEVA_MAS_VIDA: 'Nueva MasVida',
    CHUQUICAMATA: 'Chuquicamata',
    SAN_LORENZO: 'San Lorenzo',
    RIOS: 'Ríos',
    OTRO: 'Otro',
  };
  
  const AFPEnum = {
    PROVIDA: 'Provida',
    CAPITAL: 'Capital',
    PLANVITAL: 'PlanVital',
    MODELO: 'Modelo',
    HABITAT: 'Habitat',
    UNO: 'UNO',
  };
  
  const EstadoAvanceMoraPresuntaEnum = {
    PENDIENTE: 'Pendiente',
    EN_PROCESO: 'En Proceso',
    RESUELTO: 'Resuelto',
    CERRADO: 'Cerrado',
  };
  
  
  const especialistasMedicos = {
    MEDICO_GENERAL_DE_ZONA: "Médico General de Zona",
    MEDICO_GENERAL_DE_ATENCION_PRIMARIA: "Médico General de Atención Primaria",
    MEDICO_FAMILIAR: "Médico Familiar",
    MEDICO_INTERNISTA: "Médico Internista",
    MEDICO_PEDIATRA: "Médico Pediatra",
    MEDICO_GINECOLOGO: "Médico Ginecólogo",
    MEDICO_CIRUJANO: "Médico Cirujano",
    MEDICO_TRAUMATOLOGO: "Médico Traumatólogo",
    MEDICO_PSIQUIATRA: "Médico Psiquiatra",
    MEDICO_OFTALMOLOGO: "Médico Oftalmólogo",
    MEDICO_OTORRINOLARINGOLOGO: "Médico Otorrinolaringólogo",
    MEDICO_NEUROLOGO: "Médico Neurólogo",
    MEDICO_CARDIOLOGO: "Médico Cardiólogo",
    MEDICO_DERMATOLOGO: "Médico Dermatólogo",
    MEDICO_GERIATRA: "Médico Geriatra",
    MEDICO_INFECTOLOGO: "Médico Infectólogo",
    MEDICO_BRONCOPULMONAR: "Médico Broncopulmonar",
    MEDICO_NEFROLOGO: "Médico Nefrólogo",
    MEDICO_REUMATOLOGO: "Médico Reumatólogo",
    MEDICO_HEMATOLOGO: "Médico Hematólogo",
    MEDICO_ONCOLOGO: "Médico Oncólogo",
    MEDICO_RADIOLOGO: "Médico Radiólogo",
    MEDICO_ANESTESIOLOGO: "Médico Anestesiólogo",
    MEDICO_URGENCIOLOGO: "Médico Urgenciólogo",
    MEDICO_REHABILITADOR: "Médico Rehabilitador",
    MEDICO_MEDICINA_FISICA_Y_REHABILITACION:
      "Médico Medicina Física y Rehabilitación",
    MEDICO_NUTRIOLOGO: "Médico Nutriólogo",
    MEDICO_EPIDEMIOLOGO: "Médico Epidemiólogo",
    MEDICO_SALUBRISTA: "Médico Salubrista",
    MEDICO_DEL_TRABAJO: "Médico del Trabajo",
  };
  
  module.exports = {
    tipoLicenciaMedica,
    tipoDeReposo,
    rolUsuario,
    estadoLicenciaMedica,
    tipoInstitucionPrevisional,
    especialistasMedicos,
    institucionPrevisional,
    estadoPagex,
    BancosChile,
    EstadosContratoEmpresa,
    EntidadSaludEnum,
    AFPEnum,
    EstadoAvanceMoraPresuntaEnum
  };