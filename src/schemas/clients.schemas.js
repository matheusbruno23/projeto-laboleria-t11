import joi from "joi";

export const clientSchema = joi.object({
    name: joi.string().required(),
    adress: joi.string().required(),
    phone: joi.string().min(10).max(11).required()
})