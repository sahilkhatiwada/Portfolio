export const validateReqBody = (validationSchema) => {
  return async (req, res, next) => {
    const newData = req.body;

    let validatedData;

    try {
      validatedData = await validationSchema.validate(newData);
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }

    req.body = validatedData;

    next();
  };
};
