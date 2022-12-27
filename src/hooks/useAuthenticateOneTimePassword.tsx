import React from 'react';
import { getOTPValue } from '../libs/sdk-http/requests';

export const useAuthenticateOneTimePassword = () => {
  return React.useCallback(async (email: string) => {
    return await getOTPValue({ email });
  }, []);
};
