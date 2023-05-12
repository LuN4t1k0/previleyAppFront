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

import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";
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
import {useNavigate} from "react-router-dom";
// Authentication layout components
import IllustrationLayout from "layouts/authentication/components/IllustrationLayout";
import { Box } from "@mui/material";
import authServices from "../../../services/auth-services";

// Image
const bgImage =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-ill.jpg";

function Illustration() {
  const [rememberMe, setRememberMe] = useState(false);
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
    
    console.log("data", data);
    //navigate('/licenses');
    login(data);
  };

  const login = async (payload) => {
    console.log("payload", payload);
    
    try {
      authServices.signIn(payload).then((response) => {
        console.log("response", response);
        sessionStorage.setItem("token", response.token);
        navigate('/dashboard');
      });
      
    } catch ({ response: { data: message } }) {
      alert("Error al iniciar sesión 🙁");
    }
  }
  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <IllustrationLayout
      title="Sign In"
      description="Enter your email and password to sign in"
      illustration={{
        image: bgImage,
        title: '"Attention is the new currency"',
        description:
          "The more effortless the writing looks, the more effort the writer actually put into the process.",
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
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
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
          <ArgonButton type="submit" color="info" size="large" fullWidth>
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
              color="info"
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
