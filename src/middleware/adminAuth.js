const adminAuth = (req, res, next) => {
  const adminValue = "xyz";
  const isAdmin = adminValue === "admin";
  if (!isAdmin) {
    res.status(401).send("you are not admin");
  } else {
    next();
  }
};

module.exports = { adminAuth };
