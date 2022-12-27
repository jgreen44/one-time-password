import axios from 'axios';

// type IResponseType = {
//   data: {
//     statusCode?: number;
//     message?: string;
//   };
// };

export const sendOTPEmail = async (payload: { email: string; otp: string }) => {
  console.log('payload', { ...payload });
  try {
    const response = await axios.post(
      // 'https://6rd51zjfek.execute-api.us-east-1.amazonaws.com/Prod/create-otp',
      'http://127.0.0.1:3000/create-otp',
      {
        ...payload,
      },
      {}
    );

    const {
      data: { statusCode, message },
    } = response;

    return { statusCode, message };
    // eslint-disable-next-line
  } catch (e: any) {
    console.log(`Server error. Message: ${e.message}`);
  }
};

export const getOTPValue = async (payload: { email: string }) => {
  try {
    const response = await axios.post(
      // 'https://6rd51zjfek.execute-api.us-east-1.amazonaws.com/Prod/create-otp',
      'http://127.0.0.1:3000/get-otp',
      {
        ...payload,
      },
      {}
    );

    // const {
    //   data: { statusCode, message },
    // } = response;

    return response;
    // eslint-disable-next-line
  } catch (e: any) {
    console.log(`Server error. Message: ${e.message}`);
  }
};
