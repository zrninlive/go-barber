module.exports = (req, res, next) => {
  if (req.session && req.session.user) {
    // Define as variaveis pra view no nunjucks
    res.locals.user = req.session.user

    return next()
  }

  return res.redirect('/')
}
