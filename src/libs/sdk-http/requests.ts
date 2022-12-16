import axios from 'axios';

export const sendOTPEmail = async () => {
  try {
    const response = await axios.post(
      'https://4edl8sk54b.execute-api.us-east-2.amazonaws.com/dev',
      {
        data: {
          opt: '123',
        },
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    alert(response);
  } catch (e) {
    console.log(e);
  }
};
