import * as React from 'react';
import Typography from '@mui/material/Typography';

interface CopyrightProps {
  sx?: { mt: number };
}
export const Copyright: React.FC<CopyrightProps> = (props: CopyrightProps) => {
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
