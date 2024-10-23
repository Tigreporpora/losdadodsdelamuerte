export default function Login() {
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
      <form action='/api/login' method="post">

        <div>
          <label htmlFor="user"> Username:</label>
          <input name="username" type="text" placeholder="Username" />
        </div>
        <div>
          <label htmlFor="pass"> Password:</label>
          <input name="password" type="password" placeholder="password" />
        </div>
        <div>
          <button type='submit'>Entra</button>
        </div>

      </form>
    </div>
  );
}