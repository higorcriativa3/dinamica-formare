import React, { useEffect, useState } from 'react';

//Import API
import api from './services/api';

import './App.css';

function App() {
  const [group1, setGroup1] = useState([]);
  const [group2, setGroup2] = useState([]);
  const [group3, setGroup3] = useState([]);
  const [group4, setGroup4] = useState([]);


  //Call to API
  useEffect(()=> {
    api.get('/').then(response => {
      setGroup1(response.data[0]);
      setGroup2(response.data[1]);
      setGroup3(response.data[2]);
      setGroup4(response.data[3]);
    });
  }, []);  

  return (
    <div className="groups-container">
      <ul>
        <h2>Grupo 1</h2>
        {group1.map(group => (          
          <li key={group.name}>{group.name}</li>
        ))}
      </ul>
      <ul>
        <h2>Grupo 2</h2>
        {group2.map(group => (          
          <li key={group.name}>{group.name}</li>
        ))}
      </ul>
      <ul>
        <h2>Grupo 3</h2>
        {group3.map(group => (
          <li key={group.name}>{group.name}</li>
        ))}
      </ul>
      <ul>
        <h2>Grupo 4</h2>
        {group4.map(group => (
          <li key={group.name}>{group.name}</li>
        ))}
      </ul>
    </div>
  );

}

export default App;
