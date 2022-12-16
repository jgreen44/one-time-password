import axios from 'axios';

export const sendOTPEmail = async () => {
  const otp = Math.floor(Math.random() * 1000000);
  try {
    const response = await axios.post(
      'https://4edl8sk54b.execute-api.us-east-2.amazonaws.com/dev',
      {
        otp,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    alert(response.data);
  } catch (e) {
    console.log(e);
  }
};
