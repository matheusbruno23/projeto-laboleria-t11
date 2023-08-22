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

export async function getOrdersDB(){
    return await db.query(`
    SELECT 
    orders.id AS "orderId",
    orders."createdAt",
    orders.quantity,
    orders."totalPrice",
    cakes.id AS "cakeId",
    cakes.name AS "cakeName",
    cakes.price,
    cakes.description,
    cakes.image,
    clients.id AS "clientId",
    clients.name AS "clientName",
    clients.address,
    clients.phone
    FROM orders
    JOIN clients ON orders."clientId" = clients.id
    JOIN cakes ON cakes.id = cakes.id
    ;`)
}