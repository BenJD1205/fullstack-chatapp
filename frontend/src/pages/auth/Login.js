import React from 'react'
import { Stack, Typography,Link} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import AuthSocial from '../../sections/auth/AuthSocial'
import LoginForm from '../../sections/auth/LoginForm';

const Login = () => {
  return (
    <>
      <Stack spacing={2} sx={{mb:5,position:'relative'}}>
        <Typography variant='h4'>Login to Apha</Typography>
        <Stack direction='row' spacing={0.5}>
          <Typography>New User ?</Typography>
          <Link to="/auth/register" component={RouterLink} variant="subtitle2">
            Create an account
          </Link>
        </Stack>
        {/* Login Form */}
        <LoginForm />
        {/* Auth Social */}
        <AuthSocial />
      </Stack>
    </>
  )
}

export default Login