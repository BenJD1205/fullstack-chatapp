import React from 'react';
import { Dialog, Slide, DialogTitle, DialogContent, Stack, Button } from '@mui/material';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormProvider, { RHFTextField, RHFAutocomplete } from '../../components/hook-form';

const MEMBERS = ['Name 1', 'Name 2', 'Name 3'];

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CreateGroupForm = ({ handleClose }) => {
    const NewGroupSchema = Yup.object().shape({
        title: Yup.string().required('Title is required'),
        members: Yup.array().min(2, 'Must have at least 2 members'),
    });

    const defaultValues = {
        title: '',
        members: [],
    };

    const methods = useForm({
        resolver: yupResolver(NewGroupSchema),
        defaultValues,
    });

    const {
        reset,
        setError,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting, isValid, isSubmitSuccessful },
    } = methods;

    const onSubmit = async (data) => {
        try {
            console.log(data);
            // submit data to backend
            // dispatch(LoginUser(data));
        } catch (error) {
            console.error(error);
            reset();
            setError('afterSubmit', {
                ...error,
                message: error.message,
            });
        }
    };

    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3} sx={{ paddingTop: 1 }}>
                <RHFTextField name="title" label="Title" />
                <RHFAutocomplete
                    name="members"
                    label="Members"
                    multiple
                    freeSolo
                    options={MEMBERS.map((option) => option)}
                    ChipProps={{ size: 'medium' }}
                />
                <Stack spacing={2} direction="row" alignItems="center" justifyContent="end">
                    <Button type="submit" variant="contained">
                        Create
                    </Button>
                    <Button onClick={handleClose}>Cancel</Button>
                </Stack>
            </Stack>
        </FormProvider>
    );
};

const CreateGroup = ({ open, handleClose }) => {
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
            {/*Title */}
            <DialogTitle sx={{ mb: 3 }}>Create New Group</DialogTitle>
            <DialogContent>
                <CreateGroupForm handleClose={handleClose} />
            </DialogContent>
        </Dialog>
    );
};

export default CreateGroup;
