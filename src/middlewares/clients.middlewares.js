import { clientSchema } from '../schemas/clients.schemas.js';

export function validateClient(req, res, next) {
  const { error } = clientSchema.validate(req.body , {abortEarly:false});
  if (error) {
    return res.status(400).send({ message: 'Dados inválidos', details: error.details });
  }
  next();
}