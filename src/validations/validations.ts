import joi from 'joi';

const userValidation = joi.object({
  name: joi.string().min(3).required(),
  class: joi.string().min(2).max(2).required(),
});

const questionValidation = joi.object({
  question: joi.string().min(5).required(),
  student: joi.string().min(3).required(),
  class: joi.string().min(2).max(2).required(),
  tags: joi.string().min(2).required(),
});

export {
  userValidation,
  questionValidation,
};
