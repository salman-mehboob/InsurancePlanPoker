import React, { useState } from 'react';
import { Button, Grid, Card, CardContent, Typography } from '@mui/material';
import Estimator from './Estimator';

function PokerTable({ deck, estimators, feature, onEstimate }) {
  const [selectedCards, setSelectedCards] = useState({});
  const [reveal, setReveal] = useState(false);

  const handleCardSelect = (estimator, card) => {
    setSelectedCards(prev => ({ ...prev, [estimator]: card }));
  };

  const handleReveal = () => {
    setReveal(true);
    onEstimate(selectedCards);
  };

  return (
    <div>
      <Typography variant="h5">Feature: {feature}</Typography>
      <Grid container spacing={2}>
        {deck.map((card, index) => (
          <Grid item key={index}>
            {estimators.map(estimator => (
              <Button 
                key={estimator} 
                variant="outlined" 
                onClick={() => handleCardSelect(estimator, card)}
              >
                {card}
              </Button>
            ))}
          </Grid>
        ))}
      </Grid>
      <Button onClick={handleReveal} variant="contained" color="secondary">
        Reveal
      </Button>
      {reveal && (
        <div>
          {Object.entries(selectedCards).map(([estimator, card], index) => (
            <Estimator key={index} name={estimator} selectedCard={card} />
          ))}
        </div>
      )}
    </div>
  );
}

export default PokerTable;