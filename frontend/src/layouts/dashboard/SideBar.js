import React, { useState } from 'react';
import { Stack, Box, IconButton, Avatar, Divider, Menu, MenuItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Gear } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';
import { faker } from '@faker-js/faker';
import Logo from '../../assets/Images/logo.ico';
import { Nav_Buttons, Profile_Menu } from '../../data';
import useSettings from '../../hooks/useSettings';
import AntSwitch from '../../components/AntSwitch';

const getPath = (index) => {
    switch (index) {
        case 0:
            return '/app';
        case 1:
            return '/group';
        case 2:
            return '/call';
        case 3:
            return '/settings';
        default:
            break;
    }
};

const SideBar = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const [selected, setSelected] = useState(0);

    const { onToggleMode } = useSettings();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box
            p={2}
            sx={{
                backgroundColor: theme.palette.background.paper,
                height: '100vh',
                boxShadow: '0px 0px 2px rgba(0,0,0,0.25)',
                width: 100,
            }}
        >
            <Stack
                direction="column"
                alignItems="center"
                sx={{ height: '100%' }}
                spacing={3}
                justifyContent="space-between"
            >
                <Stack alignItems="center" spacing={4}>
                    <Box
                        sx={{
                            backgroundColor: theme.palette.primary.main,
                            height: 64,
                            width: 64,
                            borderRadius: 1.5,
                        }}
                    >
                        <img src={Logo} alt="Chat app logo" />
                    </Box>
                    <Stack
                        sx={{ width: 'max-content' }}
                        direction="column"
                        alignItems="center"
                        spacing={3}
                    >
                        {Nav_Buttons.map((el) =>
                            el.index === selected ? (
                                <Box
                                    p={1}
                                    sx={{
                                        backgroundColor: theme.palette.primary.main,
                                        borderRadius: 1.5,
                                    }}
                                >
                                    <IconButton
                                        sx={{
                                            width: 'max-content',
                                            color: '#fff',
                                        }}
                                        key={el.index}
                                    >
                                        {el.icon}
                                    </IconButton>
                                </Box>
                            ) : (
                                <IconButton
                                    onClick={() => {
                                        setSelected(el.index);
                                        navigate(getPath(el.index));
                                    }}
                                    sx={{
                                        width: 'max-content',
                                        color: '#000',
                                    }}
                                    key={el.index}
                                >
                                    {el.icon}
                                </IconButton>
                            )
                        )}
                        <Divider sx={{ width: '48px' }} />
                        {selected === 3 ? (
                            <Box
                                p={1}
                                sx={{
                                    backgroundColor: theme.palette.primary.main,
                                    borderRadius: 1.5,
                                }}
                            >
                                <IconButton
                                    sx={{
                                        width: 'max-content',
                                        color:
                                            theme.palette.mode === 'light'
                                                ? '#000'
                                                : theme.palette.text.primary,
                                    }}
                                >
                                    <Gear />
                                </IconButton>
                            </Box>
                        ) : (
                            <IconButton
                                onClick={() => {
                                    setSelected(3);
                                    navigate(getPath(3));
                                }}
                            >
                                <Gear />
                            </IconButton>
                        )}
                    </Stack>
                </Stack>
                <Stack spacing={4}>
                    <AntSwitch
                        onChange={() => {
                            onToggleMode();
                        }}
                        defaultChecked
                    />
                    <Avatar
                        id="basic-button"
                        src={faker.image.avatar()}
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    />
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                    >
                        <Stack spacing={1} px={1}>
                            {Profile_Menu.map((el) => (
                                <MenuItem onClick={handleClose}>
                                    <Stack
                                        sx={{
                                            width: 100,
                                        }}
                                        direction="row"
                                        alignItems="center"
                                        justifyContent="space-between"
                                    >
                                        <span>{el.title}</span>
                                        {el.icon}
                                    </Stack>{' '}
                                </MenuItem>
                            ))}
                        </Stack>
                    </Menu>
                </Stack>
            </Stack>
        </Box>
    );
};

export default SideBar;
