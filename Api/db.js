import mysql from "mysql";

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Carol@99218048",
    database: "oficinas"
});
