import { Box, Avatar, Typography } from "@mui/material";
import React from "react";
import Logo from "../../../public/openai_saas_chatbot_logo.svg";
import { useAuth } from "../context/AuthContext";

const ChatItem = ({ msg, role }) => {
  const auth = useAuth();

  return role === "assistant" ? (
    <Box
      sx={{ display: "flex", padding: 2, bgcolor: "#004d5612", my: 2, gap: 2 }}
    >
      <Avatar sx={{ ml: 0 }}>
        <img src={Logo} alt="logo" width={"30px"} />
      </Avatar>
      <Box>
        <Typography fontSize={"20px"}>{msg}</Typography>
      </Box>
    </Box>
  ) : (
    <Box sx={{ display: "flex", padding: 2, bgcolor: "#004d56", gap: 2 }}>
      <Avatar sx={{ ml: 0, bgcolor: "black", color: "white" }}>
        {auth?.user.name[0]}
        {auth?.user?.name.split(" ")[1][0]}
      </Avatar>
      <Box>
        <Typography fontSize={"20px"}>{msg}</Typography>
      </Box>
    </Box>
  );
};

export default ChatItem;
