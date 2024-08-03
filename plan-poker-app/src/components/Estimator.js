import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function Estimator({ name, selectedCard }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography>{selectedCard || 'Not selected'}</Typography>
      </CardContent>
    </Card>
  );
}

export default Estimator;

