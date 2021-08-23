import React from 'react';

function App() {
  const value = 'World! Today's date is: ';
  return <div>Hello {value} {(new Date()).toString()}</div>;
}

export default App;