import React, { FC, useEffect, useState } from 'react';
import { Typography, Box } from '@material-ui/core';

type Props = {
  military?: boolean;
};

const Clock: FC<Props> = ({ military }) => {
  const [t, setT] = useState(new Date());
  useEffect(() => {
      const i = setInterval(() => setT(new Date()), 1000);
      return () => clearInterval(i);
  }, []);
  return (
    <Box textAlign="center">
      <Typography
        variant="h3"
        color="textPrimary"
        style={{ fontWeight: 'bold', userSelect: 'none' }}
      >
        {t.toLocaleTimeString(military ? 'en-GB' : 'en-US')}
      </Typography>
    </Box>
  );
};

export default Clock;
