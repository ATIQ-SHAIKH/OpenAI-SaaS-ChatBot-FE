import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { IoIosLogIn } from "react-icons/io";
import CustomInput from "../components/shared/CustomInput";
import Logo from "../../public/openai_saas_chatbot_logo.svg";
import { toast } from "react-hot-toast";
import { useAuth } from "../components/context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    try {
      toast.loading("Please wait...", { id: "login" });
      await auth.login(email, password);
      toast.success("Logged In.", { id: "login" });
      return navigate("/chat");
    } catch (e) {
      toast.error("Failed.", { id: "login" });
    }
  };

  return (
    <Box width={"100%"} height={"100%"} display={"flex"} flex={1}>
      <Box padding={8} mt={8} display={{ md: "flex", sm: "none", xs: "none" }}>
        <img src={Logo} alt="logo" style={{ width: "600px" }} />
        <Box
          display={"flex"}
          flex={{ xs: 1, md: 0.5 }}
          justifyContent={"center"}
          alignItems={"center"}
          padding={2}
          ml={"auto"}
          mt={16}
        >
          <form
            onSubmit={handleSubmit}
            style={{
              margin: "auto",
              padding: "30px",
              boxShadow: "10px 10px 20px #000",
              borderRadius: "10px",
              border: "none",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h4"
                textAlign="center"
                padding={2}
                fontWeight={600}
              >
                Login
              </Typography>
              <CustomInput type="email" name="email" label="Email" />
              <CustomInput type="password" name="password" label="Password" />
              <Button
                type="submit"
                sx={{
                  px: 2,
                  py: 1,
                  mt: 2,
                  width: "400px",
                  borderRadius: 2,
                  bgcolor: "#00fffc",
                  ":hover": { bgcolor: "white", color: "black" },
                }}
                endIcon={<IoIosLogIn />}
              >
                Login
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
