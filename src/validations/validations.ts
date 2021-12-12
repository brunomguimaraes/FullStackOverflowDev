import joi from 'joi';

const testValidation = joi.object({
  name: joi.string().min(3).required(),
});

export {
  testValidation,
};
