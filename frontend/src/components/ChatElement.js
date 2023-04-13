import { Stack, Box, Avatar, Typography, Badge } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { faker } from '@faker-js/faker';
import StyledBadge from './StyledBadge';

const ChatElement = ({ id, name, img, msg, time, unread, online }) => {
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
                <Stack direction="row" spacing={2}>
                    {' '}
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
                        <Typography variant="subtitle2">{name}</Typography>
                        <Typography variant="caption">{msg}</Typography>
                    </Stack>
                </Stack>
                <Stack spacing={2} alignItems={'center'}>
                    <Typography sx={{ fontWeight: 600 }} variant="caption">
                        {time}
                    </Typography>
                    <Badge className="unread-count" color="primary" badgeContent={unread} />
                </Stack>
            </Stack>
        </Box>
    );
};

export default ChatElement;
