import { db } from "../database/db.connection.js"

export async function postOrderDB(clientId, cakeId, quantity, totalPrice){
    return await db.query(`
    INSERT INTO orders
    ("clientId", "cakeId", quantity , "totalPrice", "createdAt")
    VALUES ($1, $2, $3, $4, NOW());`,
    [clientId, cakeId, quantity, totalPrice])
}

export async function getOrderByIdDB(id){
    return await db.query(`SELECT * FROM orders WHERE id=$1;`, [id])
}