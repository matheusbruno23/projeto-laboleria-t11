import { db } from "../database/db.connection.js"

export async function postCakeDB(name, price, image, description){
    return await db.query(`
    INSERT INTO cakes
    (name, price, image, description)
    VALUES ($1, $2, $3, $4);`,
    [name, price, image, description])
}