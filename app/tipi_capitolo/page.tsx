import mysql from "mysql2/promise";
import { ConnectionOptions } from "mysql2";

export default async function Home() {
    var hostname = "130.211.67.125";
    //var database = "DMCBooking";
    var database = "LosDadosDeLaMuerte";
    var port = "3306";
    var username = "root";
    var password = "{RA1B3_::I0bpVg(";

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

    const [results, fields] = await pool.query(`SELECT * FROM tipi_capitoli`);
    return (
        <div>
            {results.map((r: any) => {
                return (
                    <>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title"> {r.nome} </h5>
                                <a href="#" className="btn btn-primary">
                                    edit
                                </a>
                            </div>
                        </div>
                    </>
                );
            })}
            <form action="/api/tipi_capitolo" method="post">
                <div>
                    <label>Crea il tuo capitolo:</label>
                    <input name="nome" type="text" placeholder="Crea il tuo capitolo" />
                </div>
                <div>
                    <button
                        type="submit"
                        style={{
                            backgroundColor: "red",
                            color: "white",
                            padding: "15px 32px",
                            textAlign: "center",
                            textDecoration: "none",
                            display: "inline-block",
                            fontSize: "16px",
                            margin: "4px 2px",
                            cursor: "pointer",
                            borderRadius: "12px",
                            border: "none",
                        }}
                    >
                        submit
                    </button>
                </div>
            </form>
        </div>
    );
}
