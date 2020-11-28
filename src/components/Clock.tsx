import React, { FC, useState } from 'react';
import { Typography, Box } from '@material-ui/core';

type Props = {
  military?: boolean;
};

const Clock: FC<Props> = ({ military }) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [militaryTime, setMilitaryTime] = useState(
    new Date().toLocaleTimeString('en-GB')
  );
  setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
  setInterval(
    () => setMilitaryTime(new Date().toLocaleTimeString('en-GB')),
    1000
  );
  return (
    <Box textAlign="center">
      <Typography
        variant="h3"
        color="textPrimary"
        style={{ fontWeight: 'bold' }}
      >
        {military ? militaryTime : time}
      </Typography>
    </Box>
  );
};

export default Clock;
