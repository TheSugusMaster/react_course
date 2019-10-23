import React from 'react';
import './App.css';
import AutoForm from "../components/Auto/AutoForm";
import AutoIndex from "../components/Auto/AutoIndex"

const App: React.FC = () => {
  return (
    <div className="App">
      <AutoForm />
      <AutoIndex />
    </div>
  );
}

export default App;
