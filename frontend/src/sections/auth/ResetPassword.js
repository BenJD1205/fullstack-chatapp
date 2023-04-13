import React from 'react'
import * as Yup from "yup";
import { Stack, Button, Alert } from '@mui/material';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider, { RHFTextField } from "../../components/hook-form";

const ResetPassword = () => {
    const ResetPasswordSchema = Yup.object().shape({
        email: Yup.string()
          .required("Email is required")
          .email("Email must be a valid email address"),
      });
    
      const defaultValues = {
        email: "demo@tawk.com",
      };
    
      const methods = useForm({
        resolver: yupResolver(ResetPasswordSchema),
        defaultValues,
      });
    
      const {
        reset,
        setError,
        handleSubmit,
        formState: { errors },
      } = methods;
    
      const onSubmit = async (data) => {
        try {
          console.log(data);
          // submit data to backend
          // dispatch(LoginUser(data));
        } catch (error) {
          console.error(error);
          reset();
          setError("afterSubmit", {
            ...error,
            message: error.message,
          });
        }
      };
    
      return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            {!!errors.afterSubmit && (
              <Alert severity="error">{errors.afterSubmit.message}</Alert>
            )}
    
            <RHFTextField name="email" label="Email address" />
            
            <Button
              fullWidth
              size="large"
              type='submit'
              variant='outlined'
              sx={{
                bgColor: 'text.primary',
                color: (theme) => theme.palette.mode === 'light' ? 'common.white' : 'grey.800',
                "&:hover": {
                  bgColor: 'text.primary',
                  color:(theme) => theme.palette.mode === 'light' ? 'common.white' : 'grey.800'
                }
              }}
            >
              Send request
            </Button>
          </Stack>
          {/* <LoadingButton
            fullWidth
            color="inherit"
            size="large"
            type="submit"
            variant="contained"
            loading={isLoading}
            sx={{
              bgcolor: "text.primary",
              color: (theme) =>
                theme.palette.mode === "light" ? "common.white" : "grey.800",
              "&:hover": {
                bgcolor: "text.primary",
                color: (theme) =>
                  theme.palette.mode === "light" ? "common.white" : "grey.800",
              },
            }}
          >
            Login
          </LoadingButton> */}
        </FormProvider>
      );
}

export default ResetPassword