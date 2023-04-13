import { useCallback, useState } from 'react';
import * as Yup from 'yup';
import { Link as RouterLink } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Link, Stack, Alert, Button } from '@mui/material';
// import { LoadingButton } from "@mui/lab";
// components
import FormProvider, { RHFTextField } from '../../components/hook-form';
import { useDispatch, useSelector } from 'react-redux';

// ----------------------------------------------------------------------

export default function ProfileForm() {
    const dispatch = useDispatch();

    // const {isLoading} = useSelector((state) => state.auth);

    const ProfileSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        about: Yup.string().required('About is required'),
        avatarUrl: Yup.string().required('Avatar is required').nullable(true),
    });

    const defaultValues = {
        name: 'BenJD1205',
        about: 'full-stack develop',
    };

    const methods = useForm({
        resolver: yupResolver(ProfileSchema),
        defaultValues,
    });

    const {
        reset,
        setError,
        watch,
        setValue,
        control,
        handleSubmit,
        formState: { errors },
    } = methods;

    const values = watch();

    const handleDrop = useCallback(
        (acceptedFiles) => {
            const file = acceptedFiles[0];

            const newFile = Object.assign(file, { preview: URL.createObjectURL(file) });
            if (file) {
                setValue('avatarUrl', newFile, { shouldValidate: true });
            }
        },
        [setValue]
    );

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
            <Stack spacing={3}>
                <Stack spacing={3}>
                    {!!errors.afterSubmit && (
                        <Alert severity="error">{errors.afterSubmit.message}</Alert>
                    )}

                    <RHFTextField
                        name="name"
                        label="Name"
                        helperText={'This name is visible to your contacts'}
                    />

                    <RHFTextField name="about" label="About" multiline rows={3} maxRows={5} />
                </Stack>
                <Stack direction="row" justifyContent="end">
                    <Button size="large" color="primary" type="submit" variant="outlined">
                        Save
                    </Button>
                </Stack>
            </Stack>
        </FormProvider>
    );
}
