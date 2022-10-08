import React, { useState } from 'react';
import AppContext from '..';

function ContextProvide({ children }) {
  const [infoProject, setInfoProject] = useState({
    title: '',
    describe: '',
  })

  const contextValue = {
    infoProject,
    setInfoProject,
  }
  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  )
}

export default ContextProvide;
