module.exports = function (request, response, next) {
  // Disable authentication checking on /login.
  if (request.path === '/login' || request.path === '/') {
    return next(); // next() alone doesn't end the function, we must return.
  }

  // If the request.session.authentication hash is empty,
  // the user is not logged in and we redirect them.
  var authentication = request.session.authentication || {};
  if (!authentication.username || !authentication.password) {
    return response.redirect('/login');
  }

  // If they are logged in, set provide their information to our
  // templates as `currentUser`.
  response.locals.currentUser = authentication;

  next();
}