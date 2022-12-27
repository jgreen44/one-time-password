import * as React from 'react';
import Typography from '@mui/material/Typography';

export const Copyright = (props: any) => {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      Jason Green {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};
