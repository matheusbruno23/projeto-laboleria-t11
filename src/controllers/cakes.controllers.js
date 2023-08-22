import { getCakeByNameDB, postCakeDB } from "../repositories/cakes.repositories.js"

export async function createRecipe(req, res){

    const {name, price , image, description} = req.body

    try {
        const existingRecipe = await getCakeByNameDB(name)
        if(existingRecipe.rowCount !== 0) return res.sendStatus(409)
        
        await postCakeDB(name, price, image, description)
        
        return res.sendStatus(201)

    } catch (error) {
        return res.status(500).send(error.message)
    }
}