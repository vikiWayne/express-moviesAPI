export const validateRequest = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
        return res.status(400).json({
            status: 'fail',
            message: 'Invalid request',
            errors: error.details.map((detail) => detail.message),
        });
    }

    next();
};
