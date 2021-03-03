const Joi = require('joi')

const registerValidation = (data) => {
    const schema = Joi.object({
        username: Joi.string()
            .min(3)
            .required(),
        password: Joi.string()
            .min(3)
            .required(),
        email: Joi.string()
            .email({ tlds: { allow: false } })
            .min(6)
            .required(),
    })

    // return await schema.validate(data)
    return schema.validate(data)
}


const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string()
            .email({ tlds: { allow: false } })
            .min(6)
            .required(),
        password: Joi.string()
            .min(3)
            .required(),
    })

    // return await schema.validate(data)
    return schema.validate(data)
}

module.exports = {
    registerValidation,
    loginValidation,
}