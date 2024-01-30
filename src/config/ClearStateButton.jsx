// ClearStateButton.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { persistor } from './store';

const ClearStateButton = () => {
    
  const dispatch = useDispatch();

  const handleClearState = async () => {
    await persistor.purge();
    // Optionally, dispatch an action to reset non-persisted state
    // dispatch({ type: 'RESET_STATE' });
  };

  return (
    <button onClick={handleClearState}>
      Clear and Empty State
    </button>
  );
};

export default ClearStateButton;
