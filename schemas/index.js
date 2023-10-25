import Joi from 'joi';

export const schemas = {
    movie: Joi.object().keys({
        name: Joi.string().required().min(2).max(50).required(),
        releaseYear: Joi.number().integer().required().min(1800),
        duration: Joi.number().integer().optional(),
    }),
};
