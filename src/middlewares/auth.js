const adminAuth = (req, res, next) => {
    const token = "xyz";
    console.log(" Admin Authorized !!")
    if (token === "xyz") {
      next();
    } else {
      res.status(401).send("Admin Unauthorized");
    }
  };
const userAuth = (req, res, next) => {
    const token = "xsyz";
    console.log("User Authorized !!")
    if (token === "xyz") {
      next();
    } else {
      res.status(401).send("User Unauthorized");
    }
  };

module.exports = {adminAuth,userAuth};