import React, { useState } from "react";
import { ChatState } from "../context/chatProvider";
import { Box } from "@chakra-ui/layout";

import SideDrawer from "../components/miscellaneous/SideDrawer";
import MyChats from "../components/MyChats";
import Chatbox from "../components/Chatbox";

function Chatpage() {
  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);

  
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
      >
        {user && (
          <MyChats fetchAgain={fetchAgain} />
        )}
        {user && <Chatbox fetchAgain={fetchAgain} setFectchAgain={setFetchAgain}/>}
      </Box>
    </div>
  );
}

export default Chatpage;
