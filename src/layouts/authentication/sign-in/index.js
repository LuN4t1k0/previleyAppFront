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

import { useState, useContext } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
// @mui material components
import Switch from "@mui/material/Switch";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
// Authentication layout components
import IllustrationLayout from "layouts/authentication/components/IllustrationLayout";
import { Box } from "@mui/material";
import usuarioReducer from "reducers/usuarioReducer";
import authServices from "services/auth-services";
import { UsuarioContext } from "context/usuarioContext";
const bgImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjP3p1tsZSaYHv34wcTv0ZiWI9_SMkv0Fw2OGENkbhhFH6GuD-nKTp5feQ5rzOwO2RwA&usqp=CAU";

function Illustration() {
 
  const [rememberMe, setRememberMe] = useState(false);
  const usuarioContext = useContext(UsuarioContext);
  
  const schema = yup.object({
    email: yup.string()
      .required()
      .email(),
    password: yup.string().required()
  }).required();
   const { register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const onSubmit = (data) => {
    
    //console.log("data", data);
    
    login(data);
  };

  const login = async (payload) => {
    console.log("payload", payload);
    
    try {
      const { guardarParametros } = usuarioContext;
      authServices.signIn(payload).then((response) => {
        console.log("response", response.user.user);
        //console.log("response", response.user.user.rol)
        sessionStorage.setItem("token", response.token);
        sessionStorage.setItem("rol", response.user.user.rol);
        sessionStorage.setItem("email", response.user.user.email);
        sessionStorage.setItem("rutEmpresas", response.user.rutEmpresa);
        sessionStorage.setItem("usuario", "JAIMITO");
        
        //guardarParametros(response.user);
        
        navigate('/dashboard');
      });
    } catch (error) {
      alert("Error al iniciar sesión 🙁", error);
    }
  }
  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <IllustrationLayout
      title="Sign In"
      description="Enter your email and password to sign in"
      illustration={{
        image: bgImage,
        title: 'Titulo Epico',
        description:
          "Subtitulo Epico",
      }}
    >
      
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <ArgonBox mb={2}>
          <ArgonInput {...register("email", { required: true })} type="email" id="email" name="email" placeholder="Email" size="large" />
        </ArgonBox>
        <ArgonBox mb={2}>
          <ArgonInput 
              {...register("password", { required: true })}
              type="password"  
              id="password" 
              name="password" 
              placeholder="Contrasena" 
              size="large" />
          </ArgonBox>
        <ArgonBox display="flex" alignItems="center">
          <Switch color={"secondary"} checked={rememberMe} onChange={handleSetRememberMe} />
          <ArgonTypography
            variant="button"
            fontWeight="regular"
            onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none" }}
            
          >
            &nbsp;&nbsp;Remember me
          </ArgonTypography>
        </ArgonBox>
        <ArgonBox mt={4} mb={1}>
          <ArgonButton type="submit" color="primary" size="large" fullWidth>
            Sign In
          </ArgonButton>
        </ArgonBox>
        </Box>
        <ArgonBox mt={3} textAlign="center">
          <ArgonTypography variant="button" color="text" fontWeight="regular" >
            Don&apos;t have an account?{" "}
            <ArgonTypography
              component={Link}
              to="/authentication/sign-up"
              variant="button"
              color="primary"
              fontWeight="medium"
            >
              Sign up
            </ArgonTypography>
          </ArgonTypography>
        </ArgonBox>
      
    </IllustrationLayout>
  );
}

export default Illustration;
