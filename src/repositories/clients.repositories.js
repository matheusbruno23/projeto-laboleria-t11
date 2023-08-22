import { db } from "../database/db.connection.js"

export async function postClientDB(name, address, phone){
    return await db.query(`
    INSERT INTO clients
    (name, address, phone)
    VALUES ($1, $2, $3);`,
    [name, address, phone])
}


export async function getClientOrdersById(clientId){
    return await db.query(`SELECT * FROM orders WHERE "clientId"=$1;`, [clientId])
}

export async function getClientByIdDB(id){
    return await db.query(`SELECT * FROM clients WHERE id=$1;`, [id])
}