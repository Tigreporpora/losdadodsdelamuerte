export default function Registrati() {
    return (
      <form action='/api/utente' method="post">
        
        <div> 
          <div>
            <label htmlFor="user"> Username:</label>
            <input name="username" type="text" placeholder="Username" />
          </div>
          <div>
            <label htmlFor="pass"> Password:</label>
            <input name="password" type="password" placeholder="password" />
          </div>
          <div>
             <label htmlFor="Bdate"> Data di nascita:</label>
             <input name="date" type="date" placeholder="data  di nascita" />
          </div>
          <div>
             <label htmlFor="sex"> Sesso:</label>
             <select name="sesso">
                <option value="M">Maschio</option>
                <option value="F">Femmina</option>
                </select>
          </div>
          <div>
             <button type='submit' style= {{
               backgroundColor: 'red',
               color: 'white',
               padding: '15px 32px',
               textAlign: 'center',
               textDecoration: 'none',
               display: 'inline-block',
               fontSize: '16px',
               margin: '4px 2px',
               cursor: 'pointer',
               borderRadius: '12px',
               border: 'none',
             }}>diventa un combattente del destino</button>
          </div>
          <div>
             <button style= {{
               backgroundColor: 'red',
               color: 'white',
               padding: '15px 32px',
               textAlign: 'center',
               textDecoration: 'none', 
               display: 'inline-block',
               fontSize: '16px',
               margin: '4px 2px',
               cursor: 'pointer',
               borderRadius: '12px',
               border: 'none',
             }}>se non vuoi giocare piglialo in culo</button>
          </div>
        </div>
  
      </form> 
    );
  }