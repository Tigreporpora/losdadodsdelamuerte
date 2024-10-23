export default function Login() {
    return (
      <div>
        {/* 
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
          <div>
             <input type="text" placeholder="Username" />
          </div>
          <div>
            <input type="password" placeholder="password" />
          </div>
          <div>
             <button>Entra</button>
          </div>
        </div>
  
      </div> 
    );
  }