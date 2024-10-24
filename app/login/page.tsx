'use client'
import axios from "axios";
import { useState } from "react";


export default function Login() {
  const [form, setForm] = useState({});

  const sendData = async () => {
    const response = await axios.post('/api/login', {
      username: form.username,
      password: form.password
    })
    if (response.status == 200) {
      alert ('OK');
    }else {
      alert('error')
    }
  }
  const handleEditForm = (event: any) => {
    const value = event.target.value;
    const name = event.target.name;

    setForm((prev: any) => {
      prev[name] = value;
      return prev;
    }
    )
  }

  return (
    <div>
      {/* np
            inviare con una post i dati della form 
            con una get selezionare esclusivamente il campo con il nome utente corrispondente 
            fare get su utenti con where su non utente passato 
            fare confronto con password, se equivalgono 
            restituire true
            altrimenti false 
            se il risultato è true andare alla pagina successiva
            se è false andare alla registrazione

          */}
      <div>
        <label htmlFor="user"> Username:</label>
        <input name="username" type="text" placeholder="Username" onChange={handleEditForm} />
      </div>
      <div>
        <label htmlFor="pass"> Password:</label>
        <input name="password" type="password" placeholder="password" onChange={handleEditForm} />
      </div>
      <div>
        <button type='submit' onClick={sendData}>Entra</button>
      </div>

    </div>
  );
}