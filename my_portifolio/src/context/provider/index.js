import React, { useState } from 'react';
import AppContext from '..';

function ContextProvide({ children }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const contextValue = {
    index,
    handleSelect,
  }
  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  )
}

export default ContextProvide;
