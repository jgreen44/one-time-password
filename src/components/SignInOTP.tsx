import * as React from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import Spinner from 'react-bootstrap/Spinner';

import { FormContainer, TextFieldElement } from 'react-hook-form-mui';

import { LockOutlined } from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';
import { Copyright } from './Copyright';
import { useState } from 'react';
import { useAuthenticateOneTimePassword } from '../hooks/useAuthenticateOneTimePassword';
import { decodeString } from '../libs/utils/encoding';

const theme = createTheme();

type FormProps = {
  otp: number | undefined;
};
export const SignInOTP = () => {
  let decodedEmailString: string;
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState<FormProps>();
  const authenticateOneTimePassword = useAuthenticateOneTimePassword();
  const navigate = useNavigate();
  const onSubmit = async (data: FormProps) => {
    let response;
    setLoading(true);
    setValues(data);
    const emailString: string | null = localStorage.getItem('id');
    if (emailString !== null) {
      decodedEmailString = decodeString(emailString);
    }

    if (data.otp != null) {
      response = await authenticateOneTimePassword(decodedEmailString);

      if (
        response?.status === 200 &&
        response?.data.message.otp['S'] === data.otp
      ) {
        setLoading(false);
        navigate('/final-app');
      } else {
        console.log('error', {
          responseOTP: response?.data.message.otp['S'],
          dataOTP: data.otp,
        });
      }
      setLoading(false);
    }
  };

  const defaultValues: FormProps = { otp: undefined };

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
                  One Time Password
                </Typography>
                <TextFieldElement
                  type={'number'}
                  margin='normal'
                  required
                  fullWidth
                  id='one-time-password'
                  label='One Time Password'
                  name='otp'
                  autoComplete='one-time-password'
                  autoFocus
                  value={values}
                />

                {loading ? (
                  <Spinner animation='border' />
                ) : (
                  <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Submit
                  </Button>
                )}
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
