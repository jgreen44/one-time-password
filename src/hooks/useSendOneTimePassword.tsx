import React from 'react';
import { sendOTPEmail } from '../libs/sdk-http/requests';

const parseStatusCodes = (code: number | undefined) => {
  switch (code) {
    case 400:
      return 'error';
    case 200:
      return 'success';
    default:
      return 'internal error';
  }
};
export const useSendOneTimePassword = () => {
  return React.useCallback(async (email: string): Promise<void> => {
    const otp = Math.floor(Math.random() * 1000000);
    const emailResponse = await sendOTPEmail({ email, otp });
    parseStatusCodes(emailResponse?.statusCode);
  }, []);
};
