const verify = (req, res, next) => {
    const { name, email, password, mobile } = req.body;
    if (
      name == undefined ||
      email == undefined ||
      password == undefined ||
      mobile.length < 10 ||
      mobile.length>10||
      mobile == undefined ||
      password.length < 6 ||
      name < 3 ||
      mobile[0] <= 5
    ) {
      res.send({});
    } else next();
  };
  export { verify };