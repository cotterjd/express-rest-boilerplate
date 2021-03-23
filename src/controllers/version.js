/**
 * @api {get} /version returns version
 * @apiName getVersin
 * @apiGroup Get Version
 * @apiVersion 1.0.0
 * @apiExample {curl} Example usage:
 * curl http:localhost:3040/version
 * @apiSuccess {string} version
 * @apiSuccessExample {json} Success response:
 *   HTTPS 200 OK
 *   "1.0.0"
 */
module.exports = (req, res) => {
  const version = require(`../../package.json`).version
  res.send(version)
}
