import React from "react";
import {
  Container, Stack
} from '@mui/material';
import { Outlet } from "react-router-dom";
import Logo from '../../assets/Images/logo.ico';

const MainLayout = () => {
  return (
    <>
      <Container sx={{ nt: 5 }} maxWidth='sm'>
        <Stack spacing={5}>
          <Stack sx={{width:'100%'}} direction='row' alignItems='center' justifyContent='center'>
            <img style={{height:120,width:120}} alt="Logo" src={Logo} />
          </Stack>
        </Stack>

        <Outlet />
      </Container>
    </>
  );
};

export default MainLayout;
