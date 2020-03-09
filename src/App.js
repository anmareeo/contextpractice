import React from 'react';
import './App.css';
import Component1 from './components/Component1';
import MyContext from './components/Context'
function App() {
  return (
    <div className="App">
      <MyContext.Provider value = "Value">
        <Component1></Component1>
      </MyContext.Provider>
      
    </div>
  );
}

export default App;
