import joi from "joi";

export const cakeSchema = joi.object({
        name: joi.string().required(),
        price: joi.number().precision(2).positive().required(),
        image: joi.string().uri().required(),
        description: joi.string()
})