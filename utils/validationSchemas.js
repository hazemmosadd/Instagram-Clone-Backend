const Joi = require("joi");
const createUserSchema = Joi.object({
  userName: Joi.string().required(),
  fullName: Joi.string().required(),
  email: Joi.string().email(),
  phoneNumber: Joi.string(),
  password: Joi.string().min(8).required(),
}).or("email", "phoneNumber");
//or('email', 'phoneNumber') ensures that at least one of email or phoneNumber is provided.

module.exports = { userValidationChema: createUserSchema };
