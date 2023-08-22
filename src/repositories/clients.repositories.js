import { db } from "../database/db.connection.js"

export async function postClientDB(name, address, phone){
    return await db.query(`
    INSERT INTO clients
    (name, address, phone)
    VALUES ($1, $2, $3);`,
    [name, address, phone])
}


export async function getClientOrdersById(clientId){
    return await db.query(`
    SELECT
    orders.id AS "orderId",
    orders.quantity,
    TO_CHAR(orders."createdAt", 'YYYY-MM-DD HH24:MI') AS "createdAt",
    orders."totalPrice",
    cakes.name AS "cakeName"
    FROM orders 
    JOIN cakes ON orders."cakeId" = cakes.id
    JOIN clients ON orders."clientId" = clients.id
    WHERE orders."clientId"=$1
    ;`, [clientId])
}

export async function getClientByIdDB(id){
    return await db.query(`SELECT * FROM clients WHERE id=$1;`, [id])
}