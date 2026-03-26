function validate(schema) {
  return (req, res, next) => {
    const result = schema.safeParse({
      body: req.body,
      params: req.params,
      query: req.query,
      file: req.file,
    });

    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: "Validation error",
        errors: result.error.issues.map((e) => {
          return { field: e.path.join("."), message: e.message };
        }),
      });
    }

    Object.assign(result.data, req);

    next();
  };
}

module.exports = validate;
