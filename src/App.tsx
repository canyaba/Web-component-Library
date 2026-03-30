import React from 'react';
import { Button } from './components/Button/Button';
import { Card } from './components/Card/Card';

function App() {
  return (
    <div style={{ padding: '40px' }}>
      <h1>UI Garden Component Library</h1>
      <Button label="Primary Button" />
      <Card title="Sample Card">Card Content</Card>
    </div>
  );
}

export default App;
