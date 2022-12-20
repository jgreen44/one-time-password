import axios from 'axios';

export interface IResponseType {
  data: {
    statusCode: number;
    body: string;
    otp?: number;
  };
}

export const sendOTPEmail = async (payload: { email: string; otp: number }) => {
  console.log({ ...payload });
  try {
    const response: IResponseType = await axios.post(
      'https://6rd51zjfek.execute-api.us-east-1.amazonaws.com/Prod/create-otp',
      {
        statusCode: 200,
        body: JSON.stringify({ ...payload }),
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
          'Access-Control-Allow-Headers':
            'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
          'Access-Control-Allow-Headers':
            'Origin, X-Requested-With, Content-Type, Accept, Authorization',
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
