import React from 'react';
import { Dialog, Slide, DialogTitle, DialogContent, Stack, Button } from '@mui/material';
import { Search, SearchIconWrapper, StyledInputBase } from '../../components/Search';
import { CallElement } from '../../components/CallElement';
import { MemberList } from '../../data';
import { MagnifyingGlass } from 'phosphor-react';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const StartCall = ({ open, handleClose }) => {
    return (
        <Dialog
            fullWidth
            maxWidth="xs"
            open={open}
            TransitionComponent={Transition}
            keepMounted
            sx={{ p: 4 }}
            onClose={handleClose}
        >
            {/* Title */}
            <DialogTitle sx={{ mb: 3 }}>Start Call</DialogTitle>
            <DialogContent>
                <Stack spacing={3}>
                    <Stack sx={{ width: '100%' }}>
                        <Search>
                            <SearchIconWrapper>
                                <MagnifyingGlass color="#709CE6" />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search..."
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Stack>
                    {/* Call List */}
                    {MemberList.map((el) => (
                        <CallElement {...el} />
                    ))}
                </Stack>
            </DialogContent>
        </Dialog>
    );
};

export default StartCall;
