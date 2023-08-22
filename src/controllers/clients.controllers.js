import { getClientByIdDB, getClientOrdersById, postClientDB } from "../repositories/clients.repositories.js"

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

    const {id} = req.params

    try {
        const existingClient = await getClientByIdDB(id)
        if(existingClient.rowCount === 0) return res.sendStatus(404)

        const allClientOrders = await getClientOrdersById(id)

        const formatedOrders = allClientOrders.rows.map((o)=> {

            const orderData = {
                orderId: o.orderId,
                quantity: o.quantity,
                createdAt: o.createdAt,
                totalPrice: o.totalPrice,
                cakeName: o.cakeName
            }
            return orderData
        })

        return res.send(allClientOrders.rows)
        
    } catch (error) {
        return res.status(500).send(error.message)
    }
}