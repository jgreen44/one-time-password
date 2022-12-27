import * as React from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
  createTheme,
  ThemeProvider,
} from '@mui/material';

import { FormContainer, TextFieldElement } from 'react-hook-form-mui';

import { LockOutlined } from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';
import { Copyright } from './Copyright';
import { useState } from 'react';
import { useSendOneTimePassword } from '../hooks/useSendOneTimePassword';
import { decodeString, encodeString } from '../libs/utils/encoding';

const theme = createTheme();

type FormProps = {
  email: string;
};

export const SignInEmail = () => {
  let decodedEmailString: string;
  const [values, setValues] = useState<FormProps>();
  const sendOneTimePassword = useSendOneTimePassword();
  const navigate = useNavigate();
  const onSubmit = async (data: FormProps) => {
    setValues(data);
    await sendOneTimePassword(data.email);
    localStorage.setItem('id', encodeString(data.email));
    navigate('/sign-in-otp');
  };

  const defaultValues: FormProps = { email: '' };

  return (
    <>
      <FormContainer defaultValues={defaultValues} onSuccess={onSubmit}>
        <ThemeProvider theme={theme}>
          <Grid container component='main' sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid
              item
              xs={false}
              sm={4}
              md={7}
              sx={{
                backgroundImage: 'url(https://source.unsplash.com/random)',
                backgroundRepeat: 'no-repeat',
                backgroundColor: (t) =>
                  t.palette.mode === 'light'
                    ? t.palette.grey[50]
                    : t.palette.grey[900],
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <Grid
              item
              xs={12}
              sm={8}
              md={5}
              component={Paper}
              elevation={6}
              square
            >
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                  <LockOutlined />
                </Avatar>
                <Typography component='h1' variant='h5'>
                  Sign in
                </Typography>
                <TextFieldElement
                  type={'email'}
                  margin='normal'
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                  autoFocus
                  value={values}
                />
                <FormControlLabel
                  control={<Checkbox value='remember' color='primary' />}
                  label='Remember me'
                />
                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href='#' variant='body2'>
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href='#' variant='body2'>
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
                <Copyright sx={{ mt: 5 }} />
              </Box>
            </Grid>
          </Grid>
        </ThemeProvider>
      </FormContainer>
    </>
  );
};
