import { db } from "../database/db.connection.js"

export async function postOrderDB(clientId, cakeId, quantity, totalPrice){
    return await db.query(`
    INSERT INTO orders
    ("clientId", "cakeId", quantity , "totalPrice", "createdAt")
    VALUES ($1, $2, $3, $4, NOW());`,
    [clientId, cakeId, quantity, totalPrice])
}

export async function getOrderByIdDB(id){
    return await db.query(`SELECT 
    orders.id AS "orderId",
    TO_CHAR(orders."createdAt", 'YYYY-MM-DD HH24:MI') AS "createdAt",
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
    WHERE orders.id=$1
    ;`, [id])
}

export async function getOrdersDB(date){

    if(date){
        return await db.query(`
            SELECT 
            orders.id AS "orderId",
            TO_CHAR(orders."createdAt", 'YYYY-MM-DD HH24:MI') AS "createdAt",
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
            WHERE DATE(orders."createdAt"::DATE)=$1::DATE
            ;`, [date]  
        )
    }
    else {
        return await db.query(`
            SELECT 
            orders.id AS "orderId",
            TO_CHAR(orders."createdAt", 'YYYY-MM-DD HH24:MI') AS "createdAt",
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
            ;`
        )
    }
}