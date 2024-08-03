import React, { useState } from 'react';
import { List, ListItem, ListItemText, Button, TextField } from '@mui/material';

function FeatureList({ features, setFeatures, selectFeature }) {
  const [newFeature, setNewFeature] = useState('');

  const handleAddFeature = () => {
    if (newFeature.trim()) {
      setFeatures([...features, newFeature.trim()]);
      setNewFeature('');
    }
  };

  return (
    <div>
      <List>
        {features.map((feature, index) => (
          <ListItem button onClick={() => selectFeature(index)} key={index}>
            <ListItemText primary={feature} />
          </ListItem>
        ))}
      </List>
      <TextField 
        label="New Feature" 
        value={newFeature} 
        onChange={(e) => setNewFeature(e.target.value)} 
        fullWidth 
      />
      <Button onClick={handleAddFeature} variant="contained" color="primary">
        Add Feature
      </Button>
    </div>
  );
}

export default FeatureList;

