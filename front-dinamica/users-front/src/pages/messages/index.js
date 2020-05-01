import React, { useState, useEffect } from 'react';

import './styles.css'
import api from '../../services/api';

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [ newMessage, setNewMessage ] = useState('');
  const userName = localStorage.getItem('name');

  //Call to API
  useEffect(() => {
    api.get('messages').then(response => {
      setMessages(response.data);
      
    })
  },[messages]);

  //Function to create new message
  async function handleNewMessage(e) {
    e.preventDefault();

    //Format date
    const date = new Date();

    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hour = date.getHours();
    const minutes = (date.getMinutes()<10?'0':'') + date.getMinutes();

    const today = `${day}/${month}/${year}`;
    const time = `${hour}:${minutes}`;

    console.log(today, time);

    const data = {
      user: userName,
      message: newMessage,
      today: today,
      time: time
    }

    try{
      api.post('msgReg', data);
      setNewMessage('');
    } catch (err) {
      alert('Erro ao enviar mensagem');
      console.log(err);
    }
  }

  return (
    <>
      <div className="messages-container">
        <header>
          <span>Olá, {userName}</span>

          <button>Sair</button>
        </header>

        <h1>Mensagens</h1>

        <ul>
          {messages.map(message => (
            <li key={message._id}>
              <p>
                <span>{message.day} - {message.user} - {message.hour} <br/> </span>
                {message.message}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className='newMessage-container'>
        <form onSubmit={handleNewMessage}>
          <textarea 
            placeholder="Sua mensagem"
            value={newMessage}
            onChange={e => setNewMessage(e.target.value)}
          />
          <button className="button" type="submit">Enviar</button>
        </form>

      </div>
    </>
  )
}