import React from 'react';
import { getOTPValue, sendOTPEmail } from '../libs/sdk-http/requests';

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
export const useAuthenticateOneTimePassword = () => {
  return React.useCallback(async (email: string) => {
    return await getOTPValue({ email });
  }, []);
};
