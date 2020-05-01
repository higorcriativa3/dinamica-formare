import React, { useState, useEffect } from 'react';
//import { useHistory } from 'react-router-dom';

import './styles.css'
import api from '../../services/api';

export default function Home() {
  //const history = useHistory();
  const [messages, setMessages] = useState([]);

  const [ userFilter, setUserFilter ] = useState([]);
  const [ user, setUser ] = useState('');
  const [ date, setDate ] = useState('');
  const userName = localStorage.getItem('name');

  useEffect(() => {
    api.get('messages').then(response => {
      setMessages(response.data);
      setUserFilter(response.data);
      
    })
  },[]);  

  function filterByUser(e) {
    e.preventDefault();
  
    setUserFilter(messages.filter(message => message.user === user));
    console.log(user);
  }

  function filterByDate(e) {
    e.preventDefault();
  
    setUserFilter(messages.filter(message => message.day === date));

  }

  function clearFilter(){
    setUserFilter(messages)
  }

  function older(){
    setUserFilter(messages.reverse());
  }

  return (
    <>
      <div className="messages-container">
        <header>
          <span>Olá, {userName}</span>

          <button>Sair</button>
        </header>

        
        <div className="filter-form">
          <form onSubmit={filterByUser}>
              <input 
                placeholder="Por usuário"
                value={user}
                onChange={e => setUser(e.target.value)}
              />
              <button className="button" type="submit">Filtrar</button>
            </form>
            <form onSubmit={filterByDate}>
              <input 
                placeholder="Por data"
                value={date}
                onChange={e => setDate(e.target.value)}
              />
              <button className="button" type="submit">Filtrar</button>
            </form>
            <div>
              <h2>Mais antigo</h2>
              <button onClick={older} className="button" >Filtrar</button>
            </div>
            <div>
              <h2>Mais recente</h2>
              <button onClick={clearFilter} className="button" >Filtrar</button>
            </div>
        </div>

        <button onClick={clearFilter} className="button clear-button">Limpar filtro</button><br/>
        
        <h1>Mensagens</h1>
        <hr></hr>
        <ul>
          {userFilter.map(message => (
            <li key={message._id}>
              <p>
                <span>{message.day} - {message.user} - {message.hour} <br/> </span>
                {message.message}
              </p>
            </li>
          ))}
        </ul>
      </div>

    </>
  )
}