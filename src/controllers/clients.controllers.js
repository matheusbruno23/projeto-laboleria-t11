import { postClientDB } from "../repositories/clients.repositories.js"

export async function createClient(req, res){

    const {name, address, phone} = req.body

    try {

        await postClientDB(name, address, phone)
        return res.sendStatus(201)
        
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

export async function getClientOrders(req, res){
    try {
        
    } catch (error) {
        return res.status(500).send(error.message)
    }
}