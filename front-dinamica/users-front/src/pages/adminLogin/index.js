import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

//Import API from /services
import api from '../../services/api';

//Import Styles
import './styles.css';

export default function Logon() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
    console.log(username);

    try{
      const response = await api.post('login', {username, password});

      console.log(response.status);

      localStorage.setItem('name', username);

      history.push('/adminMessages');
    } catch (err) {
      alert('Falha no login');
    }
  } 

  return (
    <div className="logon-container">
      <section className="form">
        <form onSubmit={handleLogin}>
          <h1>Faça seu login</h1>

          <input 
            placeholder="Seu username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input 
            placeholder="Sua senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button className="button" type="submit">Entrar</button>
          <Link 
            className="back-link"
            to="/adminRegister"
          >Não tenho cadastro</Link>
        </form>
      </section>
    </div>
  )

}