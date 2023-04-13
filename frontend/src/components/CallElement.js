import React from 'react';
import { Stack, Box, Avatar, Typography, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { faker } from '@faker-js/faker';
import StyledBadge from './StyledBadge';
import { ArrowDownLeft, ArrowDownRight, Phone, VideoCamera } from 'phosphor-react';

const CallLogElement = ({ online, incoming, missed }) => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                width: '100%',
                borderRadius: 1,
                backgroundColor:
                    theme.palette.mode === 'light' ? '#fff' : theme.palette.background.default,
            }}
            p={2}
        >
            <Stack direction="row" alignItems={'center'} justifyContent="space-between">
                <Stack spacing={2} direction="row" alignItems="center">
                    {online ? (
                        <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            variant="dot"
                        >
                            <Avatar alt="" src={faker.image.avatar()} />
                        </StyledBadge>
                    ) : (
                        <Avatar alt="" src={faker.image.avatar()} />
                    )}
                    <Stack spacing={0.3}>
                        <Typography variant="subtitle2">{faker.name.fullName()}</Typography>
                        <Stack direction="row" alignItems="center" spacing={3}>
                            {incoming ? (
                                <ArrowDownLeft color={missed ? 'red' : 'green'} />
                            ) : (
                                <ArrowDownRight color={missed ? 'red' : 'green'} />
                            )}
                            <Typography variant="caption">Yesterday 21:24</Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <IconButton>
                    <Phone />
                </IconButton>
            </Stack>
        </Box>
    );
};

const CallElement = ({ online }) => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                width: '100%',
                borderRadius: 1,
                backgroundColor:
                    theme.palette.mode === 'light' ? '#fff' : theme.palette.background.default,
            }}
            p={2}
        >
            <Stack direction="row" alignItems={'center'} justifyContent="space-between">
                <Stack spacing={2} direction="row" alignItems="center">
                    {online ? (
                        <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            variant="dot"
                        >
                            <Avatar alt="" src={faker.image.avatar()} />
                        </StyledBadge>
                    ) : (
                        <Avatar alt="" src={faker.image.avatar()} />
                    )}
                    <Stack spacing={0.3}>
                        <Typography variant="subtitle2">{faker.name.fullName()}</Typography>
                    </Stack>
                </Stack>
                <Stack direction="row">
                    <IconButton>
                        <Phone color="green" />
                    </IconButton>
                    <IconButton>
                        <VideoCamera color="green" />
                    </IconButton>
                </Stack>
            </Stack>
        </Box>
    );
};

export { CallLogElement, CallElement };
