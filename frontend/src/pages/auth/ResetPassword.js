import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { Stack, Typography, Link } from '@mui/material';
import { CaretLeft } from 'phosphor-react';
import ResetPasswordForm from '../../sections/auth/ResetPassword';

const ResetPassword = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position:'relative'}}>
        <Typography variant='h3'>
              Forgot your password
        </Typography>   
        <Typography>
            Please enter the email address with your account and We
            will send email you a link to reset your password   
        </Typography>  
        <ResetPasswordForm />
        <Link
          component={RouterLink}
          to="/auth/login"
          color='inherit'
          variant='subtitle2'
          sx={{
            mt: 3,
            mx: 'auto',
            alignItems: 'center',
            display:'inline-flex'
          }}
        >
          <CaretLeft />
          Return to Login
        </Link>
      </Stack>     
    </>
  )
}

export default ResetPassword