const Joi = require('joi')

const registerValidation = async (data) => {
    const schema = Joi.object({
        username: Joi.string()
            .min(3)
            .required(),
        password: Joi.string()
            .min(3)
            .required(),
        email: Joi.string()
            .min(6)
            .required()
            .email(),
    })

    return await schema.validate(data)
    
}

module.exports = {
    registerValidation,
}