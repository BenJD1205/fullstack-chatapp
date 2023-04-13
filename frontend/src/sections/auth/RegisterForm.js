import { useState } from "react";
import * as Yup from "yup";
// form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider, { RHFTextField } from "../../components/hook-form";
import {Stack, Alert,InputAdornment,IconButton, Button} from '@mui/material'
import { Eye, EyeSlash } from "phosphor-react";


const RegisterForm = () => {

    const [showPassword, setShowPassword] = useState(false);

    // const {isLoading} = useSelector((state) => state.auth);
  
    const RegisterSchema = Yup.object().shape({
        firstName: Yup.string().required('First name is required'),
     lastName:Yup.string().required('Last name is required'),
      email: Yup.string()
        .required("Email is required")
        .email("Email must be a valid email address"),
      password: Yup.string().required("Password is required"),
    });
  
    const defaultValues = {
      firstName: '',
      lastName:'',
      email: "demo@tawk.com",
      password: "demo1234",
    };
  
    const methods = useForm({
      resolver: yupResolver(RegisterSchema),
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
    }

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          {!!errors.afterSubmit && (
            <Alert severity="error">{errors.afterSubmit.message}</Alert>
          )}
          <Stack direction={{xs:'column','sm':'row'}} spacing={2}>
            <RHFTextField name='firstName' label='First name' />

            <RHFTextField name='lastName' label='Last name' />
          </Stack>    
          <RHFTextField name='email' label='Email' />
          <RHFTextField
            name='password'
            label='Password' 
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <Eye /> : <EyeSlash />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
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
            Create an account
          </Button>
        </Stack>    
    </FormProvider>
  )
}

export default RegisterForm