import React from "react";
import { ChatState } from "../context/chatProvider";
import { Box } from "@chakra-ui/layout";

import SideDrawer from "../components/miscellaneous/SideDrawer";
import MyChats from "../components/MyChats";
import Chatbox from "../components/Chatbox";

function Chatpage() {
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box display="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats />}
        {user && <Chatbox />}
      </Box>
    </div>
  );
}

export default Chatpage;
