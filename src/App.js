import './App.css';
import { useState } from 'react';
import { Collapse } from './components/Collapse';

function App() {
  const [isCollapsed, setCollapsed] = useState(true);

  const handleButtonClick = () => {
    setCollapsed(!isCollapsed);
  }
  return (
    <div className='app'>
      <Collapse 
        collapsedLabel={'expand'}
        expandedLabel={'collapse'}
        isCollapsed={isCollapsed}
        onClickBtn={handleButtonClick}
      />
    </div>
  );
}

export default App;
