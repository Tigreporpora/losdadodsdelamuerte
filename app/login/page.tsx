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
      localStorage.setItem('isLogged', 'true')
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
    <form className="flex flex-col items-center justify-center" onSubmit={sendData}>
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
        <label className="block text-sm/6 font-medium text-gray-900" htmlFor="user"> Username:</label>
        <div className="relative mt-2 rounded-md shadow-sm"> 
        <input className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" name="username" type="text" placeholder="Username" onChange={handleEditForm} />
        </div>
      </div>

      <br></br>

      <div>
        <label className="block text-sm/6 font-medium text-gray-900" htmlFor="pass"> Password:</label>
        <div className="relative mt-2 rounded-md shadow-sm"> 
        <input className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" name="password" type="password" placeholder="password" onChange={handleEditForm} />
        </div>
      </div>

      <br></br>
      
      <div>
        <button className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" type='submit'>Entra</button>
      </div>

    </form>
  );
}