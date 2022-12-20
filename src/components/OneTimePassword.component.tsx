import React, { useState } from 'react';

import './OneTimePassword.styles.css';
import { FormProvider, useForm } from 'react-hook-form';

import { useSendOneTimePassword } from '../hooks/useSendOneTimePassword';

interface FormData {
  email: string;
}
export const OneTimePasswordComponent = () => {
  const [responseData, setResponseData] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(0);
  const sendOneTimePassword = useSendOneTimePassword();
  const formMethods = useForm<FormData>({
    shouldFocusError: false,
    mode: 'onBlur',
  });
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { isSubmitting, errors },
  } = formMethods;

  const onSubmit = async (formData: FormData) => {
    await sendOneTimePassword(formData.email);
  };

  return (
    <FormProvider {...formMethods}>
      <div className={'otp'}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div>
              <text id="email">Email</text>
              <div aria-label="user-email">
                <input
                  {...register('email', {
                    required: 'Please enter your email address',
                  })}
                  id="email"
                  placeholder={'Enter email address'}
                  aria-label={'email-input'}
                  onFocus={(e) => {
                    e.target.select();
                    clearErrors('email');
                  }}
                />
                {errors.email && <p>{errors.email.message}</p>}
              </div>

              <button
                disabled={isSubmitting}
                data-testid={'email-submit-button'}
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
        {responseData && <p>{responseData}</p>}
      </div>
    </FormProvider>
  );
};
