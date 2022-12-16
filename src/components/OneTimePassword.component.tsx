import React from 'react';
import { Button, Box, Input } from '@stoplight/mosaic';
import './OneTimePassword.styles.css';
import { sendOTPEmail } from '../libs/sdk-http/requests';

export const OneTimePasswordComponent = () => {
  const handleEvent = async () => {
    const response = await sendOTPEmail();
    console.log(response.data);
  };
  return (
    <Box className={'otp'}>
      <h2>this is the OTP</h2>
      <Input h={'full'} placeholder={'placeholder'} />
      <Button onClick={handleEvent} size={'md'} appearance={'primary'}>
        Hey, this is a button
      </Button>
    </Box>
  );
};
