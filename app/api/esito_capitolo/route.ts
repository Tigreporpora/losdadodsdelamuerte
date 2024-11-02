import mysql from "mysql2/promise";
import { ConnectionOptions } from "mysql2";
import { NextResponse } from "next/server";

var hostname = "130.211.67.125";
//var database = "DMCBooking";
var database = "LosDadosDeLaMuerte";
var port = "3306";
var username = "root";
var password = "{RA1B3_::I0bpVg(";

export async function GET() {
    try {
        var pool = await mysql.createConnection({
            host: hostname,
            user: username,
            password: password,
            database: database,
            port: parseInt(port),
            decimalNumbers: true,
        } as ConnectionOptions);
        if (pool === undefined) throw new Error("pool is undefined");
    
        pool.connect();
        pool.on("error", function () {
            console.error("pool error - max connection reached, waiting for release...");
        });
    
        const [results, fields] = await pool.query(`SELECT * FROM esito_capitolo`);
        return NextResponse.json({ data: results }, { status: 200 });
    }
    catch (e) {
        return new Response(e.message);
    }


}
