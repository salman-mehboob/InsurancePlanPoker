import React from 'react';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const decks = {
    fibonacci: [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144],
    ratio: [1, 2, 4, 8, 10, 12],
    adapted: [0, 0.5, 1, 2, 3, 5, 8, 13, 20, 40, 100],
    shirtSize: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
};

function CardDeckSelector({ setDeck }) {
  const handleChange = (e) => {
    setDeck(decks[e.target.value]);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="deck-select-label">Select Card Deck</InputLabel>
      <Select labelId="deck-select-label" onChange={handleChange}>
        {Object.keys(decks).map((deck) => (
          <MenuItem value={deck} key={deck}>{deck}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default CardDeckSelector;
