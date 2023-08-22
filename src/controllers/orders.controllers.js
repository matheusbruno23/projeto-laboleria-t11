import { getCakeByIdDB } from "../repositories/cakes.repositories.js"
import { getClientByIdDB } from "../repositories/clients.repositories.js"
import { postOrderDB } from "../repositories/orders.repositories.js"

export async function orderCake(req, res){

    const {clientId, cakeId, quantity, totalPrice} = req.body

    try {
        const existingClient = await getClientByIdDB(clientId)
        if(existingClient.rowCount === 0) return res.sendStatus(404)

        const existingCake = await getCakeByIdDB(cakeId)
        if(existingCake.rowCount === 0) return res.sendStatus(404)

        await postOrderDB(clientId, cakeId, quantity , totalPrice)

        return res.sendStatus(201)
        
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

export async function getOrders(req, res){
    try {
        
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

export async function getOrderById(req, res){
    try {
        
    } catch (error) {
        return res.status(500).send(error.message)
    }
}