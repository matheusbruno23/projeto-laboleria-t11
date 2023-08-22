import { db } from "../database/db.connection.js"

export async function postClientDB(name, adress, phone){
    return await db.query(`
    INSERT INTO clients
    (name, adress, phone)
    VALUES ($1, $2, $3);`,
    [name, adress, phone])
}


export async function getClientOrdersById(clientId){
    return await db.query(`SELECT * FROM orders WHERE "clientId"=$1;`, [clientId])
}