import React, {useState} from 'react';
import './App.css';
import AutoForm from "../components/Auto/AutoForm";
import AutoIndex from "../components/Auto/AutoIndex";
import { Auto } from "../models/Auto";

const App: React.FC = () => {
  const [autos, setAutos] = useState<Auto[]>(
    [
      { id: 0, brand: 'Ford', model: 'Mondeo', year: '2000' },
      { id: 1, brand: 'Opel', model: 'Corsa', year: '2002' },
      { id: 2, brand: 'Citroen', model: 'C5 Break', year: '2002' }
    ]
  )

const deleteAuto = (auto: Auto) => {
  setAutos(autos.filter(a => a.id !== auto.id));
}

const createAuto = (auto: Auto) => {
  setAutos([...autos, {...auto, id: new Date().getTime()}]);
}

return (
  <div className="App">
    <AutoForm onSave={createAuto} />
    <AutoIndex autos={autos} onDelete={deleteAuto} />
  </div>
);
}

export default App;
