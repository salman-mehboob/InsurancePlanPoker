import React, { useState } from 'react';
import './App.css';
import CardDeckSelector from './components/CardDeckSelector';
import FeatureList from './components/FeatureList';
import PokerTable from './components/PokerTable';
import { Container, Typography } from '@mui/material';

function App() {
  const [deck, setDeck] = useState([]);
  const [estimators, setEstimators] = useState(['Alice', 'Bob', 'Charlie']);
  const [features, setFeatures] = useState(['User Story 1', 'User Story 2']);
  const [selectedFeatureIndex, setSelectedFeatureIndex] = useState(null);
  const [showTimer, setShowTimer] = useState(false);

  const selectFeature = (index) => {
    setSelectedFeatureIndex(index);
    setShowTimer(true);
  };

  const handleTimeUp = () => {
    setShowTimer(false);
  };

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Planning Poker
      </Typography>
      <CardDeckSelector setDeck={setDeck} />
      <FeatureList features={features} setFeatures={setFeatures} selectFeature={selectFeature} />
      {selectedFeatureIndex !== null && (
        <>
          <PokerTable
            deck={deck}
            estimators={estimators}
            feature={features[selectedFeatureIndex]}
            onEstimate={(estimates) => console.log(estimates)}
          />
        </>
      )}
    </Container>
  );
}

export default App;
