import React from "react";
import Chats from './Chats';
import Converstation from "../../components/Converstation";
import Contact from "../../components/Contact";
import SharedMessages from '../../components/SharedMessages';
import StarredMessages from '../../components/StarredMessages';
import { Stack, Box } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import { useSelector } from 'react-redux';

const GeneralApp = () => {
  const theme = useTheme();
  const { sidebar } = useSelector((store) => store.app);
  console.log(sidebar)

  return (
    <Stack direction='row' sx={{ width: '100%' }}>
      {/*Chats */}
      <Chats />
      <Box
        sx={{
          height: '100%',
          width: sidebar.open ? 'calc(100vw - 740px)' : 'calc(100vw - 420px)',
          backgroundColor:theme.palette.mode === 'light' ? '#F0F4FA' : theme.palette.background.default
        }}
      >
        {/* Conversation */}
        <Converstation />
      </Box>
      {/*Contact*/}
      {sidebar.open && (() => {
        switch (sidebar.type) {
          case "CONTACT":
            return <Contact />;
          case "SHARED":
            return <SharedMessages />
          case "STARRED":
            return <StarredMessages />
          default:
            break;
        }
      })()}
    </Stack>
  );
};

export default GeneralApp;
