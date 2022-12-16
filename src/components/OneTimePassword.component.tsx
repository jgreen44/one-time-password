import React from 'react';
import { Button, Box, Input, Text, Textarea } from '@stoplight/mosaic';
import './OneTimePassword.styles.css';

export const OneTimePasswordComponent = () => {
  return (
    <Box className={'otp'}>
      <h2>this is the OTP</h2>
      <Input h={'full'} placeholder={'placeholder'} />
      <Button size={'md'} appearance={'primary'}>
        Hey, this is a button
      </Button>
    </Box>
  );
};
