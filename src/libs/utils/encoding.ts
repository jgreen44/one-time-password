import { Buffer } from 'buffer';

export const encodeString = (str: string) => {
  // Encode the string using the Buffer class
  return Buffer.from(str).toString('base64');
};

export const decodeString = (str: string) => {
  // Encode the string using the Buffer class
  return Buffer.from(str, 'base64').toString();
};
