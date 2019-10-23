import React from 'react';
import './App.css';
import AutoForm from "../components/Auto/AutoForm";
import AutoIndex from "../components/Auto/AutoIndex";
import { Auto } from "../models/Auto";

const App: React.FC = () => {
  const autos: Auto[] = [
    {id: 0, brand: 'Ford', model: 'Mondeo', year: '2000'},
    {id: 1, brand: 'Opel', model: 'Corsa', year: '2002'},
    {id: 2, brand: 'Citroen', model: 'C5 Break', year: '2002'}
  ]

  return (
    <div className="App">
      <AutoForm />
      <AutoIndex autos={autos}/>
    </div>
  );
}

export default App;
