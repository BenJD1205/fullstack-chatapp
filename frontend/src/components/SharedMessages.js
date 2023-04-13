import React, {useState} from 'react'
import { Box, Stack, Typography, IconButton, Tab,Tabs, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { CaretLeft } from "phosphor-react";
import { faker } from "@faker-js/faker";
import { UpdateSidebarType } from '../redux/slices/app';
import { Shared_docs, Shared_links } from '../data';
import { LinkMsg, DosMsg } from './Converstation/MsgTypes';

const SharedMessages = () => {

  const theme = useTheme();
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  const handleChangeTab = (e,newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{width:320,height:'100vh'}}> 
      <Stack sx={{height:'100%'}}>
        <Box
          sx={{
            boxShadow: '0px 0px 2px rgba(0,0,0,0.25)',
            width: '100%',
            backgroundColor: theme.palette.mode === 'light' ?
              '#FBFAFF' : theme.palette.background
          }}
        > 
          <Stack
            sx={{height:'100%',p:2}}
            direction='row'
            alignItems='center'
            spacing={3}
          >
            <IconButton onClick={() => dispatch(UpdateSidebarType('CONTACT'))}>
              <CaretLeft />
            </IconButton>
            <Typography variant="subtitle2">Shared Messages</Typography>
          </Stack>
        </Box>
        <Tabs sx={{px:2,pt:2}} value={value} onChange={handleChangeTab} centered>
          <Tab label="Media" />
          <Tab label="Links" />
          <Tab label="Docs" />
        </Tabs>
        <Stack
          sx={{
            height: '100%',
            position: 'relative',
            flexGrow: 1,
            overflowY:'scroll'
          }}
          p={3}
          spacing={value === 1 ? 1 : 3}
        >
          {(() => {
            switch (value) {
              case 0:
                //Images
                return <Grid container spacing={2}>
                  {
                    [0, 1, 2, 3, 4, 5, 6].map((el) => (
                      <Grid item xs={4}>
                        <img 
                          src={faker.image.avatar()}
                          alt={faker.name.fullName()}
                        />
                      </Grid>
                    ))
                  }
                </Grid>
              case 1:
                //Links
                return Shared_links.map((el) => <LinkMsg el={el} />)
              case 2:
                //Docs
                return Shared_docs.map((el) => <DosMsg el={el} />)
              default:
                break;
            }
          })()}
        </Stack>
      </Stack>
    </Box>
  )
}

export default SharedMessages