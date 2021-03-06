const authenticated = (req, res, next)=> {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401);
  res.end();

}

export default authenticated;