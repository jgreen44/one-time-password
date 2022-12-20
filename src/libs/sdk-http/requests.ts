import axios from 'axios';

export interface IResponseType {
  data: {
    statusCode: number;
    body: string;
    otp?: number;
  };
}

export const sendOTPEmail = async (payload: { email: string; otp: number }) => {
  try {
    const response: IResponseType = await axios.post(
      'https://obhk58x125.execute-api.us-east-1.amazonaws.com/Prod/create-otp',
      {
        ...payload,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Origin': '*', // Allow from anywhere
          'Access-Control-Allow-Methods': 'GET,POST,OPTIONS', // Allow all requests
        },
      }
    );

    const {
      data: { statusCode, body, otp },
    } = response;

    console.log('axios', {
      statusCode,
      body,
      otp,
    });

    return { statusCode, body, otp };
  } catch (e: any) {
    console.log(`Server error. Message: ${e.message}`);
  }
};
