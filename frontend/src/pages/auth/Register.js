import React from 'react'
import {Link as RouterLink} from 'react-router-dom'
import { Stack, Typography, Link } from '@mui/material';
import RegisterForm from '../../sections/auth/RegisterForm';
import AuthSocial from '../../sections/auth/AuthSocial';

const Register = () => {
  return (
    <>
        <Stack spacing={2} sx={{mb:5,position:'relative'}}>
          <Typography variant='h4'>
            Get Started With Apha      
          </Typography>   
          <Stack direction='row' spacing={0.5}>
            <Typography>Already have account?</Typography>
            <Link component={RouterLink} to="/auth/login" variant='subtitle2'>
              Sign In
            </Link>
        </Stack>
        {/*Register Form */}
        <RegisterForm />
        <Typography
          component={'div'}
          sx={{
            color: 'text.secondary',
            mt: 3,
            typography: 'caption',
            textAlign:'center',
          }}
        >
          {"By signinng up, I agree to "}
          <Link underline='always' color='text.primary'>
            Term of services
          </Link>
          {" and "}
          <Link underline='always' color='text.primary'>
            Privacy Policy
          </Link>
        </Typography>
        <AuthSocial />
      </Stack>
    </>
  )
}

export default Register