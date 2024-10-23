import mysql from "mysql2/promise";
import { ConnectionOptions } from "mysql2";
import { NextResponse } from "next/server";

var hostname = "130.211.67.125";
//var database = "DMCBooking";
var database = "LosDadosDeLaMuerte";
var port = "3306";
var username = "root";
var password = "{RA1B3_::I0bpVg(";




export async function POST(req: Request) {
    try {
        const formData = await req.formData()
        const username1 = formData.get('username')
        const password1 = formData.get('password')
 
   
        

        
        var pool = await mysql.createConnection({
            host: hostname,
            user: 'root',
            password: '{RA1B3_::I0bpVg(',
            database: database,
            port: parseInt(port),
            decimalNumbers: true,
        } as ConnectionOptions);
    
        if (pool === undefined) throw new Error("pool is undefined");
    
        pool.connect();
        pool.on("error", function () {
            console.error("pool error - max connection reached, waiting for release...");
        });

        const [results, fields]= (await pool.query(`SELECT MAX(ID) as Max_ID FROM Utente;`))
        const new_ID = results[0].Max_ID +1
       
    //generare un numero che sia maggiore di 1 dell'ID più alto della tabella utente e inserirlo nella successiva inser
    //usare esempio della get come base
        await pool.query('INSERT INTO Utente value('+ new_ID  +',"' + username1 +'", "' + sesso + '", "' + data + '", "' + dataregistrazione + '", "' + password1 + '")');

        return NextResponse.json({ data: true }, { status: 200 });
    }
    catch (e) {
        return new Response(e.message);
    }

    
}