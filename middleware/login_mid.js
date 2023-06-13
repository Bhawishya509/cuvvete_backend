const verifypass = (req, res, next) => {

      const { email, password } = req.body;
  
      if (email == undefined &&password == undefined ||password.length < 6 || email.search("@gmail.com")==-1 ) {
        res.send({})
      } else next();
    
  };
  export { verifypass };