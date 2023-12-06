import Joi from "joi";
import taskStatus from "./utils/constants";

const validator = (schema) => (payload) =>
  schema.validate(payload, { abortEarly: false });

const taskValidationSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  dueDate: Joi.date().required(),
  status: Joi.string()
    .valid(...taskStatus)
    .default("not started"),
});

const validateTasks = validator(taskValidationSchema);

export default validateTasks;
