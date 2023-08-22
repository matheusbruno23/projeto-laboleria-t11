import { getCakeByIdDB } from "../repositories/cakes.repositories.js"
import { getClientByIdDB } from "../repositories/clients.repositories.js"
import { getOrdersDB, postOrderDB } from "../repositories/orders.repositories.js"

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
        const orders = await getOrdersDB()
        
        if(orders.rowCount === 0) return res.status(404).send([])

        const allOrders = orders.rows.map( (o) => {

            const orderData = {
                client: {
                    id: o.clientId,
                    name: o.clientName,
                    address: o.address,
                    phone: o.phone
                },
                cake:{
                    id: o.cakeId,
                    name: o.cakeName,
                    price: o.price,
                    description: o.description,
                    image: o.image
                },
                orderId: o.orderId,
                createdAt: o.createdAt,
                quantity: o.quantity,
                totalPrice: o.totalPrice
            }
            return orderData
        })

        return res.status(200).send(allOrders)

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